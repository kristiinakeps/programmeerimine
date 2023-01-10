import {Route} from "@angular/router";
import {InterfacesComponent} from "./interfaces.component";

export const INTERFACES_ROUTE: Route = {
  path: 'liidesed',
  component: InterfacesComponent,
  data: {
    pageTitle: 'Liidesed'
  }
};
