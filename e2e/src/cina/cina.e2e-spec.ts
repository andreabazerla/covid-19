import { browser, by, element, logging } from 'protractor';
import { CinaPage } from './cina.po';

describe('Cina', () => {
  let page: CinaPage;

  beforeEach(() => {
    page = new CinaPage();
  });

  it('should display cina title', async () => {
    await page.navigateTo('cina');
    await browser.sleep(500);
    expect(await page.getTitleText()).toEqual('Cina');
  });

  it('should pandemia checkbox to be enable and false', async () => {
    const checkboxPandemia = await element(by.css('input'));

    checkboxPandemia.isEnabled().then((enabled) => {
      expect(enabled).toBe(true);
    });

    expect(checkboxPandemia.isSelected()).toBeTruthy();
  });

  it('should pandemia checkbox to be enable and true after click', async () => {
    const checkboxPandemia = await element(by.css('input'));
    checkboxPandemia.click();
    await browser.sleep(500);
    expect(checkboxPandemia.isSelected()).toBeTruthy();
  });

  it('should pandemia checkbox to be enable and false after second click', async () => {
    const checkboxPandemia = await element(by.css('input'));
    checkboxPandemia.click();
    await browser.sleep(500);
    expect(checkboxPandemia.isSelected()).toBeFalsy();
  });

  it('should vaccino checkbox to be enable and false after pandemia checkbox click', async () => {
    const checkboxPandemia = await element(by.css('input'));
    checkboxPandemia.click();
    await browser.sleep(500);

    await page.routeTo('pfizer');
    await browser.sleep(500);

    const checkboxVaccino = await element(by.css('input'));

    checkboxVaccino.isEnabled().then((enabled) => {
      expect(enabled).toBe(true);
    });

    expect(checkboxVaccino.isSelected()).toBeFalsy();
  });

  it('should zona select to be enable and gialla after pandemia checkbox click', async () => {
    await page.routeTo('conte');
    await browser.sleep(500);

    const selectZona = await element(by.css('.select-zona'));
    const optionGialla = await element(by.css('.option-gialla'));

    selectZona.isEnabled().then((enabled) => {
      expect(enabled).toBe(true);
    });

    expect(optionGialla.isSelected()).toBeTruthy();
  });

  it('should farmacia button to be enable and others buttons disable after pandemia checkbox click', async () => {
    await page.routeTo('cittadino');
    await browser.sleep(500);

    expect(await element(by.css('.button-universita')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-farmacia')).isEnabled()).toBe(true);
    expect(await element(by.css('.button-cane')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-ufficio')).isEnabled()).toBe(false);
    expect(await element(by.css('.button-bar')).isEnabled()).toBe(false);
  });

  it('should vaccino checkbox to be disable and false after pandemia checkbox second click', async () => {
    await page.routeTo('cina');
    await browser.sleep(500);

    const checkboxPandemia = await element(by.css('input'));
    checkboxPandemia.click();
    await browser.sleep(500);

    expect(checkboxPandemia.isSelected()).toBeFalsy();

    await page.routeTo('pfizer');
    const checkboxVaccino = await element(by.css('input'));
    checkboxVaccino.isEnabled().then((enabled) => {
      expect(enabled).toBe(false);
    });
    expect(checkboxVaccino.isSelected()).toBeFalsy();
  });

  it('should zona select to be disable and empty after pandemia checkbox second click', async () => {
    await page.routeTo('conte');
    await browser.sleep(500);

    const selectZona = await element(by.css('.select-zona'));
    const optionGialla = await element(by.css('.option-gialla'));
    const optionArancione = await element(by.css('.option-arancione'));
    const optionRossa = await element(by.css('.option-rossa'));

    selectZona.isEnabled().then((enabled) => {
      expect(enabled).toBe(false);
    });

    expect(optionGialla.isSelected()).toBeFalsy();
    expect(optionArancione.isSelected()).toBeFalsy();
    expect(optionRossa.isSelected()).toBeFalsy();
  });

  it('should farmacia button to be disable and others buttons enable after pandemia checkbox second click', async () => {
    await page.routeTo('cittadino');
    await browser.sleep(500);

    const buttonUniversita = await element(by.css('.button-universita'));
    const buttonFarmacia = await element(by.css('.button-farmacia'));
    const buttonCane = await element(by.css('.button-cane'));
    const buttonUfficio = await element(by.css('.button-ufficio'));
    const buttonBar = await element(by.css('.button-bar'));

    buttonUniversita.isEnabled().then((enabled) => {
      expect(enabled).toBe(true);
    });

    buttonFarmacia.isEnabled().then((enabled) => {
      expect(enabled).toBe(false);
    });

    buttonCane.isEnabled().then((enabled) => {
      expect(enabled).toBe(true);
    });

    buttonUfficio.isEnabled().then((enabled) => {
      expect(enabled).toBe(true);
    });

    buttonBar.isEnabled().then((enabled) => {
      expect(enabled).toBe(true);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
