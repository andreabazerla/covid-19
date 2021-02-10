import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { State } from 'src/app/enums/state.enum';
import { Value } from 'src/app/enums/value.enum';
import { Zona } from 'src/app/enums/zona.enum';
import { Button } from 'src/app/models/inputs/button';
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
  zona: Select;
  mascherine: number;
  universita: Button;
  farmacia: Button;
  cane: Button;
  ufficio: Button;
  bar: Button;

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
    this.conteService.zona$.subscribe((res) => {
      this.zona = res;
      if (res.zona == Zona.GIALLA) {
        this.zonaFormControl.setValue(Zona.GIALLA);
      } else if (res.zona == Zona.ARANCIONE) {
        this.zonaFormControl.setValue(Zona.ARANCIONE);
      } else if (res.zona == Zona.ROSSA) {
        this.zonaFormControl.setValue(Zona.ROSSA);
      }
    });

    this.cittadinoService.mascherine$.subscribe(
      (res) => (this.mascherine = res)
    );

    this.cittadinoService.universita$.subscribe((res) => {
      this.universita = res;
      if (res.state == State.ENABLE) {
        this.outPLace.controls['universita'].enable();
      } else if (res.state == State.DISABLE) {
        this.outPLace.controls['universita'].disable();
      }
    });

    this.cittadinoService.farmacia$.subscribe((res) => {
      this.farmacia = res;
      if (res.state == State.ENABLE) {
        this.outPLace.controls['farmacia'].enable();
      } else if (res.state == State.DISABLE) {
        this.outPLace.controls['farmacia'].disable();
      }
    });

    this.cittadinoService.cane$.subscribe((res) => {
      this.cane = res;
      if (res.state == State.ENABLE) {
        this.outPLace.controls['cane'].enable();
      } else if (res.state == State.DISABLE) {
        this.outPLace.controls['cane'].disable();
      }
    });

    this.cittadinoService.ufficio$.subscribe((res) => {
      this.ufficio = res;
      if (res.state == State.ENABLE) {
        this.outPLace.controls['ufficio'].enable();
      } else if (res.state == State.DISABLE) {
        this.outPLace.controls['ufficio'].disable();
      }
    });

    this.cittadinoService.bar$.subscribe((res) => {
      this.bar = res;
      if (res.state == State.ENABLE) {
        this.outPLace.controls['bar'].enable();
      } else if (res.state == State.DISABLE) {
        this.outPLace.controls['bar'].disable();
      }
    });

    this.mascherine = this.cittadinoService.mascherine;

    // let zona = this.conteService.zona;
    // this.zonaFormControl.setValue(zona.zona);
    // if (this.pandemia.value == Value.TRUE) {
    //   if (this.vaccino.value == Value.TRUE) {
    //     this.outPLace.controls['farmacia'].disable();
    //   } else {
    //     this.outPLace.controls['universita'].disable();
    //     if (zona.zona == Zona.ARANCIONE) {
    //       this.outPLace.controls['bar'].disable();
    //     } else if (zona.zona == Zona.ROSSA) {
    //       this.outPLace.controls['bar'].disable();
    //       this.outPLace.controls['ufficio'].disable();
    //     }
    //     if (this.mascherine <= 0) {
    //       this.outPLace.controls['cane'].disable();
    //       this.outPLace.controls['bar'].disable();
    //       this.outPLace.controls['ufficio'].disable();
    //     }
    //   }
    // } else {
    //   this.outPLace.controls['farmacia'].disable();
    // }

    if (this.pandemia.value == Value.TRUE) {
      if (this.vaccino.value == Value.FALSE) {
        if (this.mascherine <= 0) {
          this.outPLace.controls['cane'].disable();
          this.outPLace.controls['bar'].disable();
          this.outPLace.controls['ufficio'].disable();
        }
      }
    }

    this.zonaFormControl.disable();
  }

  goOut(destinazione?: string): void {
    if (this.pandemia.value == Value.TRUE) {
      if (this.vaccino.value == Value.FALSE) {
        return this.withMask(destinazione);
      } else {
        return this.withoutMask(destinazione);
      }
    } else {
      return this.withoutMask(destinazione);
    }
  }

  withMask(destinazione?: string) {
    this.useMask();
    this.loggerService.addLog(destinazione + ' con la mascherina');
  }

  withoutMask(destinazione?: string) {
    this.loggerService.addLog(destinazione + ' senza la mascherina');
  }

  useMask() {
    let mascherine = this.cittadinoService.mascherine;

    if (mascherine > 0) {
      mascherine -= 1;
      this.cittadinoService.mascherine = mascherine;
      if (mascherine === 0) {
        if (
          this.pandemia.value == Value.TRUE &&
          this.vaccino.value == Value.FALSE
        ) {
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

    if (
      this.pandemia.value == Value.TRUE &&
      this.vaccino.value == Value.FALSE
    ) {
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
    this.goOut('vado in università a studiare');
  }

  goFarmacia(): void {
    this.goOut('vado in farmacia a comprarne di nuove');
    this.buyMask();
  }

  goCane() {
    this.goOut('porto fuori il cane');
  }

  goBar() {
    this.goOut('vado al bar per fare colazione');
  }

  goUfficio() {
    this.goOut('vado in ufficio a lavorare');
  }
}
