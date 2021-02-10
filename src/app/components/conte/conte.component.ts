import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { State } from '../../../app/enums/state.enum';
import { Zona } from '../../../app/enums/zona.enum';
import { CittadinoService } from '../../../app/services/cittadino/cittadino.service';
import { ConteService } from '../../../app/services/conte/conte.service';
import { LoggerService } from '../../../app/services/logger/logger.service';

@Component({
  selector: 'app-conte',
  templateUrl: './conte.component.html',
  styleUrls: ['./conte.component.scss'],
})
export class ConteComponent implements OnInit {
  zona: FormControl = new FormControl();

  constructor(
    private conteService: ConteService,
    private cittadinoService: CittadinoService,
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

    if (value == Zona.ARANCIONE) {
      this.cittadinoService.bar.state = State.DISABLE;
      this.cittadinoService.ufficio.state = State.ENABLE;
    } else if (value == Zona.ROSSA) {
      this.cittadinoService.bar.state = State.DISABLE;
      this.cittadinoService.ufficio.state = State.DISABLE;
    } else if (value == Zona.GIALLA) {
      this.cittadinoService.bar.state = State.ENABLE;
      this.cittadinoService.ufficio.state = State.ENABLE;
    }
  }
}
