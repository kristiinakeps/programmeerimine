import {Route} from "@angular/router";
import {FunctionsComponent} from "./functions.component";

export const FUNCTIONS_ROUTE: Route = {
  path: 'funktsioonid',
  component: FunctionsComponent,
  data: {
    pageTitle: 'Funktsioonid'
  }
};
