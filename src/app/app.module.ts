import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MainComponent} from './layouts/main/main.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {HomeComponent} from './layouts/home/home.component';
import {IntroductionComponent} from './introduction/introduction.component';
import {SingleChoiceTestComponent} from './layouts/single-choice-test/single-choice-test.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faArrowRight, faArrowRotateRight} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
    IntroductionComponent,
    SingleChoiceTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowRotateRight)
    library.addIcons(faArrowRight)
  }
}
