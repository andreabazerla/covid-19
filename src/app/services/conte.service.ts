import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConteService {
  zona = new BehaviorSubject<string>('');

  constructor() {}

  getZona(): string {
    return this.zona.getValue();
  }

  setZona(value: string): void {
    return this.zona.next(value);
  }
}
