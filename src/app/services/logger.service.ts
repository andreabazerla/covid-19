import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private API: string = '/api/';
  private loggerUrl: string = this.API + 'logger';

  constructor(private httpClient: HttpClient) {}

  getLogs() {
    return this.httpClient.get<Log>(this.loggerUrl);
  }

  log(log: string): Observable<any> {
    return this.getLogs().pipe(
      mergeMap((res: any) => {
        let newId = res.length + 1;
        let logJson = new Log(newId, this.getDateTime(), log);
        return this.httpClient.post(this.loggerUrl, logJson);
      })
    );
  }

  clearLogs(): Observable<any> {
    return this.getLogs().pipe(
      mergeMap((res: any) => {
        let ids = Array.from(Array(res.length).keys()).map(String)
        return this.httpClient.delete(this.loggerUrl + '/' + ids);
      })
    );
  }

  deleteLog(idLog: string): Observable<any> {
    return this.httpClient.delete(this.loggerUrl + '/' + idLog);
  }

  getDateTime(): string {
    return new Date().toLocaleString();
  }
}
