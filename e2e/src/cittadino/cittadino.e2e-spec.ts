import { browser, by, element, logging } from 'protractor';
import { CittadinoPage } from './cittadino.po';

describe('Cittadino', () => {
  let page: CittadinoPage;

  beforeEach(() => {
    page = new CittadinoPage();
  });

  it('should display cittadino title', async () => {
    await browser.sleep(500);
    await page.navigateTo('cittadino');
    await browser.sleep(500);
    expect(await page.getTitleText()).toEqual('Cittadino');
  });

  it('should zona select to be disable and empty', async () => {
    expect(await element(by.css('select')).isEnabled()).toBe(false);

    const optionGialla = await element(by.css('.option-gialla'));
    const optionArancione = await element(by.css('.option-arancione'));
    const optionRossa = await element(by.css('.option-rossa'));

    expect(optionGialla.isSelected()).toBeTruthy();
    expect(optionArancione.isSelected()).toBeFalsy()
    expect(optionRossa.isSelected()).toBeFalsy();
  });

  it('should mascherine text to be zero', async () => {
    expect(await element(by.css('.mascherine')).getText()).toBe('0');
  });

  it('should universita button to be enable', async () => {
    expect(await element(by.css('.button-universita')).isEnabled()).toBe(true);
  });

  it('should farmacia button to be disable', async () => {
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(false);
  });

  it('should cane button to be enable', async () => {
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(true);
  });

  it('should ufficio button to be enable', async () => {
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(true);
  });

  it('should bar button to be enable', async () => {
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(true);
  });

  it('should cane, ufficio and bar buttons enable with mascherine grather than 0 else disable with zona setted to gialla', async () => {
    await page.routeTo('cina');
    await browser.sleep(500);

    const checkboxPandemia = await element(by.css('input'));
    checkboxPandemia.click();
    await browser.sleep(500);
    expect(checkboxPandemia.isSelected()).toBeTruthy();

    await page.routeTo('cittadino');
    await browser.sleep(500);

    await element(by.css('.button-farmacia')).click();
    await browser.sleep(500);

    expect(await element(by.css('.mascherine')).getText()).toEqual('10');
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(true);

    await element(by.css('.button-cane')).click();
    await browser.sleep(500);

    expect(await element(by.css('.mascherine')).getText()).toEqual('9');
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(true);

    await element(by.css('.button-cane')).click();
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);
  });

  it('should cane, ufficio buttons enable with mascherine grather than 0 else disable with zona setted to arancione', async () => {
    await page.routeTo('conte');
    await browser.sleep(500);

    const optionArancione = await element(by.css('.option-arancione'));
    await optionArancione.click();
    await browser.sleep(500);

    expect(optionArancione.isSelected()).toBeTruthy();

    await page.routeTo('cittadino');
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);

    await element(by.css('.button-farmacia')).click();
    await browser.sleep(500);

    expect(await element(by.css('.mascherine')).getText()).toEqual('10');
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);

    await element(by.css('.button-cane')).click();
    await browser.sleep(500);

    expect(await element(by.css('.mascherine')).getText()).toEqual('9');
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);

    await element(by.css('.button-cane')).click();
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);
  });

  it('should only cane button enable with mascherine grather than 0 with zona setted to rossa', async () => {
    await page.routeTo('conte');
    await browser.sleep(500);

    const optionRossa = await element(by.css('.option-rossa'));
    await optionRossa.click();
    await browser.sleep(500);

    expect(optionRossa.isSelected()).toBeTruthy();

    await page.routeTo('cittadino');
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);

    await element(by.css('.button-farmacia')).click();
    await browser.sleep(500);

    expect(await element(by.css('.mascherine')).getText()).toEqual('10');
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);

    await element(by.css('.button-cane')).click();
    await browser.sleep(500);

    expect(await element(by.css('.mascherine')).getText()).toEqual('9');
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    await element(by.css('.button-cane')).click();
    await browser.sleep(100);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);

    await element(by.css('.button-cane')).click();
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
