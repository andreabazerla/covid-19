import { browser, logging } from 'protractor';
import { CinaPage } from './cina.po';
import { PfizerPage } from './pfizer.po';

describe('workspace-project App', () => {
  let pageCina: CinaPage;
  // let pagePfizer: PfizerPage;
  // let cinaServiceStub: Partial<CinaService>;
  // let cinaService: CinaService;

  // providers: [ { provide: CinaService, useValue: cinaServiceStub } ],

  beforeEach(() => {
    // browser.waitForAngularEnabled(false);

    pageCina = new CinaPage();
    // pagePfizer = new PfizerPage();

    // cinaService = TestBed.inject(CinaService);

    // cinaServiceStub = {
    //   pandemia: new Checkbox(State.ENABLE, Value.FALSE)
    // };
  });

  it('should have title', () => {
    // pageCina.navigateToCina();
    expect<any>(pageCina.getTitle()).toEqual('Cina');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });

  // it('check vaccino checkbox', () => {
  //   pageCina.navigateToCina().then(() => {
  //     pageCina.setCheckboxPandemia();
  //   });

  //   pageCina.navigateToPfizer().then(() => {
  //     expect(pagePfizer.getCheckboxVaccino()).toBeTruthy();
  //   });
  // });
});
