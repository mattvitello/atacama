import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  isNonHomePath: boolean = false;
  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.updatePathAndAppendStyles();

    this.router.events.subscribe(() => {
      this.closeMobileMenu();
      this.updatePathAndAppendStyles();
    });
  }

  validateCurrentPath(): void {
    this.isNonHomePath = this.location.path() !== '';
  }

  closeMobileMenu(): void {
    var bigSlideAPI = ($('.menu-link').bigSlide()).bigSlideAPI;
    bigSlideAPI.view.toggleClose();
   }

   updatePathAndAppendStyles(): void {
    this.validateCurrentPath();

    this.setAnimationStyles(5);

    const body = document.getElementById('app-body');

    if (!this.isNonHomePath) {
      body!.style!.cssText = 'margin: 0;padding: 0;width: 100%;height: 100%;overflow: hidden;';
    } else {
      body!.style!.cssText = '';
    }
   }

   setAnimationStyles(retryAttempts: number): void {
    const animation = document.getElementById('home-animation');

    if (!animation) {
      if (retryAttempts > 0) {
        setTimeout(() => this.setAnimationStyles(retryAttempts - 1), 100);
      }
      return;
    }

    if (!this.isNonHomePath) {
      animation.style.cssText = 'display:block;';
    } else {
      animation.style.cssText = 'display:none;';
    }
   }

}
