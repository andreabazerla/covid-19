import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CinaService } from 'src/app/services/cina.service';
import { CittadinoService } from 'src/app/services/cittadino.service';
import { ConteService } from 'src/app/services/conte.service';
import { PfizerService } from 'src/app/services/pfizer.service';

@Component({
  selector: 'app-cittadino',
  templateUrl: './cittadino.component.html',
  styleUrls: ['./cittadino.component.scss'],
})
export class CittadinoComponent implements OnInit {
  pandemia: boolean;
  vaccino: boolean;
  mascherine: number;

  zona: FormControl = new FormControl();

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
    private pfizerService: PfizerService
  ) {}

  ngOnInit(): void {
    this.cinaService.pandemia$.subscribe((res) => (this.pandemia = res));
    this.pfizerService.vaccino.subscribe((res) => (this.vaccino = res));
    this.cittadinoService.mascherine.subscribe(
      (res) => (this.mascherine = res)
    );

    this.mascherine = this.cittadinoService.getMascherine();

    if (this.pandemia) {
      if (this.vaccino) {
        this.zona.setValue('');
        this.outPLace.controls['farmacia'].disable();
      } else {
        this.outPLace.controls['universita'].disable();
        let zona = this.conteService.getZona();
        if (zona === '') {
          this.zona.setValue('gialla');
        } else {
          this.zona.setValue(zona);
        }
        if (this.zona.value === 'gialla') {
          if (!this.mascherine) {
            this.outPLace.controls['cane'].disable();
            this.outPLace.controls['bar'].disable();
            this.outPLace.controls['ufficio'].disable();
          }
        }
      }
    } else {
      this.zona.setValue('');
      if (this.vaccino) {
        this.outPLace.controls['farmacia'].disable();
      }
    }
    this.zona.disable();

    if (this.zona.value === 'arancione') {
      this.outPLace.controls['bar'].disable();
    } else if (this.zona.value === 'rossa') {
      this.outPLace.controls['bar'].disable();
      this.outPLace.controls['ufficio'].disable();
    }
  }

  goOut(): void {
    if (this.pandemia) {
      if (!this.vaccino) {
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
    let mascherine = this.cittadinoService.getMascherine();

    if (mascherine > 0) {
      mascherine -= 1;
      this.cittadinoService.mascherine.next(mascherine);
      if (mascherine === 0) {
        if (this.pandemia && !this.vaccino) {
          this.outPLace.controls['cane'].disable();
          this.outPLace.controls['bar'].disable();
          this.outPLace.controls['ufficio'].disable();
        }
      }
    }
  }

  buyMask() {
    let mascherine = this.cittadinoService.getMascherine();
    mascherine += 10;
    this.cittadinoService.mascherine.next(mascherine);
    if (this.pandemia && !this.vaccino) {
      this.outPLace.controls['cane'].enable();
      if (this.zona.value === 'gialla') {
        this.outPLace.controls['bar'].enable();
        this.outPLace.controls['ufficio'].enable();
      } else if (this.zona.value === 'arancione') {
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
