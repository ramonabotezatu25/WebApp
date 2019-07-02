import { DestinationService } from './destinations/destination.service';
import { DestinationComponent } from './destinations/destination.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    DestinationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  //in this array we need to register all our dependecies. we register our services as providers;
  providers: [DestinationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
