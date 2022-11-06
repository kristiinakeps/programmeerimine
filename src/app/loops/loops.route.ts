import {Route} from "@angular/router";
import {LoopsComponent} from "./loops.component";

export const LOOPS_ROUTE: Route = {
  path: 'korduslaused',
  component: LoopsComponent,
  data: {
    pageTitle: 'Korduslaused'
  }
};
