import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SpaceComponentComponent } from './Modules/space-component/space-component.component';
import { HomeComponentComponent } from './Modules/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
