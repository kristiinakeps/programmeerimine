import {Route} from "@angular/router";
import {TuplesComponent} from "./tuples.component";

export const TUPLES_ROUTE: Route = {
  path: 'ennikud',
  component: TuplesComponent,
  data: {
    pageTitle: 'Ennikud'
  }
};
