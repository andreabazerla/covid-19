import { browser, by, element, logging } from 'protractor';
import { CinaPage } from './cina.po';

describe('Cina', () => {
  let page: CinaPage;

  beforeEach(() => {
    page = new CinaPage();
  });

  it('should display cina title', async () => {
    await browser.sleep(250);
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Cina');
  });

  it('should pandemia checkbox to be enable and false', async () => {
    const checkboxPandemia = await element(by.css('input'));
    expect(checkboxPandemia.isEnabled()).toBeTruthy();
    expect(checkboxPandemia.isSelected()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
