import {Route} from "@angular/router";
import {InheritanceComponent} from "./inheritance.component";

export const INHERITANCE_ROUTE: Route = {
  path: 'parilus',
  component: InheritanceComponent,
  data: {
    pageTitle: 'Pärilus'
  }
};
