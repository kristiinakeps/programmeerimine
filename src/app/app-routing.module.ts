import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NAVBAR_ROUTE} from "./layouts/navbar/navbar.route";
import {HOME_ROUTE} from "./layouts/home/home.route";
import {INTRODUCTION_ROUTE} from "./introduction/introduction.route";
import {ALGORITHM_ROUTE} from "./algorithm/algorithm.route";
import {VARIABLES_ROUTE} from "./variables/variables.route";
import {CONDITIONS_ROUTE} from "./conditions/conditions.route";
import {LOOPS_ROUTE} from "./loops/loops.route";
import {FUNCTIONS_ROUTE} from "./functions/functions.route";
import {FILES_ROUTE} from "./files/files.route";
import {ERROR_HANDLING_ROUTE} from "./error-handling/error-handling.route";

const routes: Routes = [NAVBAR_ROUTE, HOME_ROUTE, INTRODUCTION_ROUTE, ALGORITHM_ROUTE, VARIABLES_ROUTE, CONDITIONS_ROUTE,
                        LOOPS_ROUTE, FUNCTIONS_ROUTE, FILES_ROUTE, ERROR_HANDLING_ROUTE];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 16]
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
