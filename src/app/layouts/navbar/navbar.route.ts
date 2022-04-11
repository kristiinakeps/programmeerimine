import {NavbarComponent} from "./navbar.component";
import {Route} from "@angular/router";

export const NAVBAR_ROUTE: Route = {
  path: '',
  component: NavbarComponent,
  outlet: 'navbar'
};
