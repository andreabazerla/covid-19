import { browser, by, element } from 'protractor';

export class CinaPage {

  async navigateToCina(): Promise<unknown> {
    return browser.get(browser.baseUrl + 'cina');
  }

  async navigateToPfizer(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/pfizer');
  }

  getTitle() {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  setCheckboxPandemia(): void {
    let checkbox = element(by.css('app-root .content input'));
    if (checkbox.isSelected()) {
      element(by.css('app-root .content input')).click();
    }
  }
}
