import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConteService {
  zona = new BehaviorSubject<string>('');

  constructor() {}

  getZona(): string {
    return this.zona.value;
  }

  updateZona(value: string): void {
    return this.zona.next(value);
  }
}
