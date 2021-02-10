import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  menuCina: string = 'Cina';
  menuPfizer: string = 'Pfizer';
  menuConte: string = 'Conte';
  menuCittadino: string = 'Cittadino';

  constructor() { }

  ngOnInit(): void {
  }

}
