import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  collapseNavbar(): void {
    this.isMenuCollapsed = true;
  }

}
