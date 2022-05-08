import {Route} from "@angular/router";
import {AlgorithmComponent} from "./algorithm.component";

export const ALGORITHM_ROUTE: Route = {
  path: 'algoritm',
  component: AlgorithmComponent,
  data: {
    pageTitle: 'Algoritm'
  }
};
