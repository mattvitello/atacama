import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private fragment: string;
  public stories: any[];
  public activeStory;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewInit(): void {
    if (this.fragment) {
      document.querySelector('#' + this.fragment + 'Section').scrollIntoView();
    } else {
      window.scrollTo(0,0);
    }
  }

  toggleChris(): void {
    if($(window).width() > 767) {
      if ($('#chris').is(':visible')) {
        $('#chris').hide();
      }
      else {
        this.hideTeamMembers();
        $('#chris').show();
      }
    }
    else{
      if ($('#chrisMobile').is(':visible')) {
        $('#chrisMobile').hide();
      }
      else {
        this.hideTeamMembers();
        $('#chrisMobile').show();
      }
    }
  }

  toggleGordon(): void {
    if($(window).width() > 767) {
      if ($('#gordon').is(':visible')) {
        $('#gordon').hide();
      }
      else {
        this.hideTeamMembers();
        $('#gordon').show();
      }
    }
    else{
      if ($('#gordonMobile').is(':visible')) {
        $('#gordonMobile').hide();
      }
      else {
        this.hideTeamMembers();
        $('#gordonMobile').show();
      }
    }
  }

  toggleEduardo(): void {
    if($(window).width() > 767) {
      if ($('#eduardo').is(':visible')) {
        $('#eduardo').hide();
      }
      else {
        this.hideTeamMembers();
        $('#eduardo').show();
      }
    }
    else{
      if ($('#eduardoMobile').is(':visible')) {
        $('#eduardoMobile').hide();
      }
      else {
        this.hideTeamMembers();
        $('#eduardoMobile').show();
      }
    }
  }

  toggleMax(): void {
    if($(window).width() > 767) {
      if ($('#max').is(':visible')) {
        $('#max').hide();
      }
      else {
        this.hideTeamMembers();
        $('#max').show();
      }
    }
    else{
      if ($('#maxMobile').is(':visible')) {
        $('#maxMobile').hide();
      }
      else {
        this.hideTeamMembers();
        $('#maxMobile').show();
      }
    }
  }

  toggleMerritt(): void {
    if($(window).width() > 767) {
      if ($('#merritt').is(':visible')) {
        $('#merritt').hide();
      }
      else {
        this.hideTeamMembers();
        $('#merritt').show();
      }
    }
    else{
      if ($('#merrittMobile').is(':visible')) {
        $('#merrittMobile').hide();
      }
      else {
        this.hideTeamMembers();
        $('#merrittMobile').show();
      }
    }
  }

  hideTeamMembers(): void {
    $('#chris').hide();
    $('#chrisMobile').hide();
    $('#gordon').hide();
    $('#gordonMobile').hide();
    $('#eduardo').hide();
    $('#eduardoMobile').hide();
    $('#max').hide();
    $('#maxMobile').hide();
    $('#merritt').hide();
    $('#merrittMobile').hide();
  }

  scroll (id) {
    let el = document.getElementById(id);
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
