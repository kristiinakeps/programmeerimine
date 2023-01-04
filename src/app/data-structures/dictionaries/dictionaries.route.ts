import {Route} from "@angular/router";
import {DictionariesComponent} from "./dictionaries.component";

export const DICTIONARIES_ROUTE: Route = {
  path: 'sonastikud',
  component: DictionariesComponent,
  data: {
    pageTitle: 'Sõnastikud'
  }
};
