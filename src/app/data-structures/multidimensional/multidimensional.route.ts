import {Route} from "@angular/router";
import {MultidimensionalComponent} from "./multidimensional.component";

export const MULTIDIMENSIONAL_ROUTE: Route = {
  path: 'mitmemootmelised',
  component: MultidimensionalComponent,
  data: {
    pageTitle: 'Mitmemõõtmelised andmestruktuurid'
  }
};
