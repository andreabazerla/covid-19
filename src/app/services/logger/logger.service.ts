import { Injectable } from '@angular/core';
import { Log } from '../../models/log/log';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logs: Log[] = [];

  constructor() {}

  addLog(log: string): void {
    this.logs.push(new Log(this.logs.length, this.getDateTime(), log));
  }

  clearLogs(): void {
    this.logs = [];
  }

  getDateTime(): string {
    return new Date().toLocaleString();
  }
}
