import {Route} from "@angular/router";
import {ClassesComponent} from "./classes.component";

export const CLASSES_ROUTE: Route = {
  path: 'klassid',
  component: ClassesComponent,
  data: {
    pageTitle: 'Klassid'
  }
};
