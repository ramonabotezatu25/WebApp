
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { EmployeesComponent } from './employees/employees.component';
import { ManagersComponent } from './managers/managers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    EmployeesComponent,
    ManagersComponent,
    DashboardComponent,
    AddFormComponent,
    ManagerDetailsComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  //in this array we need to register all our dependecies. we register our services as providers;
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
