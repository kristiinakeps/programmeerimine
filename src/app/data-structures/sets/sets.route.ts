import {Route} from "@angular/router";
import {SetsComponent} from "./sets.component";

export const SETS_ROUTE: Route = {
  path: 'hulgad',
  component: SetsComponent,
  data: {
    pageTitle: 'Hulgad'
  }
};
