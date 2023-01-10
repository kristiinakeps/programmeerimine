import {Route} from "@angular/router";
import {WebComponent} from "./web.component";

export const WEB_ROUTE: Route = {
  path: 'veebileht',
  component: WebComponent,
  data: {
    pageTitle: 'Veebilehe loomine'
  }
};
