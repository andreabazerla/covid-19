import { PfizerPage } from './pfizer.po';

describe('Pfizer', () => {
  let page: PfizerPage;

  beforeEach(() => {
    page = new PfizerPage();
  });

  it('should display pfizer title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Pfizer');
  });

});
