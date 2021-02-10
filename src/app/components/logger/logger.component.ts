import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../../../app/services/logger/logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent implements OnInit {
  constructor(public loggerService: LoggerService) {}

  ngOnInit(): void {}
}
