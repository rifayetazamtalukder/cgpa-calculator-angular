import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cgpa-calculator-angular';

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    // 
    this.IconRegestry_normal();

    // this.IconRegestry_github('give_repo_name_here'); // kaj korena
  }

  IconRegestry_normal() {
    // 
    //#region Icon Registry
    // close-white
    this.iconRegistry.addSvgIcon(
      'close-white',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/close-white-48dp.svg')
    );
    // menu-white
    this.iconRegistry.addSvgIcon(
      'menu-white',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/menu-white-48dp.svg')
    );
    // feedback-white
    this.iconRegistry.addSvgIcon(
      'feedback-white',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/feedback-white-48dp.svg')
    );
    // more-vert-white
    this.iconRegistry.addSvgIcon(
      'more-vert-white',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/more_vert-white-48dp.svg')
    );

    // timer-black
    this.iconRegistry.addSvgIcon(
      'timer-black',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/timer-black-48dp.svg')
    );
    // timer-off-black
    this.iconRegistry.addSvgIcon(
      'timer-off-black',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/timer_off-black-48dp.svg')
    );

    // settings-dark-gray
    this.iconRegistry.addSvgIcon(
      'settings-dark-gray',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/settings-dark-gray-48dp.svg')
    );
    // announcement-dark-gray
    this.iconRegistry.addSvgIcon(
      'announcement-dark-gray',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/announcement-dark-gray-48dp.svg')
    );
    // help-dark-gray
    this.iconRegistry.addSvgIcon(
      'help-dark-gray',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/help-dark-gray-48dp.svg')
    );
    // person-dark-gray
    this.iconRegistry.addSvgIcon(
      'person-dark-gray',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/person-dark-gray-48dp.svg')
    );
    // facebook-blue
    this.iconRegistry.addSvgIcon(
      'facebook-blue',
      this.sanitizer.bypassSecurityTrustResourceUrl('../assets/svg-icons/facebook-blue.svg')
    );
    // 
    //#endregion Icon Registry

  }


  // Kaj korena
  IconRegestry_github(_repo_name) {


    // 
    //#region Icon Registry

    let _url = `https://github.com/rifayetazamtalukder/${_repo_name}/blob/master/assets/svg-icons/`;

    // close-white
    this.iconRegistry.addSvgIcon(
      'close-white',
      this.sanitizer.bypassSecurityTrustResourceUrl(`${_url}close-white-48dp.svg`)
    );
    // menu-white
    this.iconRegistry.addSvgIcon(
      'menu-white',
      this.sanitizer.bypassSecurityTrustResourceUrl(`${_url}menu-white-48dp.svg`)
    );
    // more-vert-white
    this.iconRegistry.addSvgIcon(
      'more-vert-white',
      this.sanitizer.bypassSecurityTrustResourceUrl(`${_url}more_vert-white-48dp.svg`)
    );

    // timer-black
    this.iconRegistry.addSvgIcon(
      'timer-black',
      this.sanitizer.bypassSecurityTrustResourceUrl(`${_url}timer-black-48dp.svg`)
    );
    // timer-off-black
    this.iconRegistry.addSvgIcon(
      'timer-off-black',
      this.sanitizer.bypassSecurityTrustResourceUrl(`${_url}timer_off-black-48dp.svg`)
    );

    // settings-dark-gray
    this.iconRegistry.addSvgIcon(
      'settings-dark-gray',
      this.sanitizer.bypassSecurityTrustResourceUrl(`${_url}settings-dark-gray-48dp.svg`)
    );
    // announcement-dark-gray
    this.iconRegistry.addSvgIcon(
      'announcement-dark-gray',
      this.sanitizer.bypassSecurityTrustResourceUrl(`${_url}announcement-dark-gray-48dp.svg`)
    );
    // help-dark-gray
    this.iconRegistry.addSvgIcon(
      'help-dark-gray',
      this.sanitizer.bypassSecurityTrustResourceUrl(`${_url}help-dark-gray-48dp.svg`)
    );
    // person-dark-gray
    this.iconRegistry.addSvgIcon(
      'person-dark-gray',
      this.sanitizer.bypassSecurityTrustResourceUrl(`${_url}person-dark-gray-48dp.svg`)
    );
    // facebook-blue
    this.iconRegistry.addSvgIcon(
      'facebook-blue',
      this.sanitizer.bypassSecurityTrustResourceUrl(`${_url}facebook-blue.svg`)
    );
    // 
    //#endregion Icon Registry


  }


}
