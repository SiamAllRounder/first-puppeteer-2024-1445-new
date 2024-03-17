// const puppeteer = require('puppeteer');
import puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://example.com');
  await page.screenshot({path: 'example.png'});
  await browser.close();
})();