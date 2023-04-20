const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe('test by clicking the Draw button display the div with id', () => {
  test("Draw button displays the div with id", async () => {
    await driver.get('http://localhost:3000/')

    await driver.findElement(By.name(`Draw`)).onclick()
  })
})

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:3000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});