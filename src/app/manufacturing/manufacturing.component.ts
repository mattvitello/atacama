import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.scss']
})
export class ManufacturingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleInjectionMolding(): void {
    if ($('#injection-molding-content').is(':visible')){
      $('.info-row1').hide();
      $('#injection-molding-border').hide();
      $('#extrusion-border').hide();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').hide();
      $('#extrusion-content').hide();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "50px");
    }
    else{
      $('.info-row3').hide();
      $('#gmp-border').hide();
      $('#us-border').hide();
      $('#asia-border').hide();
      $('#gmp-content').show();
      $('#us-content').hide();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "50px");
  
      $('.info-row2').hide();
      $('#tooling-border').hide();
      $('#production-border').hide();
      $('#construction-border').hide();
      $('#tooling-content').hide();
      $('#production-content').hide();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "50px");
  
      $('.info-row1').show();
      $('#injection-molding-border').show();
      $('#extrusion-border').hide();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').show();
      $('#extrusion-content').hide();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "0px");
    }
  }

  toggleExtrusion(): void {
    if ($('#extrusion-content').is(':visible')){
      $('.info-row1').hide();
      $('#injection-molding-border').hide();
      $('#extrusion-border').hide();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').hide();
      $('#extrusion-content').hide();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "50px");
    }
    else{
      $('.info-row3').hide();
      $('#gmp-border').hide();
      $('#us-border').hide();
      $('#asia-border').hide();
      $('#gmp-content').show();
      $('#us-content').hide();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "50px");
  
      $('.info-row2').hide();
      $('#tooling-border').hide();
      $('#production-border').hide();
      $('#construction-border').hide();
      $('#tooling-content').hide();
      $('#production-content').hide();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "50px");
  
      $('.info-row1').show();
      $('#injection-molding-border').hide();
      $('#extrusion-border').show();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').hide();
      $('#extrusion-content').show();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "0px");
    }
  }

  toggleThermoforming(): void {
    if ($('#thermoforming-content').is(':visible')){
      $('.info-row1').hide();
      $('#injection-molding-border').hide();
      $('#extrusion-border').hide();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').hide();
      $('#extrusion-content').hide();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "50px");
    }
    else{
      $('.info-row3').hide();
      $('#gmp-border').hide();
      $('#us-border').hide();
      $('#asia-border').hide();
      $('#gmp-content').show();
      $('#us-content').hide();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "50px");
  
      $('.info-row2').hide();
      $('#tooling-border').hide();
      $('#production-border').hide();
      $('#construction-border').hide();
      $('#tooling-content').hide();
      $('#production-content').hide();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "50px");
  
      $('.info-row1').show();
      $('#injection-molding-border').hide();
      $('#extrusion-border').hide();
      $('#thermoforming-border').show();
      $('#injection-molding-content').hide();
      $('#extrusion-content').hide();
      $('#thermoforming-content').show();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "0px");
    }
  }

  toggleTooling(): void {
    if ($('#tooling-content').is(':visible')){
      $('.info-row2').hide();
      $('#tooling-border').hide();
      $('#production-border').hide();
      $('#construction-border').hide();
      $('#tooling-content').hide();
      $('#production-content').hide();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "50px");
    }
    else{
      $('.info-row1').hide();
      $('.info-row3').hide();
  
      $('#injection-molding-border').hide();
      $('#extrusion-border').hide();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').hide();
      $('#extrusion-content').hide();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "50px");
  
      $('#gmp-border').hide();
      $('#us-border').hide();
      $('#asia-border').hide();
      $('#gmp-content').show();
      $('#us-content').hide();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "50px");
  
      $('.info-row2').show();
      $('#tooling-border').show();
      $('#production-border').hide();
      $('#construction-border').hide();
      $('#tooling-content').show();
      $('#production-content').hide();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "0px");
    }
  }

  toggleProduction(): void {
    if ($('#production-content').is(':visible')){
      $('.info-row2').hide();
      $('#tooling-border').hide();
      $('#production-border').hide();
      $('#construction-border').hide();
      $('#tooling-content').hide();
      $('#production-content').hide();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "50px");
    }
    else{
      $('.info-row1').hide();
      $('.info-row3').hide();
  
      $('#injection-molding-border').hide();
      $('#extrusion-border').hide();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').hide();
      $('#extrusion-content').hide();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "50px");
  
      $('#gmp-border').hide();
      $('#us-border').hide();
      $('#asia-border').hide();
      $('#gmp-content').show();
      $('#us-content').hide();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "50px");
  
      $('.info-row2').show();
      $('#tooling-border').hide();
      $('#production-border').show();
      $('#construction-border').hide();
      $('#tooling-content').hide();
      $('#production-content').show();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "0px");
    }
  }

  toggleConstruction(): void {
    if ($('#construction-content').is(':visible')){
      $('.info-row2').hide();
      $('#tooling-border').hide();
      $('#production-border').hide();
      $('#construction-border').hide();
      $('#tooling-content').hide();
      $('#production-content').hide();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "50px");
    }
    else{
      $('.info-row1').hide();
      $('.info-row3').hide();
      $('#injection-molding-border').hide();
      $('#extrusion-border').hide();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').hide();
      $('#extrusion-content').hide();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "50px");
  
      $('#gmp-border').hide();
      $('#us-border').hide();
      $('#asia-border').hide();
      $('#gmp-content').show();
      $('#us-content').hide();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "50px");
  
      $('.info-row2').show();
      $('#tooling-border').hide();
      $('#production-border').hide();
      $('#construction-border').show();
      $('#tooling-content').hide();
      $('#production-content').hide();
      $('#construction-content').show();
      $('#tooling, #production, #construction').css("margin-bottom", "0px");
    }
  }

  toggleGMP(): void {
    if ($('#gmp-content').is(':visible')){
      $('.info-row3').hide();
      $('#gmp-border').hide();
      $('#us-border').hide();
      $('#asia-border').hide();
      $('#gmp-content').hide();
      $('#us-content').hide();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "50px");
    }
    else{
      $('.info-row3').show();
      $('.info-row2').hide();
      $('.info-row1').hide();
  
      $('#injection-molding-border').hide();
      $('#extrusion-border').hide();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').hide();
      $('#extrusion-content').hide();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "50px");
  
      $('#tooling-border').hide();
      $('#production-border').hide();
      $('#construction-border').hide();
      $('#tooling-content').hide();
      $('#production-content').hide();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "50px");
  
      $('#gmp-border').show();
      $('#us-border').hide();
      $('#asia-border').hide();
      $('#gmp-content').show();
      $('#us-content').hide();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "0px");
    }
  }

  toggleUS(): void {
    if ($('#us-content').is(':visible')){
      $('.info-row3').hide();
      $('#gmp-border').hide();
      $('#us-border').hide();
      $('#asia-border').hide();
      $('#gmp-content').hide();
      $('#us-content').hide();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "50px")
    }
    else{
      $('.info-row3').show();
      $('.info-row2').hide();
      $('.info-row1').hide();
  
      $('#injection-molding-border').hide();
      $('#extrusion-border').hide();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').hide();
      $('#extrusion-content').hide();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "50px");
  
      $('#tooling-border').hide();
      $('#production-border').hide();
      $('#construction-border').hide();
      $('#tooling-content').hide();
      $('#production-content').hide();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "50px");
  
      $('#gmp-border').hide();
      $('#us-border').show();
      $('#asia-border').hide();
      $('#gmp-content').hide();
      $('#us-content').show();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "0px")
    }
  }

  toggleAsia(): void {
    if ($('#asia-content').is(':visible')){
      $('.info-row3').hide();
      $('#gmp-border').hide();
      $('#us-border').hide();
      $('#asia-border').hide();
      $('#gmp-content').hide();
      $('#us-content').hide();
      $('#asia-content').hide();
      $('#gmp, #us, #asia').css("margin-bottom", "50px")
    }
    else{
      $('.info-row3').show();
      $('.info-row2').hide();
      $('.info-row1').hide();
  
      $('#injection-molding-border').hide();
      $('#extrusion-border').hide();
      $('#thermoforming-border').hide();
      $('#injection-molding-content').hide();
      $('#extrusion-content').hide();
      $('#thermoforming-content').hide();
      $('#injection-molding, #extrusion, #thermoforming').css("margin-bottom", "50px");
  
      $('#tooling-border').hide();
      $('#production-border').hide();
      $('#construction-border').hide();
      $('#tooling-content').hide();
      $('#production-content').hide();
      $('#construction-content').hide();
      $('#tooling, #production, #construction').css("margin-bottom", "50px");
  
      $('#gmp-border').hide();
      $('#us-border').hide();
      $('#asia-border').show();
      $('#gmp-content').hide();
      $('#us-content').hide();
  
      $('#asia-content').show();
      $('#gmp, #us, #asia').css("margin-bottom", "0px")
    }
  }

}
