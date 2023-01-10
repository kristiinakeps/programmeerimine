import {Route} from "@angular/router";
import {GameComponent} from "./game.component";

export const GAME_ROUTE: Route = {
  path: 'mang',
  component: GameComponent,
  data: {
    pageTitle: 'Mängu loomine'
  }
};
