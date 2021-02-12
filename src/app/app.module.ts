// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { CinaComponent } from './components/cina/cina.component';
import { HttpClientModule } from '@angular/common/http';
import { PfizerComponent } from './components/pfizer/pfizer.component';
import { ConteComponent } from './components/conte/conte.component';
import { CittadinoComponent } from './components/cittadino/cittadino.component';
import { LoggerComponent } from './components/logger/logger.component';

// Angular Material module
import { AngularMaterialModule } from './modules/material/angular-material.module';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CinaComponent,
    PfizerComponent,
    ConteComponent,
    CittadinoComponent,
    LoggerComponent,
    NavigationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
