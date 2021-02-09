import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State } from 'src/app/enums/state.enum';
import { Value } from 'src/app/enums/value.enum';
import { Zona } from 'src/app/enums/zona.enum';
import { Checkbox } from 'src/app/models/inputs/checkbox';
import { ConteService } from 'src/app/services/conte/conte.service';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { PfizerService } from 'src/app/services/pfizer/pfizer.service';

@Component({
  selector: 'app-pfizer',
  templateUrl: './pfizer.component.html',
  styleUrls: ['./pfizer.component.scss'],
})
export class PfizerComponent implements OnInit {
  vaccino: FormControl = new FormControl();
  @Output() eventEmitter = new EventEmitter<number>();

  constructor(
    private pfizerService: PfizerService,
    private conteService: ConteService,
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
    }
  }
}
