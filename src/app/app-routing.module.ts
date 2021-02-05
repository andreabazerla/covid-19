import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { CinaComponent } from './components/cina/cina.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
