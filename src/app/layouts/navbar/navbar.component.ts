import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {inOutAnimation} from "../../animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [inOutAnimation]
})
export class NavbarComponent implements OnInit {

  isMenuCollapsed = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  collapseNavbar(): void {
    this.isMenuCollapsed = true;
  }

}
