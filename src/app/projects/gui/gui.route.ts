import {Route} from "@angular/router";
import {GuiComponent} from "./gui.component";

export const GUI_ROUTE: Route = {
  path: 'rakendus',
  component: GuiComponent,
  data: {
    pageTitle: 'Töölauarakendus'
  }
};
