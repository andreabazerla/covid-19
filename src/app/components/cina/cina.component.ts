import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State } from 'src/app/enums/state.enum';
import { Value } from 'src/app/enums/value.enum';
import { Zona } from 'src/app/enums/zona.enum';
import { CinaService } from 'src/app/services/cina/cina.service';
import { CittadinoService } from 'src/app/services/cittadino/cittadino.service';
import { ConteService } from 'src/app/services/conte/conte.service';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { PfizerService } from 'src/app/services/pfizer/pfizer.service';

@Component({
  selector: 'app-cina',
  templateUrl: './cina.component.html',
  styleUrls: ['./cina.component.scss'],
})
export class CinaComponent implements OnInit {
  pandemia: FormControl = new FormControl();
  @Output() eventEmitter = new EventEmitter<number>();

  constructor(
    private cinaService: CinaService,
    private pfizerService: PfizerService,
    private conteService: ConteService,
    private cittadinoService: CittadinoService,
    private loggerService: LoggerService,
  ) {}

  ngOnInit(): void {
    this.pandemia.setValue(this.cinaService.pandemia.value);
    if (this.cinaService.pandemia.state == State.DISABLE) {
      this.pandemia.disable();
    }
  }

  setPandemia(value: number) {
    this.cinaService.pandemia.value = value;
    this.pandemia.setValue(value);
    this.eventEmitter.emit(value);
    this.loggerService.addLog(`Cina: pandemia = ${value ? 'true' : 'false'}`);

    let vaccinoValue = this.pfizerService.vaccino.value;

    if (value == Value.TRUE) {
      this.pfizerService.vaccino.state = State.ENABLE;
      if (vaccinoValue == Value.FALSE) {
        this.conteService.zona.state = State.ENABLE;
        this.conteService.zona.zona = Zona.GIALLA;
      }
    } else {
      this.pfizerService.vaccino.state = State.DISABLE;
    }
  }
}
