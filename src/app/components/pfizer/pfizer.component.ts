import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State } from '../../../app/enums/state.enum';
import { Value } from '../../../app/enums/value.enum';
import { Zona } from '../../../app/enums/zona.enum';
import { CinaService } from '../../../app/services/cina/cina.service';
import { CittadinoService } from '../../../app/services/cittadino/cittadino.service';
import { ConteService } from '../../../app/services/conte/conte.service';
import { LoggerService } from '../../../app/services/logger/logger.service';
import { PfizerService } from '../../../app/services/pfizer/pfizer.service';

@Component({
  selector: 'app-pfizer',
  templateUrl: './pfizer.component.html',
  styleUrls: ['./pfizer.component.scss'],
})
export class PfizerComponent implements OnInit {
  title = 'Pfizer';
  labelVaccino = 'Vaccino';
  vaccino: FormControl = new FormControl();
  @Output() eventEmitter = new EventEmitter<number>();

  constructor(
    private cinaService: CinaService,
    private pfizerService: PfizerService,
    private conteService: ConteService,
    private cittadinoService: CittadinoService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.vaccino.setValue(this.pfizerService.vaccino.value);
    if (this.pfizerService.vaccino.state == State.DISABLE) {
      this.vaccino.disable();
    } else {
      this.vaccino.enable();
    }
  }

  setVaccino(value: number) {
    if (value == Value.TRUE) {
      this.pfizerService.vaccino.value = value;
      this.pfizerService.vaccino.state = State.DISABLE;
      this.vaccino.setValue(value);
      this.eventEmitter.emit(value);
      this.loggerService.addLog(`Pfizer: vaccino = ${value ? 'true' : 'false'}`);
      this.vaccino.disable();

      this.conteService.zona.zona = Zona.BIANCA;
      this.conteService.zona.state = State.DISABLE;

      this.cittadinoService.universita.state = State.ENABLE;
      this.cittadinoService.farmacia.state = State.DISABLE;
      this.cittadinoService.cane.state = State.ENABLE;
      this.cittadinoService.ufficio.state = State.ENABLE;
      this.cittadinoService.bar.state = State.ENABLE;
    }
  }
}
