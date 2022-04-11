import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NAVBAR_ROUTE} from "./layouts/navbar/navbar.route";
import {HOME_ROUTE} from "./layouts/home/home.route";
import {INTRODUCTION_ROUTE} from "./introduction/introduction.route";

const routes: Routes = [NAVBAR_ROUTE, HOME_ROUTE, INTRODUCTION_ROUTE];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
