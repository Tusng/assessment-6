const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  // 1st additional test case
  test('Check that clicking the Draw button displays the div with id = choices', async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('draw')).click();
    await driver.wait(until.elementLocated(By.id('choices')), 3000)
  });

  // 2nd additional test case
  test('Check that clicking an "Add to Duo" button displays the div with id = "player-duo"', async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id('draw')).click();
    await driver.wait(until.elementLocated(By.className('bot-btn')), 3000)
    await driver.findElement(By.className("bot-btn")).click();
    await driver.wait(until.elementLocated(By.id('player-duo')), 3000)
  });

});