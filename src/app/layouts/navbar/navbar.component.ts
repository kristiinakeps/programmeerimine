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
  isBasicsCollapsed = true;
  isDataStructuresCollapsed = true;
  isObjectOrientedProgrammingCollapsed = true;
  isProjectsCollapsed = true;
  isAdditionalCollapsed = true;

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (this.router.url.startsWith('/sissejuhatus') || this.router.url.startsWith('/algoritm') ||
      this.router.url.startsWith('/muutujad') || this.router.url.startsWith('/tingimuslaused') ||
      this.router.url.startsWith('/korduslaused') || this.router.url.startsWith('/funktsioonid') ||
      this.router.url.startsWith('/failid') || this.router.url.startsWith('/veahaldus'))
      this.isBasicsCollapsed = false;
    else if (this.router.url.startsWith('/jarjendid') || this.router.url.startsWith('/sonastikud') ||
    this.router.url.startsWith('/hulgad'))
      this.isDataStructuresCollapsed = false;
  }

  collapseNavbar(): void {
    this.isMenuCollapsed = true;
  }

  isIntroductionOpened(): boolean {
    return this.router.url.startsWith('/sissejuhatus') && !this.isBasicsCollapsed;
  }

  isAlgorithmsOpened(): boolean {
    return this.router.url.startsWith('/algoritm') && !this.isBasicsCollapsed;
  }

  isVariablesOpened(): boolean {
    return this.router.url.startsWith('/muutujad') && !this.isBasicsCollapsed;
  }

  isConditionsOpened(): boolean {
    return this.router.url.startsWith('/tingimuslaused') && !this.isBasicsCollapsed;
  }

  isLoopsOpened(): boolean {
    return this.router.url.startsWith('/korduslaused') && !this.isBasicsCollapsed;
  }

  isFunctionsOpened(): boolean {
    return this.router.url.startsWith('/funktsioonid') && !this.isBasicsCollapsed;
  }

  isFilesOpened(): boolean {
    return this.router.url.startsWith('/failid') && !this.isBasicsCollapsed;
  }

  isErrorHandlingOpened(): boolean {
    return this.router.url.startsWith('/veahaldus') && !this.isBasicsCollapsed;
  }

  isListsOpened(): boolean {
    return this.router.url.startsWith('/jarjendid') && !this.isDataStructuresCollapsed;
  }

  isDictionariesOpened(): boolean {
    return this.router.url.startsWith('/sonastikud') && !this.isDataStructuresCollapsed;
  }

  isSetsOpened(): boolean {
    return this.router.url.startsWith('/hulgad') && !this.isDataStructuresCollapsed;
  }

  toggleBasics(): void {
    this.isBasicsCollapsed = !this.isBasicsCollapsed;
  }

  toggleDataStructures(): void {
    this.isDataStructuresCollapsed = !this.isDataStructuresCollapsed;
  }

  toggleObjectOrientedProgramming(): void {
    this.isObjectOrientedProgrammingCollapsed = !this.isObjectOrientedProgrammingCollapsed;
  }

  toggleProjects(): void {
    this.isProjectsCollapsed = !this.isProjectsCollapsed;
  }

  toggleAdditional(): void {
    this.isAdditionalCollapsed = !this.isAdditionalCollapsed;
  }

}
