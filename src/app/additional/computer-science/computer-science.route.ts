import {Route} from "@angular/router";
import {ComputerScienceComponent} from "./computer-science.component";

export const COMPUTER_SCIENCE_ROUTE: Route = {
  path: 'informaatika',
  component: ComputerScienceComponent,
  data: {
    pageTitle: 'Informaatika'
  }
};
