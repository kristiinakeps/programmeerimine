import {Route} from "@angular/router";
import {ErrorHandlingComponent} from "./error-handling.component";

export const ERROR_HANDLING_ROUTE: Route = {
  path: 'veahaldus',
  component: ErrorHandlingComponent,
  data: {
    pageTitle: 'Veahaldus'
  }
};
