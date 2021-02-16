import { browser, by, element } from 'protractor';

export class CinaPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'cina');
  }

  async getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }
}
