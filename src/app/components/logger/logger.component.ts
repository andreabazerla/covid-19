import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Log } from 'src/app/models/log';

import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent implements OnInit {
  constructor(public loggerService: LoggerService) {}

  ngOnInit(): void {}
}
