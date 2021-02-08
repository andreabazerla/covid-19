import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PfizerService {
  vaccino = new BehaviorSubject<boolean>(false);

  constructor() {}

  getVaccino(): boolean {
    return this.vaccino.getValue();
  }

  setVaccino(value: boolean): void {
    this.vaccino.next(value);
  }
}
