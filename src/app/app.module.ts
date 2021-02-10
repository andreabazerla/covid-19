// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CinaComponent } from './components/cina/cina.component';
import { HttpClientModule } from '@angular/common/http';
import { PfizerComponent } from './components/pfizer/pfizer.component';
import { ConteComponent } from './components/conte/conte.component';
import { CittadinoComponent } from './components/cittadino/cittadino.component';
import { LoggerComponent } from './components/logger/logger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CinaComponent,
    PfizerComponent,
    ConteComponent,
    CittadinoComponent,
    LoggerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
