import { browser, by, element, logging } from 'protractor';
import { PfizerPage } from './pfizer.po';

describe('Pfizer', () => {
  let page: PfizerPage;

  beforeEach(() => {
    page = new PfizerPage();
  });

  it('should display pfizer title', async () => {
    await browser.sleep(500);
    await page.navigateTo('pfizer');
    await browser.sleep(500);
    expect(await page.getTitleText()).toEqual('Pfizer');
  });

  it('should vaccino checkbox to be disable and false', async () => {
    const checkboxVaccino = await element(by.css('input'));

    checkboxVaccino.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(false)
      }
    );

    expect(checkboxVaccino.isSelected()).toBeFalsy();
  });

  it('should vaccino checkbox to be enable and true after pandemia checkbox checked and vaccino checkbox checked', async () => {

    const checkboxVaccino = await element(by.css('input'));

    checkboxVaccino.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(false)
      }
    );

    expect(checkboxVaccino.isSelected()).toBeFalsy();

    await page.routeTo('cina');
    await browser.sleep(500);

    const checkboxPandemia = await element(by.css('input'));

    expect(checkboxPandemia.isSelected()).toBeFalsy();

    checkboxPandemia.click();
    await browser.sleep(500);

    expect(checkboxPandemia.isSelected()).toBeTruthy();

    await page.routeTo('pfizer');
    await browser.sleep(500);

    checkboxVaccino.isSelected().then(
      (selected) => expect(selected).toBe(false)
    );

    expect(checkboxVaccino.isSelected()).toBeFalsy();

    checkboxVaccino.click();
    await browser.sleep(500);

    expect(checkboxVaccino.isSelected()).toBeTruthy();
  });

  it('should zona select to be disable and empty after pandemia checkbox checked and vaccino checkbox checked', async () => {

    await page.routeTo('conte');
    await browser.sleep(500);

    const selectZona = await element(by.css('.select-zona'));
    const optionGialla = await element(by.css('.option-gialla'));
    const optionArancione = await element(by.css('.option-arancione'));
    const optionRossa = await element(by.css('.option-rossa'));

    selectZona.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(false)
      }
    );

    expect(optionGialla.isSelected()).toBeFalsy();
    expect(optionArancione.isSelected()).toBeFalsy();
    expect(optionRossa.isSelected()).toBeFalsy();

  });

  it('should farmacia button to be disable and others button enable after pandemia checkbox checked and vaccino checkbox checked', async () => {

    await page.routeTo('cittadino');
    await browser.sleep(500);

    const buttonUniversita = await element(by.css('.button-universita'));
    const buttonFarmacia = await element(by.css('.button-farmacia'));
    const buttonCane = await element(by.css('.button-cane'));
    const buttonUfficio = await element(by.css('.button-ufficio'));
    const buttonBar = await element(by.css('.button-bar'));

    buttonUniversita.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(true)
      }
    );

    buttonFarmacia.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(false)
      }
    );

    buttonCane.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(true)
      }
    );

    buttonUfficio.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(true)
      }
    );

    buttonBar.isEnabled().then(
      (enabled) => {
        expect(enabled).toBe(true)
      }
    );

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
