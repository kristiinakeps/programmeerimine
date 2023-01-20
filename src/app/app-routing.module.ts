import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NAVBAR_ROUTE} from "./layouts/navbar/navbar.route";
import {HOME_ROUTE} from "./layouts/home/home.route";
import {INTRODUCTION_ROUTE} from "./basics/introduction/introduction.route";
import {ALGORITHM_ROUTE} from "./basics/algorithm/algorithm.route";
import {VARIABLES_ROUTE} from "./basics/variables/variables.route";
import {CONDITIONS_ROUTE} from "./basics/conditions/conditions.route";
import {LOOPS_ROUTE} from "./basics/loops/loops.route";
import {FUNCTIONS_ROUTE} from "./basics/functions/functions.route";
import {FILES_ROUTE} from "./basics/files/files.route";
import {ERROR_HANDLING_ROUTE} from "./basics/error-handling/error-handling.route";
import {LISTS_ROUTE} from "./data-structures/lists/lists.route";
import {DICTIONARIES_ROUTE} from "./data-structures/dictionaries/dictionaries.route";
import {SETS_ROUTE} from "./data-structures/sets/sets.route";
import {TUPLES_ROUTE} from "./data-structures/tuples/tuples.route";
import {MULTIDIMENSIONAL_ROUTE} from "./data-structures/multidimensional/multidimensional.route";
import {CLASSES_ROUTE} from "./object-oriented/classes/classes.route";
import {INHERITANCE_ROUTE} from "./object-oriented/inheritance/inheritance.route";
import {GAME_ROUTE} from "./projects/game/game.route";
import {WEB_ROUTE} from "./projects/web/web.route";
import {GUI_ROUTE} from "./projects/gui/gui.route";
import {COMPUTER_SCIENCE_ROUTE} from "./additional/computer-science/computer-science.route";

const routes: Routes = [NAVBAR_ROUTE, HOME_ROUTE, INTRODUCTION_ROUTE, ALGORITHM_ROUTE, VARIABLES_ROUTE, CONDITIONS_ROUTE,
  LOOPS_ROUTE, FUNCTIONS_ROUTE, FILES_ROUTE, ERROR_HANDLING_ROUTE, LISTS_ROUTE, DICTIONARIES_ROUTE,
  SETS_ROUTE, TUPLES_ROUTE, MULTIDIMENSIONAL_ROUTE, CLASSES_ROUTE, INHERITANCE_ROUTE,
  GAME_ROUTE, WEB_ROUTE, GUI_ROUTE, COMPUTER_SCIENCE_ROUTE];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 16]
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
