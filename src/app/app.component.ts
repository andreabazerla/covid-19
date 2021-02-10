import { Component, OnInit } from '@angular/core';
import { Checkbox } from './models/inputs/checkbox';

// Services
import { CinaService } from './services/cina/cina.service';
import { PfizerService } from './services/pfizer/pfizer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Covid-19';
  menu: string = 'Menu';
  menuLogin: string = 'Login';
  menuLogger: string = 'Logger';
  labelPandemia: string = 'Pandemia';
  labelVaccino: string = 'Vaccino';
  pandemia: Checkbox;
  vaccino: Checkbox;

  constructor(
    private cinaService: CinaService,
    private pfizerService: PfizerService
  ) {}

  ngOnInit(): void {
    this.cinaService.pandemia$.subscribe((res) => (this.pandemia = res));
    this.pfizerService.vaccino$.subscribe((res) => (this.vaccino = res));
  }
}
