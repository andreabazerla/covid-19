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
  logs: Log[] = [];

  constructor(private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.getLogs();
  }

  clearLogs(): void {
    // this.loggerService.getLogs().subscribe((res: any) => {
    //   res.forEach((log) => {
    //     this.loggerService.deleteLog(log.id).subscribe();
    //   });
    //   // this.logs = [];
    // });
    this.loggerService.clearLogs().subscribe();
  }

  getLogs(): void {
    this.loggerService.getLogs().subscribe((res: any) => (this.logs = res));
  }
}
