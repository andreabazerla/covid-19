import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { Checkbox } from '../../../app/models/inputs/checkbox';
import { CinaService } from '../../../app/services/cina/cina.service';
import { PfizerService } from '../../../app/services/pfizer/pfizer.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  title: string = 'Covid-19';
  menu: string = 'Menu';
  menuHome: string = 'Home';
  menuLogin: string = 'Login';
  labelPandemia: string = 'Pandemia';
  labelVaccino: string = 'Vaccino';
  pandemia: Checkbox;
  vaccino: Checkbox;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cinaService: CinaService,
    private pfizerService: PfizerService
  ) {}

  ngOnInit(): void {
    this.cinaService.pandemia$.subscribe((res) => (this.pandemia = res));
    this.pfizerService.vaccino$.subscribe((res) => (this.vaccino = res));
  }

  toggle(matSidenav: MatSidenav) {
    const isSmallScreen = this.breakpointObserver.isMatched(
      '(max-width: 599px)'
    );
    if (isSmallScreen) {
      matSidenav.toggle();
    }
  }
}
