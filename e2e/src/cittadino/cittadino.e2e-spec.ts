import { browser, by, element, logging } from 'protractor';
import { CittadinoPage } from './cittadino.po';

describe('Cittadino', () => {
  let page: CittadinoPage;

  beforeEach(() => {
    page = new CittadinoPage();
  });

  it('should display cittadino title', async () => {
    await browser.sleep(250);
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Cittadino');
  });

  it('should zona select to be disable and empty', async () => {
    const selectZona = await element(by.css('select'));
    expect(selectZona.isEnabled()).toBeFalsy();
    expect(selectZona.getText()).toBe('');
  });

  it('should mascherine text to be zero', async () => {
    const mascherine = await element(by.css('.mascherine'));
    expect(mascherine.getText()).toBe('0');
  });

  it('should universita button to be enable', async () => {
    const buttonUniversita = await element(by.css('.button-universita'));
    expect(buttonUniversita.isEnabled()).toBeTruthy();
  });

  it('should farmacia button to be disable', async () => {
    const buttonFarmacia = await element(by.css('.button-farmacia'));
    expect(buttonFarmacia.isEnabled()).toBeFalsy();
  });

  it('should cane button to be enable', async () => {
    const buttonCane = await element(by.css('.button-cane'));
    expect(buttonCane.isEnabled()).toBeTruthy();
  });

  it('should ufficio button to be enable', async () => {
    const buttonUfficio = await element(by.css('.button-ufficio'));
    expect(buttonUfficio.isEnabled()).toBeTruthy();
  });

  it('should bar button to be enable', async () => {
    const buttonBar = await element(by.css('.button-bar'));
    expect(buttonBar.isEnabled()).toBeTruthy();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

});
