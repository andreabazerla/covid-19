import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CittadinoService {
  mascherine = new BehaviorSubject<number>(0);

  constructor() {}

  getMascherine(): number {
    return this.mascherine.value;
  }

  updateMascherine(value: number): void {
    this.mascherine.next(value);
  }
}
