import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
import { createServer } from 'vite';

const server = process.env.BASE_URL ? null : await createServer({ server: { host: '127.0.0.1', port: 5189, strictPort: true } });
await server?.listen();
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH });
const base = process.env.BASE_URL || 'http://127.0.0.1:5189';
try {
  for (const delayed of [false, true]) {
    const page = await browser.newPage();
    await page.route('https://assets.calendly.com/assets/external/widget.js', async route => {
      if (delayed) await new Promise(resolve => setTimeout(resolve, 500));
      await route.fulfill({ contentType: 'application/javascript', body: `
        window.Calendly = { initInlineWidget({parentElement}) {
          const frame = document.createElement('iframe');
          frame.title = 'Calendly test widget';
          parentElement.appendChild(frame);
        }};
        document.querySelectorAll('.calendly-inline-widget').forEach(container => {
          if (container.dataset.autoLoad !== 'false') window.Calendly.initInlineWidget({parentElement: container});
        });
      ` });
    });
    await page.goto(`${base}/contact`);
    await page.locator('#booking iframe').waitFor();
    assert.equal(await page.locator('#booking iframe').count(), 1);
    for (let visit = 0; visit < 3; visit++) {
      await page.locator('footer a[href="/"]').click();
      await page.locator('footer a[href="/contact"]').click();
      await page.locator('#booking iframe').waitFor();
      assert.equal(await page.locator('#booking iframe').count(), 1);
      await page.locator('header a[href="/contact"]').first().click();
      assert.equal(await page.locator('#booking iframe').count(), 1);
    }
    assert.equal(await page.locator('script[src*="assets.calendly.com"]').count(), 1);
    await page.close();
  }
  console.log('PASS: one Calendly iframe on direct load, delayed script load, repeat navigation, and Contact CTA links.');
} finally {
  await browser.close();
  await server?.close();
}
