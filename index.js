const puppeteer = require('puppeteer');

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ionicabizau.github.io/github-profile-languages/api.html?DorielRivalet');
  await sleep(10000);
  await page.screenshot({ path: 'language-graph.png' });

  await browser.close();
})();
