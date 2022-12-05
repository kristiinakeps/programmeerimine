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
import {faArrowDown, faArrowLeft, faArrowRight, faArrowRotateRight, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {AlgorithmComponent} from './algorithm/algorithm.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {ReorderTestComponent} from './layouts/reorder-test/reorder-test.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { VariablesComponent } from './variables/variables.component';
import { CategorizeTestComponent } from './layouts/categorize-test/categorize-test.component';
import { FillBlankDropdownTestComponent } from './layouts/fill-blank-dropdown-test/fill-blank-dropdown-test.component';
import { ExerciseHintsComponent } from './layouts/exercise-hints/exercise-hints.component';
import { MultichoiceTestComponent } from './layouts/multichoice-test/multichoice-test.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConditionsComponent } from './conditions/conditions.component';
import { LoopsComponent } from './loops/loops.component';
import { RadiochoiceTestComponent } from './layouts/radiochoice-test/radiochoice-test.component';
import { FunctionsComponent } from './functions/functions.component';
import { FilesComponent } from './files/files.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    HomeComponent,
    IntroductionComponent,
    SingleChoiceTestComponent,
    AlgorithmComponent,
    ReorderTestComponent,
    VariablesComponent,
    CategorizeTestComponent,
    FillBlankDropdownTestComponent,
    ExerciseHintsComponent,
    MultichoiceTestComponent,
    ConditionsComponent,
    LoopsComponent,
    RadiochoiceTestComponent,
    FunctionsComponent,
    FilesComponent,
    ErrorHandlingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
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
    library.addIcons(faArrowLeft)
  }
}
