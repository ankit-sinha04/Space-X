import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SideNavComponent } from './side-nav/side-nav.component';
import { SpacedataService } from './spacedata.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideNavComponent,
    CardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [SpacedataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
