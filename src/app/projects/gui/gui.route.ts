import {Route} from "@angular/router";
import {GuiComponent} from "./gui.component";

export const GUI_ROUTE: Route = {
  path: 'graafika',
  component: GuiComponent,
  data: {
    pageTitle: 'Graafiline kasutajaliides'
  }
};
