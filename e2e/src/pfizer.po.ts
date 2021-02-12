import { browser, by, element } from 'protractor';

export class PfizerPage {
  async navigateToPfizer(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/pfizer');
  }

  getCheckboxVaccino(): boolean {
    let checkbox = element(by.css('app-root .content input'));
    if (checkbox.isEnabled()) {
      return true;
    }
    return false;
  }
}
