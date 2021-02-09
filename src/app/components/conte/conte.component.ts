import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State } from 'src/app/enums/state.enum';
import { Value } from 'src/app/enums/value.enum';
import { Zona } from 'src/app/enums/zona.enum';
import { ConteService } from 'src/app/services/conte/conte.service';
import { LoggerService } from 'src/app/services/logger/logger.service';

@Component({
  selector: 'app-conte',
  templateUrl: './conte.component.html',
  styleUrls: ['./conte.component.scss'],
})
export class ConteComponent implements OnInit {
  zona: FormControl = new FormControl();

  constructor(
    private conteService: ConteService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    this.zona.setValue(this.conteService.zona.zona);
    if (this.conteService.zona.state == State.DISABLE) {
      this.zona.disable();
    }
  }

  setZona(value: string) {
    let valueEnum;
    if (value == Zona.BIANCA) {
      valueEnum = Zona.BIANCA
    } else if (value == Zona.GIALLA) {
      valueEnum = Zona.GIALLA
    } else if (value == Zona.ARANCIONE) {
      valueEnum = Zona.ARANCIONE
    } else if (value == Zona.ROSSA) {
      valueEnum = Zona.ROSSA
    }
    this.conteService.zona.zona = valueEnum;
    this.zona.setValue(value);
    this.loggerService.addLog(`Conte: zona = ${value}`);
  }
}
