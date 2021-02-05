import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CinaService } from './services/cina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Covid-19';
  pandemia: boolean;

  constructor(private cinaService: CinaService) {}

  ngOnInit(): void {
    this.cinaService.pandemia$.subscribe((res) => (this.pandemia = res))
  }
}
