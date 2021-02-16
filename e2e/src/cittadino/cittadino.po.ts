import { browser, by, element } from 'protractor';

export class CittadinoPage {
  async navigateTo(): Promise<unknown> {
    browser.waitForAngular();
    return browser.get(browser.baseUrl + 'cittadino');
  }

  async getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }
}
