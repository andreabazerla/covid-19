import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logs: Log[] = [];

  constructor() {}

  addLog(log: string) {
    this.logs.push(new Log(this.logs.length, this.getDateTime(), log));
  }

  clearLogs() {
    this.logs = [];
  }

  getDateTime(): string {
    return new Date().toLocaleString();
  }
}
