import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CinaComponent } from './components/cina/cina.component';
import { PfizerComponent } from './components/pfizer/pfizer.component';
import { ConteComponent } from './components/conte/conte.component';
import { CittadinoComponent } from './components/cittadino/cittadino.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
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
        path: 'cittadino',
        component: CittadinoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
