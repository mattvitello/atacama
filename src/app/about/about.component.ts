import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.toggleDebby();
    this.toggleChris();
  }

  toggleChris(): void {
    if($(window).width() < 991) {
      $('#team_member_chris').hide();
      $('#team_member_debby').hide();
      if ($('#team_member_chris-mobile').is(':visible')) {
        $('#team_member_chris-mobile').hide();
      }
      else {
        $('#team_member_chris-mobile').show();
      }
    }
    else{
      $('#team_member_chris-mobile').hide();
      $('#team_member_debby-mobile').hide();
      if ($('#team_member_chris').is(':visible')) {
        $('#team_member_chris').hide();
        $('#team_member_debby').hide();
      }
      else {
        $('#team_member_chris').show();
        $('#team_member_debby').hide();
      }
    }
  }

  toggleDebby(): void {
    if($(window).width() < 991) {
      $('#team_member_chris').hide();
      $('#team_member_debby').hide();
      if ($('#team_member_debby-mobile').is(':visible')) {
        $('#team_member_debby-mobile').hide();
      }
      else {
        $('#team_member_debby-mobile').show();
      }
    }
    else
    {
      $('#team_member_chris-mobile').hide();
      $('#team_member_debby-mobile').hide();
      if ($('#team_member_debby').is(':visible')) {
        $('#team_member_chris').hide();
        $('#team_member_debby').hide();
      }
      else {
        $('#team_member_debby').show();
        $('#team_member_chris').hide();
      }
    }
  }

}
