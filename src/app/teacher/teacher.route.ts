import {Route} from "@angular/router";
import {TeacherComponent} from "./teacher.component";

export const TEACHER_ROUTE: Route = {
  path: 'opetajale',
  component: TeacherComponent,
  data: {
    pageTitle: 'Õpetajale'
  }
};
