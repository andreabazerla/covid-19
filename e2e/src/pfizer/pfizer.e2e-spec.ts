import { browser, by, element, logging } from 'protractor';
import { PfizerPage } from './pfizer.po';

describe('Pfizer', () => {
  let page: PfizerPage;

  beforeEach(() => {
    page = new PfizerPage();
  });

  it('should display pfizer title', async () => {
    await browser.sleep(250);
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Pfizer');
  });

  it('should vaccino checkbox to be disable and false', async () => {
    const checkboxVaccino = await element(by.css('input'));
    expect(checkboxVaccino.isEnabled()).toBeFalsy();
    expect(checkboxVaccino.isSelected()).toBeFalsy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
