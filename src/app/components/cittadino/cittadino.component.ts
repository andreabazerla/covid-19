import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Value } from 'src/app/enums/value.enum';
import { Zona } from 'src/app/enums/zona.enum';
import { Checkbox } from 'src/app/models/inputs/checkbox';
import { Select } from 'src/app/models/inputs/select';
import { CinaService } from 'src/app/services/cina/cina.service';
import { CittadinoService } from 'src/app/services/cittadino/cittadino.service';
import { ConteService } from 'src/app/services/conte/conte.service';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { PfizerService } from 'src/app/services/pfizer/pfizer.service';

@Component({
  selector: 'app-cittadino',
  templateUrl: './cittadino.component.html',
  styleUrls: ['./cittadino.component.scss'],
})
export class CittadinoComponent implements OnInit {
  pandemia: Checkbox;
  vaccino: Checkbox;
  mascherine: number;
  zona: Select;

  zonaFormControl: FormControl = new FormControl();

  outPLace = new FormGroup({
    universita: new FormControl(),
    farmacia: new FormControl(),
    cane: new FormControl(),
    ufficio: new FormControl(),
    bar: new FormControl(),
  });

  constructor(
    private conteService: ConteService,
    private cittadinoService: CittadinoService,
    private cinaService: CinaService,
    private pfizerService: PfizerService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.cinaService.pandemia$.subscribe((res) => (this.pandemia = res));
    this.pfizerService.vaccino$.subscribe((res) => (this.vaccino = res));
    this.cittadinoService.mascherine$.subscribe(
      (res) => (this.mascherine = res)
    );
    this.conteService.zona$.subscribe((res) => (this.zona = res))

    this.mascherine = this.cittadinoService.mascherine

    let zona = this.conteService.zona;
    this.zonaFormControl.setValue(zona.zona);
    if (this.pandemia.value == Value.TRUE) {
      if (this.vaccino.value == Value.TRUE) {
        this.outPLace.controls['farmacia'].disable();
      } else {
        this.outPLace.controls['universita'].disable();
        if (zona.zona == Zona.ARANCIONE) {
          this.outPLace.controls['bar'].disable();
        } else if (zona.zona == Zona.ROSSA) {
          this.outPLace.controls['bar'].disable();
          this.outPLace.controls['ufficio'].disable();
        }
        if (this.mascherine <= 0) {
          this.outPLace.controls['cane'].disable();
          this.outPLace.controls['bar'].disable();
          this.outPLace.controls['ufficio'].disable();
        }
      }
    } else {
      this.outPLace.controls['farmacia'].disable();
    }

    this.zonaFormControl.disable();
  }

  goOut(): void {
    if (this.pandemia.value == Value.TRUE) {
      if (this.vaccino.value == Value.FALSE) {
        return this.withMask();
      } else {
        return this.withoutMask();
      }
    } else {
      return this.withoutMask();
    }
  }

  withMask() {
    this.useMask();
  }

  withoutMask() {}

  useMask() {
    let mascherine = this.cittadinoService.mascherine;

    if (mascherine > 0) {
      mascherine -= 1;
      this.cittadinoService.mascherine = mascherine;
      if (mascherine === 0) {
        if (this.pandemia.value == Value.TRUE && this.vaccino.value == Value.FALSE) {
          this.outPLace.controls['cane'].disable();
          this.outPLace.controls['bar'].disable();
          this.outPLace.controls['ufficio'].disable();
        }
      }
    }
  }

  buyMask() {
    let mascherine = this.cittadinoService.mascherine;
    mascherine += 10;
    this.cittadinoService.mascherine = mascherine;
    if (this.pandemia.value == Value.TRUE && this.vaccino.value == Value.FALSE) {
      this.outPLace.controls['cane'].enable();
      if (this.zonaFormControl.value === 'gialla') {
        this.outPLace.controls['bar'].enable();
        this.outPLace.controls['ufficio'].enable();
      } else if (this.zonaFormControl.value === 'arancione') {
        this.outPLace.controls['ufficio'].enable();
      }
    }
  }

  goUniversita(): void {
    this.goOut();
  }

  goFarmacia(): void {
    this.goOut();
    this.buyMask();
  }

  goCane() {
    this.goOut();
  }

  goBar() {
    this.goOut();
  }

  goUfficio() {
    this.goOut();
  }
}
