import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomeComponent } from './layouts/home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
