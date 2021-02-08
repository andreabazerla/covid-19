import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CinaService } from 'src/app/services/cina.service';
import { ConteService } from 'src/app/services/conte.service';
import { LoggerService } from 'src/app/services/logger.service';
import { PfizerService } from 'src/app/services/pfizer.service';

@Component({
  selector: 'app-conte',
  templateUrl: './conte.component.html',
  styleUrls: ['./conte.component.scss'],
})
export class ConteComponent implements OnInit {
  zona: FormControl = new FormControl();

  constructor(
    private cinaService: CinaService,
    private pfizerService: PfizerService,
    private conteService: ConteService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    if (!this.cinaService.getPandemia()) {
      this.zona.disable();
      this.zona.setValue('');
    } else {
      if (this.pfizerService.getVaccino()) {
        this.zona.disable();
        this.zona.setValue('');
      } else {
        let zona = this.conteService.getZona();
        if (zona === '') {
          this.zona.setValue('gialla');
        } else {
          this.zona.setValue(zona);
        }
      }
    }
  }

  updateZona(value: string) {
    this.conteService.updateZona(value);
    this.zona.setValue(value);
    this.loggerService.addLog(`Conte: zona = ${value}`);
  }
}
