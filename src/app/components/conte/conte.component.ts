import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CinaService } from 'src/app/services/cina/cina.service';
import { ConteService } from 'src/app/services/conte/conte.service';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { PfizerService } from 'src/app/services/pfizer/pfizer.service';

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
    if (!this.cinaService.pandemia) {
      this.zona.disable();
      this.zona.setValue('');
    } else {
      if (this.pfizerService.vaccino) {
        this.zona.disable();
        this.zona.setValue('');
      } else {
        let zona = this.conteService.zona;
        if (zona === '') {
          this.zona.setValue('gialla');
        } else {
          this.zona.setValue(zona);
        }
      }
    }
  }

  setZona(value: string) {
    this.conteService.zona = value;
    this.zona.setValue(value);
    this.loggerService.addLog(`Conte: zona = ${value}`);
  }
}
