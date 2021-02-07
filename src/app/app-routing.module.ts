import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CinaComponent } from './components/cina/cina.component';
import { ConteComponent } from './components/conte/conte.component';
import { LoggerComponent } from './components/logger/logger.component';
import { LoginComponent } from './components/login/login.component';
import { PfizerComponent } from './components/pfizer/pfizer.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cina',
    component: CinaComponent,
  },
  {
    path: 'pfizer',
    component: PfizerComponent,
  },
  {
    path: 'conte',
    component: ConteComponent,
  },
  {
    path: 'logger',
    component: LoggerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
