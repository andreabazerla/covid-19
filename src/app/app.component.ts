import { Component, OnInit } from '@angular/core';

// Services
import { CinaService } from './services/cina.service';
import { PfizerService } from './services/pfizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Covid-19';
  pandemia: boolean;
  vaccino: boolean;

  constructor(
    private cinaService: CinaService,
    private pfizerService: PfizerService
  ) {}

  ngOnInit(): void {
    this.cinaService.pandemia$.subscribe((res) => (this.pandemia = res));
    this.pfizerService.vaccino.subscribe((res) => (this.vaccino = res));
  }
}
