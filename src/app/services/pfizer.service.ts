import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PfizerService {
  vaccino = new BehaviorSubject<boolean>(false);

  constructor() {}

  getVaccino(): boolean {
    return this.vaccino.value;
  }

  updateVaccino(value: boolean): void {
    this.vaccino.next(value);
  }
}
