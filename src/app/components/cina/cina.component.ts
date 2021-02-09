import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CinaService } from 'src/app/services/cina/cina.service';
import { LoggerService } from 'src/app/services/logger/logger.service';

@Component({
  selector: 'app-cina',
  templateUrl: './cina.component.html',
  styleUrls: ['./cina.component.scss'],
})
export class CinaComponent implements OnInit {
  pandemia: FormControl = new FormControl();
  @Output() eventEmitter = new EventEmitter<boolean>();

  constructor(
    private cinaService: CinaService,
    private loggerService: LoggerService,
  ) {}

  ngOnInit(): void {
    this.pandemia.setValue(this.cinaService.pandemia);
  }

  setPandemia(value: boolean) {
    this.cinaService.pandemia = value;
    this.pandemia.setValue(value);
    this.eventEmitter.emit(value);
    this.loggerService.addLog(`Cina: pandemia = ${value}`);
  }
}
