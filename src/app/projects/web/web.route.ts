import {Route} from "@angular/router";
import {WebComponent} from "./web.component";

export const WEB_ROUTE: Route = {
  path: 'veebirakendus',
  component: WebComponent,
  data: {
    pageTitle: 'Veebirakenduse loomine'
  }
};
