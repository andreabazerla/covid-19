import { browser, by, element } from 'protractor';

export class CittadinoPage {
  async navigateTo(url: string): Promise<unknown> {
    return browser.get(browser.baseUrl + url);
  }

  async routeTo(route: string): Promise<void> {
    this.maximizeWindow();

    await element(by.css('.menu-login')).click();
    await browser.sleep(500);

    await element(by.css('.menu-' + route)).click();
    await browser.sleep(500);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }

  maximizeWindow(): void {
    browser.driver.manage().window().maximize();
  }
}
