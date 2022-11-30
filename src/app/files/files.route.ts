import {Route} from "@angular/router";
import {FilesComponent} from "./files.component";

export const FILES_ROUTE: Route = {
  path: 'failid',
  component: FilesComponent,
  data: {
    pageTitle: 'Failid'
  }
};
