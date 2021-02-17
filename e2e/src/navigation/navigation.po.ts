import { browser, by, element } from 'protractor';

export class NavigationPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }
}
