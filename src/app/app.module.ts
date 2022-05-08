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
import {faArrowDown, faArrowRight, faArrowRotateRight, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {AlgorithmComponent} from './algorithm/algorithm.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {ReorderTestComponent} from './layouts/reorder-test/reorder-test.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
    IntroductionComponent,
    SingleChoiceTestComponent,
    AlgorithmComponent,
    ReorderTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowRotateRight)
    library.addIcons(faArrowRight)
    library.addIcons(faArrowDown)
    library.addIcons(faArrowUp)
  }
}
