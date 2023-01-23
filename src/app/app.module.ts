import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MainComponent} from './layouts/main/main.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {HomeComponent} from './layouts/home/home.component';
import {IntroductionComponent} from './basics/introduction/introduction.component';
import {SingleChoiceTestComponent} from './layouts/single-choice-test/single-choice-test.component';
import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {faArrowDown, faArrowLeft, faArrowRight, faArrowRotateRight, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {AlgorithmComponent} from './basics/algorithm/algorithm.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {ReorderTestComponent} from './layouts/reorder-test/reorder-test.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {VariablesComponent} from './basics/variables/variables.component';
import {CategorizeTestComponent} from './layouts/categorize-test/categorize-test.component';
import {FillBlankDropdownTestComponent} from './layouts/fill-blank-dropdown-test/fill-blank-dropdown-test.component';
import {ExerciseHintsComponent} from './layouts/exercise-hints/exercise-hints.component';
import {MultichoiceTestComponent} from './layouts/multichoice-test/multichoice-test.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConditionsComponent} from './basics/conditions/conditions.component';
import {LoopsComponent} from './basics/loops/loops.component';
import {RadiochoiceTestComponent} from './layouts/radiochoice-test/radiochoice-test.component';
import {FunctionsComponent} from './basics/functions/functions.component';
import {FilesComponent} from './basics/files/files.component';
import {ErrorHandlingComponent} from './basics/error-handling/error-handling.component';
import {ListsComponent} from './data-structures/lists/lists.component';
import {DictionariesComponent} from './data-structures/dictionaries/dictionaries.component';
import {SetsComponent} from './data-structures/sets/sets.component';
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";
import {HttpClientModule} from "@angular/common/http";
import {TuplesComponent} from './data-structures/tuples/tuples.component';
import {MultidimensionalComponent} from './data-structures/multidimensional/multidimensional.component';
import {ClassesComponent} from './object-oriented/classes/classes.component';
import {InheritanceComponent} from './object-oriented/inheritance/inheritance.component';
import {GameComponent} from './projects/game/game.component';
import {WebComponent} from './projects/web/web.component';
import {GuiComponent} from './projects/gui/gui.component';

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
    ErrorHandlingComponent,
    ListsComponent,
    DictionariesComponent,
    SetsComponent,
    TuplesComponent,
    MultidimensionalComponent,
    ClassesComponent,
    InheritanceComponent,
    GameComponent,
    WebComponent,
    GuiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DragDropModule,
    BrowserAnimationsModule,
    HighlightModule,
    HttpClientModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        python: () => import('highlight.js/lib/languages/python')
      }
    }
  }],
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
