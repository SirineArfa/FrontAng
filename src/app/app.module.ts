import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { AppointementComponent } from './pages/appointement/appointement.component';
import { FaqComponent } from './pages/faq/faq.component';
import { Doctor1Component } from './pages/doctor1/doctor1.component';
import { Doctor2Component } from './pages/doctor2/doctor2.component';
import { Doctor3Component } from './pages/doctor3/doctor3.component';
import { Doctor4Component } from './pages/doctor4/doctor4.component';
import { Doctor5Component } from './pages/doctor5/doctor5.component';
import { Doctor6Component } from './pages/doctor6/doctor6.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    PaiementComponent,
    AppointementComponent,
    FaqComponent,
    Doctor1Component,
    Doctor2Component,
    Doctor3Component,
    Doctor4Component,
    Doctor5Component,
    Doctor6Component
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
