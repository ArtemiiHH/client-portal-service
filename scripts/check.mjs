import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROMIUM_PATH });
const report = [];
await mkdir('.impeccable/review', { recursive: true });
for (const [name, width, height] of [['desktop',1440,900], ['mobile',390,844], ['small-mobile',320,740], ['tablet',768,1024], ['laptop',1024,768]]) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce', permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await context.newPage();
  const errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(process.env.BASE_URL || 'http://localhost:5173/', { waitUntil: 'networkidle' });
  await page.evaluate(()=>document.fonts.ready);
  assert.equal(await page.locator('h1').count(),1);
  assert.deepEqual(await page.locator('main section').evaluateAll(nodes => nodes.map(n => n.getAttribute('aria-labelledby'))), ['hero-title', 'process-title', 'deliverables-title', 'pricing-title', 'contact-title']);
  assert.equal(await page.locator('main section#pricing article').count(), 1);
  const bookingLinks = page.getByRole('link', {name: /Book a (Discovery )?Call|Discuss Your Portal/i});
  const destinations = await bookingLinks.evaluateAll(nodes => nodes.map(n => n.getAttribute('href')));
  assert.equal(new Set(destinations).size, 1);
  const dimensions = await page.evaluate(()=>({ scroll:document.documentElement.scrollWidth, width:innerWidth, h1Lines: Math.round(document.querySelector('h1').getBoundingClientRect().height / parseFloat(getComputedStyle(document.querySelector('h1')).lineHeight)) }));
  assert(dimensions.scroll <= width, `${name}: horizontal overflow`);
  assert(dimensions.h1Lines >= 2 && dimensions.h1Lines <= 4, `${name}: hero headline wraps to ${dimensions.h1Lines} lines`);
  const heroButton = await page.locator('section').first().getByRole('link', { name: 'Book a discovery call' }).boundingBox();
  assert(heroButton.y + heroButton.height < height, `${name}: CTA outside first viewport`);
  const axe = await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
  assert.equal(axe.violations.length,0, JSON.stringify(axe.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))));
  if (name === 'desktop' || name === 'mobile') await page.screenshot({ path:`.impeccable/review/${name}.png`,fullPage:true });
  if (width < 768) {
    await page.getByRole('button',{name:'Open menu'}).click();
    await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Pricing',exact:true}).click();
    assert.equal(await page.getByRole('button',{name:'Open menu'}).count(),1);
    assert(page.url().endsWith('#pricing'));
  }
  await page.getByRole('link', {name:'View Our Process'}).click();
  assert(page.url().endsWith('#process'));
  if (destinations[0] === '#booking-placeholder') {
    await page.locator('#contact').getByRole('link', {name:'Book a Discovery Call'}).click();
    assert(page.url().endsWith('#booking-placeholder'));
    await page.locator('#booking-placeholder').waitFor({state:'visible'});
  }
  assert.deepEqual(errors,[]);
  report.push({name,width,height,...dimensions, accessibilityViolations:axe.violations.length, interactions:'passed'});
  await context.close();
}
await browser.close();
await writeFile('.impeccable/review/check-results.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
