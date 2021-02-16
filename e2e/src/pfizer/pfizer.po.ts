import { browser, by, element } from 'protractor';

export class PfizerPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'pfizer');
  }

  async getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }
}
