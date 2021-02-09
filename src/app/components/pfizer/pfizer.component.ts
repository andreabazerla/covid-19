import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CinaService } from 'src/app/services/cina/cina.service';
import { LoggerService } from 'src/app/services/logger/logger.service';
import { PfizerService } from 'src/app/services/pfizer/pfizer.service';

@Component({
  selector: 'app-pfizer',
  templateUrl: './pfizer.component.html',
  styleUrls: ['./pfizer.component.scss'],
})
export class PfizerComponent implements OnInit {
  vaccino: FormControl = new FormControl();
  @Output() eventEmitter = new EventEmitter<boolean>();

  constructor(
    private cinaService: CinaService,
    private pfizerService: PfizerService,
    private loggerService: LoggerService
  ) {}

  ngOnInit(): void {
    let pandemia = this.cinaService.pandemia;
    let vaccino = this.pfizerService.vaccino;

    this.vaccino.setValue(vaccino);

    if (pandemia) {
      if (vaccino) {
        this.vaccino.disable();
      }
    } else {
      this.vaccino.disable();
    }
  }

  setVaccino(value: boolean) {
    if (value) {
      this.pfizerService.vaccino = value;
      this.vaccino.setValue(value);
      this.eventEmitter.emit(value);
      this.loggerService.addLog(`Pfizer: vaccino = ${value}`);
      this.vaccino.disable();
    }
  }
}
