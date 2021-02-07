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
import { LoggerComponent } from './components/logger/logger.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CinaComponent,
    PfizerComponent,
    ConteComponent,
    LoggerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
