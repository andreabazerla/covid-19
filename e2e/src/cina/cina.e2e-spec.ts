import { by, element } from 'protractor';
import { CinaPage } from './cina.po';

describe('Cina', () => {
  let page: CinaPage;

  beforeEach(() => {
    page = new CinaPage();
  });

  it('should display cina title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Cina');
  });

  it('should pandemia checkbox to be enable and false', async () => {
    await page.navigateTo();
    const checkboxPandemia = await element(by.css('input'));
    expect(checkboxPandemia.isEnabled()).toBeTruthy();
    expect(checkboxPandemia.isSelected()).toBeTruthy();
  });

  // it('should vaccino checkbox to be enable when pandemia checkbox is checked', async () => {
  //   await page.navigateTo();
  //   await element(by.css('input')).click();
  //   browser.pause();
  //   await page.navigateTo();
  //   expect(element(by.className('.checkboxVaccino')).isEnabled()).toBeTruthy();
  // });

});
