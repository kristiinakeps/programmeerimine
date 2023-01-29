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

  constructor(public router: Router) {
    router.events.subscribe(() => this.uncollapseRouteCategory());
  }

  ngOnInit(): void {
    this.uncollapseRouteCategory()
  }

  uncollapseRouteCategory(): void {
    if (this.router.url.startsWith('/sissejuhatus') || this.router.url.startsWith('/algoritm') ||
      this.router.url.startsWith('/muutujad') || this.router.url.startsWith('/tingimuslaused') ||
      this.router.url.startsWith('/korduslaused') || this.router.url.startsWith('/funktsioonid') ||
      this.router.url.startsWith('/failid') || this.router.url.startsWith('/veahaldus'))
      this.isBasicsCollapsed = false;
    else if (this.router.url.startsWith('/jarjendid') || this.router.url.startsWith('/sonastikud') ||
      this.router.url.startsWith('/hulgad') || this.router.url.startsWith('/ennikud') || this.router.url.startsWith('/mitmemootmelised'))
      this.isDataStructuresCollapsed = false;
    else if (this.router.url.startsWith('/klassid') || this.router.url.startsWith('/parilus'))
      this.isObjectOrientedProgrammingCollapsed = false;
    else if (this.router.url.startsWith('/mang') || this.router.url.startsWith('/veebirakendus') || this.router.url.startsWith('/graafika'))
      this.isProjectsCollapsed = false;
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

  isTuplesOpened(): boolean {
    return this.router.url.startsWith('/ennikud') && !this.isDataStructuresCollapsed;
  }

  isMultidimensionalOpened(): boolean {
    return this.router.url.startsWith('/mitmemootmelised') && !this.isDataStructuresCollapsed;
  }

  isClassesOpened(): boolean {
    return this.router.url.startsWith('/klassid') && !this.isObjectOrientedProgrammingCollapsed;
  }

  isInheritanceOpened(): boolean {
    return this.router.url.startsWith('/parilus') && !this.isObjectOrientedProgrammingCollapsed;
  }

  isGameOpened(): boolean {
    return this.router.url.startsWith('/mang') && !this.isProjectsCollapsed;
  }

  isWebOpened(): boolean {
    return this.router.url.startsWith('/veebirakendus') && !this.isProjectsCollapsed;
  }

  isGuiOpened(): boolean {
    return this.router.url.startsWith('/graafika') && !this.isProjectsCollapsed;
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

}
