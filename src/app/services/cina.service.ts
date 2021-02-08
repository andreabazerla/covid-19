import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CinaService {
  pandemia = new BehaviorSubject<boolean>(false);

  constructor() {}

  getPandemia(): boolean {
    return this.pandemia.value;
  }

  updatePandemia(value: boolean): void {
    this.pandemia.next(value);
  }
}
