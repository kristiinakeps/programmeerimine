import {Route} from "@angular/router";
import {VariablesComponent} from "./variables.component";

export const VARIABLES_ROUTE: Route = {
  path: 'muutujad',
  component: VariablesComponent,
  data: {
    pageTitle: 'Muutujad ja avaldised'
  }
};
