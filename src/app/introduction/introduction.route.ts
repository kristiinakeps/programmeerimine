import {Route} from "@angular/router";
import {IntroductionComponent} from "./introduction.component";

export const INTRODUCTION_ROUTE: Route = {
  path: 'sissejuhatus',
  component: IntroductionComponent,
  data: {
    pageTitle: 'Sissejuhatus'
  }
};
