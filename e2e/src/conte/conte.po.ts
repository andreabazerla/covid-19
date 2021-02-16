import { browser, by, element } from 'protractor';

export class ContePage {
  async navigateTo(): Promise<unknown> {
    browser.waitForAngular();
    return browser.get(browser.baseUrl + 'conte');
  }

  async getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }
}
