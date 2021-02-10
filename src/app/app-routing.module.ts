import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CinaComponent } from './components/cina/cina.component';
import { CittadinoComponent } from './components/cittadino/cittadino.component';
import { ConteComponent } from './components/conte/conte.component';
import { LoginComponent } from './components/login/login.component';
import { PfizerComponent } from './components/pfizer/pfizer.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: NavigationComponent,
    children: [
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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
