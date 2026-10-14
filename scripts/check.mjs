import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_PATH });
const base = process.env.BASE_URL || 'http://localhost:5173';
const report = [];
await mkdir('.impeccable/review', { recursive: true });
try {
  for (const [name, width, height] of [['desktop',1440,900], ['mobile',390,844], ['small-mobile',320,740], ['tablet',768,1024], ['laptop',1024,768]]) {
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const [routeName, route] of [['home','/'], ['about','/about'], ['contact','/contact']]) {
      await page.goto(new URL(route, base).href, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator('h1').count(), 1);
      const dimensions = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, width: innerWidth }));
      assert(dimensions.scroll <= width, `${routeName}/${name}: horizontal overflow`);
      const navigation = page.getByRole('navigation', {name:'Main navigation'});
      assert.equal(await navigation.locator('[aria-current="page"]').getAttribute('href'), route);
      const callLinks = page.getByRole('link', {name:/Book a (Discovery )?Call|Discuss Your Portal/i});
      const destinations = await callLinks.evaluateAll(nodes => nodes.map(node => node.getAttribute('href')));
      assert(destinations.length && destinations.every(href => href === '/contact#booking'));
      if (route === '/') {
        assert.deepEqual(await page.locator('main section').evaluateAll(nodes => nodes.map(node => node.getAttribute('aria-labelledby'))), ['hero-title','process-title','deliverables-title','pricing-title','contact-title']);
        const button = await page.locator('main section').first().getByRole('link', {name:'Book a Discovery Call'}).boundingBox();
        assert(button.y + button.height < height, `${name}: first-viewport CTA`);
      }
      if (route === '/about') {
        assert.equal(await page.locator('main article').count(), 4);
        const samples = await page.getByText('SAMPLE / NOT A REAL TESTIMONIAL', {exact:true}).count();
        assert(samples === 0 || samples === 2);
        if (process.env.EXPECT_PRODUCTION === '1') assert.equal(samples, 0);
      }
      if (route === '/contact') {
        assert.equal(await page.locator('#booking').count(), 1);
        assert(await page.getByRole('button', {name:'Book a Discovery Call'}).isDisabled());
        assert.equal(await page.locator('iframe, form, input').count(), 0);
      }
      const axe = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
      assert.equal(axe.violations.length, 0, JSON.stringify(axe.violations.map(item => ({id:item.id, nodes:item.nodes.map(node => node.target)}))));
      if (name === 'desktop' || name === 'mobile') await page.screenshot({path:`.impeccable/review/${routeName}-${name}.png`,fullPage:true});
      if (width < 768) {
        await page.getByRole('button', {name:'Open menu'}).click();
        await page.getByRole('navigation', {name:'Mobile navigation'}).getByRole('link', {name:'About',exact:true}).click();
        await page.waitForURL('**/about');
        assert.equal(await page.getByRole('button', {name:'Open menu'}).count(), 1);
      }
      report.push({route, name, width, height, ...dimensions, accessibilityViolations:axe.violations.length});
    }
    await page.goto(new URL('/',base).href, {waitUntil:'networkidle'});
    await page.evaluate(() => { window.__navigationMarker = 'same-document'; });
    for (const [label, route] of [['About','/about'], ['Contact','/contact'], ['Home','/']]) {
      await page.locator('footer').getByRole('link', {name:label,exact:true}).click();
      await page.waitForURL(url => url.pathname === route);
      assert.equal(await page.evaluate(() => window.__navigationMarker), 'same-document', 'internal navigation must not reload');
    }
    await page.goBack();
    await page.getByRole('heading', {name:"Let's Talk About Your Client Portal."}).waitFor();
    await page.goForward();
    await page.getByRole('heading', {name:'Better Client Portals for Forex Brokers.'}).waitFor();
    assert.equal(await page.evaluate(() => window.__navigationMarker), 'same-document');
    await page.getByRole('link',{name:'View Our Process'}).click();
    await page.waitForURL('**/#process');
    await page.locator('#contact').getByRole('link',{name:'Book a Discovery Call'}).click();
    await page.waitForURL('**/contact#booking');
    await page.locator('#booking').waitFor({state:'visible'});
    if (width < 768) {
      await page.getByRole('button',{name:'Open menu'}).click();
      await page.keyboard.press('Escape');
      assert.equal(await page.getByRole('button',{name:'Open menu'}).count(), 1);
      await page.getByRole('button',{name:'Open menu'}).click();
      await page.setViewportSize({width:1024,height:768});
      assert(!await page.getByRole('navigation',{name:'Mobile navigation'}).isVisible());
    }
    assert.deepEqual(errors, []);
    await context.close();
  }
  await writeFile('.impeccable/review/check-results.json',JSON.stringify(report,null,2));
  console.log(JSON.stringify(report,null,2));
} finally { await browser.close(); }
