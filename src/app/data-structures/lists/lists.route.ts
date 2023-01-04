import {Route} from "@angular/router";
import {ListsComponent} from "./lists.component";

export const LISTS_ROUTE: Route = {
  path: 'jarjendid',
  component: ListsComponent,
  data: {
    pageTitle: 'Järjendid'
  }
};
