import {
  async,
  ComponentFixture,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { LoggerService } from '../../../app/services/logger/logger.service';
import { Value } from '../../../app/enums/value.enum';

import { CinaComponent } from './cina.component';
import { Log } from 'src/app/models/log/log';
import { PfizerService } from 'src/app/services/pfizer/pfizer.service';
import { State } from 'src/app/enums/state.enum';
import { BehaviorSubject } from 'rxjs';
import { Checkbox } from 'src/app/models/inputs/checkbox';
import { Select } from 'src/app/models/inputs/select';
import { Zona } from 'src/app/enums/zona.enum';
import { ConteService } from 'src/app/services/conte/conte.service';
import { Button } from 'src/app/models/inputs/button';
import { CittadinoService } from 'src/app/services/cittadino/cittadino.service';

describe('CinaComponent', () => {
  let component: CinaComponent;
  let componentFixture: ComponentFixture<CinaComponent>;

  let _vaccino: BehaviorSubject<Checkbox>;

  let _zona: BehaviorSubject<Select>;

  let _mascherine: BehaviorSubject<number>;
  let _universita: BehaviorSubject<Button>;
  let _farmacia: BehaviorSubject<Button>;

  let pfizerServiceStub: Partial<PfizerService>;
  pfizerServiceStub = {
    get vaccino(): Checkbox {
      return _vaccino.getValue();
    },
    set vaccino(value: Checkbox) {
      _vaccino.next(value);
    },
  };

  let conteServiceStub: Partial<ConteService>;
  conteServiceStub = {
    get zona(): Select {
      return _zona.getValue();
    },
    set zona(value: Select) {
      _zona.next(value);
    },
  };

  let cittadinoServiceStub: Partial<CittadinoService>;
  cittadinoServiceStub = {
    get mascherine(): number {
      return _mascherine.getValue();
    },
    set mascherine(value: number) {
      _mascherine.next(value);
    },
    get universita(): Button {
      return _universita.getValue();
    },
    set universita(value: Button) {
      _universita.next(value);
    },
    get farmacia(): Button {
      return _farmacia.getValue();
    },
    set farmacia(value: Button) {
      _farmacia.next(value);
    }
  };

  let logs: Log[] = [];

  let loggerServiceStub: Partial<LoggerService>;
  loggerServiceStub = {
    addLog(log: string): void {
      logs.push(new Log(0, '', ''));
    },
    clearLogs(): void {},
    getDateTime(): string {
      return null;
    },
  };

  const title: string = 'Cina';
  const labelPandemia: string = 'Pandemia';

  let formControlPandemia: FormControl = new FormControl();
  let checkboxPandemia: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [CinaComponent],
      providers: [
        { provide: LoggerService, useValue: loggerServiceStub },
        { provide: PfizerService, useValue: pfizerServiceStub },
        { provide: ConteService, useValue: conteServiceStub },
        { provide: CittadinoService, useValue: cittadinoServiceStub },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    componentFixture = TestBed.createComponent(CinaComponent);
    component = componentFixture.componentInstance;

    _vaccino = new BehaviorSubject<Checkbox>(
      new Checkbox(State.DISABLE, Value.FALSE)
      );

    _zona = new BehaviorSubject<Select>(new Select(State.DISABLE, Zona.BIANCA));

    _mascherine = new BehaviorSubject<number>(0);
    _universita = new BehaviorSubject<Button>(new Button(State.ENABLE));
    _farmacia = new BehaviorSubject<Button>(new Button(State.DISABLE));

    logs = [];

    checkboxPandemia = componentFixture.debugElement.query(
      By.css('.checkboxPandemia')
    ).nativeElement;
    formControlPandemia = componentFixture.componentInstance.pandemia;

    component.ngOnInit();
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Cina'`, () => {
    expect(component.title).toEqual(title);
  });

  it(`should have as pandemia label text 'Pandemia'`, () => {
    expect(component.labelPandemia).toEqual(labelPandemia);
  });

  it('initial pandemia checkbox state to be enable', () => {
    expect(component.pandemia.disabled).toBeFalsy();
  });

  it('initial pandemia checkbox Value to be Value.FALSE', () => {
    expect(component.pandemia.value).toBe(Value.FALSE);
  });

  it('should pandemia checkbox value to be false', () => {
    expect(checkboxPandemia.checked).toBeFalsy();
  });

  it('should pandemia checkbox Value to be Value.TRUE after checked from initial state', () => {
    checkboxPandemia.click();

    componentFixture.detectChanges();

    expect(formControlPandemia).toBeTruthy();
  });

  it('should pandemia checkbox Value to be Value.TRUE after checked', () => {
    checkboxPandemia.click();
    componentFixture.detectChanges();
    expect(formControlPandemia.value).toBe(true);
  });

  it('should pandemia checkbox Value to be Value.FALSE after checked two times', () => {
    checkboxPandemia.click();
    componentFixture.detectChanges();
    expect(formControlPandemia.value).toBe(true);

    checkboxPandemia.click();
    componentFixture.detectChanges();
    expect(formControlPandemia.value).toBe(false);
  });

  it('should logs length incremented after pandemia checkbox checked', () => {
    length = logs.length;

    checkboxPandemia.click();
    componentFixture.detectChanges();

    expect(logs.length).toBe(length + 1);
  });

  it(
    'should vaccino State and Value be ENABLE and FALSE respectively after pandemia checkbox checked',
    waitForAsync(() => {
      checkboxPandemia.click();
      componentFixture.detectChanges();

      _vaccino.subscribe({
        next: (res: Checkbox) => {
          expect(res.state).toBe(State.ENABLE);
          expect(res.value).toBe(Value.FALSE);
        },
      });
    })
  );

  it(
    'should zona State and Zona be ENABLE and GIALLA respectively after pandemia checkbox checked',
    waitForAsync(() => {
      checkboxPandemia.click();
      componentFixture.detectChanges();

      _zona.subscribe({
        next: (res: Select) => {
          expect(res.state).toBe(State.ENABLE);
          expect(res.zona).toBe(Zona.GIALLA);
        },
      });
    })
  );

  it(
    'should università State be DISABLE after pandemia checkbox checked',
    waitForAsync(() => {
      checkboxPandemia.click();
      componentFixture.detectChanges();

      _universita.subscribe({
        next: (res: Button) => {
          expect(res.state).toBe(State.DISABLE);
        },
      });
    })
  );

  it(
    'should farmacia State be ENABLE after pandemia checkbox checked',
    waitForAsync(() => {
      checkboxPandemia.click();
      componentFixture.detectChanges();

      _farmacia.subscribe({
        next: (res: Button) => {
          expect(res.state).toBe(State.ENABLE);
        },
      });
    })
  );
});
