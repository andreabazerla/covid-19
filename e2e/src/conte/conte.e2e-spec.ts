import { browser, by, element, logging } from 'protractor';
import { ContePage } from './conte.po';

describe('Conte', () => {
  let page: ContePage;

  beforeEach(() => {
    page = new ContePage();
  });

  it('should display conte title', async () => {
    await browser.sleep(500);
    await page.navigateTo('conte');
    await browser.sleep(500);
    expect(await page.getTitleText()).toEqual('Conte');
  });

  it('should zona select to be disable and empty', async () => {
    const selectZona = await element(by.css('select'));
    expect(selectZona.isEnabled()).toBe(false);
    expect(selectZona.getText()).toBe('');
  });

  it('should zona in conte setted to gialla by default after pandemia checked in cina', async () => {

    await page.routeTo('cina');
    await browser.sleep(500);

    const checkboxPandemia = await element(by.css('input'));
    checkboxPandemia.click();

    await browser.sleep(500);

    checkboxPandemia.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(true)
      }
    );

    expect(checkboxPandemia.isSelected()).toBeTruthy();

    await page.routeTo('conte');
    await browser.sleep(500);

    const selectZona = await element(by.css('.select-zona'));
    const optionGialla = await element(by.css('.option-gialla'));

    selectZona.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(true)
      }
    );

    expect(optionGialla.isSelected()).toBeTruthy();

  });

  it('should cane, ufficio and bar buttons be enable if mascherine grater thant zero after pandemia checkbox checked', async () => {

    await page.routeTo('cittadino');
    await browser.sleep(500);

    const mascherine = await element(by.css('.mascherine'));

    const buttonFarmacia = await element(by.css('.button-farmacia'));

    expect(mascherine.getText()).toEqual('0');

    await browser.sleep(500);
    buttonFarmacia.click();
    await browser.sleep(500);

    expect(mascherine.getText()).toEqual('10');

    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(true);

  });

  it('should cane and ufficio buttons be enable if mascherine grater thant zero after pandemia checkbox checked and zona setted to be arancione', async () => {

    await page.routeTo('conte');
    await browser.sleep(500);

    const selectZona = await element(by.css('.select-zona'));
    const optionArancione = await element(by.css('.option-arancione'));

    optionArancione.click();
    await browser.sleep(500);

    selectZona.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(true)
      }
    );

    expect(optionArancione.isSelected()).toBeTruthy();

    await page.routeTo('cittadino');
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);

  });

  it('should only cane button be enable if mascherine grater thant zero after pandemia checkbox checked and zona setted to be rossa', async () => {

    await page.routeTo('conte');
    await browser.sleep(500);

    const selectZona = await element(by.css('.select-zona'));
    const optionRossa = await element(by.css('.option-rossa'));

    optionRossa.click();
    await browser.sleep(500);

    selectZona.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(true)
      }
    );

    expect(optionRossa.isSelected()).toBeTruthy();

    await page.routeTo('cittadino');
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(true);
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
