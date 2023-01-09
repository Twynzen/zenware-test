import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './modules/shared/navbar/navbar.module';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './modules/pages/employees/employees.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HttpClientModule,

  ],
  providers: [CommonModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
