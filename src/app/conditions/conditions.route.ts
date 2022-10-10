import {Route} from "@angular/router";
import {ConditionsComponent} from "./conditions.component";

export const CONDITIONS_ROUTE: Route = {
  path: 'tingimuslaused',
  component: ConditionsComponent,
  data: {
    pageTitle: 'Tingimuslaused'
  }
};
