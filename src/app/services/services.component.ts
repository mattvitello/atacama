import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleDesign(): void {
    if($(window).width() < 991){
      $('#design-info').hide();
      $('#prototyping-info').hide();
      $('#tooling-info').hide();
      if ($('#design-info-mobile').is(':visible')) {
        $('#design-info-mobile').hide();
      }
      else {
        $('#design-info-mobile').show();
      }
    }
    else {
      $('#tooling-info-mobile').hide();
      $('#prototyping-info-mobile').hide();
      $('#design-info-mobile').hide();
      $('#design-info-mobile').hide();
      if ($('#design-info').is(':visible')) {
        $('#design-info').hide();
        $('#prototyping-info').hide();
        $('#tooling-info').hide();
      }
      else {
        $('#design-info').show();
        $('#prototyping-info').hide();
        $('#tooling-info').hide();
      }
    }
  }

  togglePrototyping(): void {
    if($(window).width() < 991){
      $('#design-info').hide();
      $('#prototyping-info').hide();
      $('#tooling-info').hide();
      if ($('#prototyping-info-mobile').is(':visible')) {
        $('#prototyping-info-mobile').hide();
      }
      else {
        $('#prototyping-info-mobile').show();
      }
    }
    else
    {
      $('#tooling-info-mobile').hide();
      $('#prototyping-info-mobile').hide();
      $('#design-info-mobile').hide();
      if ($('#prototyping-info').is(':visible')) {
        $('#design-info').hide();
        $('#prototyping-info').hide();
        $('#tooling-info').hide();
      }
      else {
        $('#prototyping-info').show();
        $('#design-info').hide();
        $('#tooling-info').hide();
      }
    }
  }

  toggleTooling(): void {
    if($(window).width() < 991){
      $('#design-info').hide();
      $('#prototyping-info').hide();
      $('#tooling-info').hide();
      if ($('#tooling-info-mobile').is(':visible')) {
        $('#tooling-info-mobile').hide();
    }
      else {
        $('#tooling-info-mobile').show();
      }
    }
    else
    {
      $('#tooling-info-mobile').hide();
      $('#prototyping-info-mobile').hide();
      $('#design-info-mobile').hide();
      if ($('#tooling-info').is(':visible')) {
        $('#design-info').hide();
        $('#prototyping-info').hide();
        $('#tooling-info').hide();
      }
      else {
        $('#tooling-info').show();
        $('#design-info').hide();
        $('#prototyping-info').hide();
      }
    }
  }


}
