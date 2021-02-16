import { browser, by, element, logging } from 'protractor';
import { ContePage } from './conte.po';

describe('Conte', () => {
  let page: ContePage;

  beforeEach(() => {
    page = new ContePage();
  });

  it('should display conte title', async () => {
    await browser.sleep(250);
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Conte');
  });

  it('should zona select to be disable and empty', async () => {
    const selectZona = await element(by.css('select'));
    expect(selectZona.isEnabled()).toBeFalsy();
    expect(selectZona.getText()).toBe('');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
