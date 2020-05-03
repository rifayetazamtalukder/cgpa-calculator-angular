import { Component, OnInit } from '@angular/core';

import { Subscription } from "rxjs";
import { MediaObserver, MediaChange } from "@angular/flex-layout";



@Component({
  selector: 'app-topbar-with-sidenav',
  templateUrl: './topbar-with-sidenav.component.html',
  styleUrls: ['./topbar-with-sidenav.component.css']
})
export class TopbarWithSidenavComponent implements OnInit {

  // ``````````````````````````````````````
  //              Variables
  // ``````````````````````````````````````
  //#region Variables
  private mediaType: Subscription;
  public deviceType: string;
  public isSideNavOpen: boolean;
  public navMode: string;
  //#endregion Variables

  // 
  constructor(private mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    // 
    // This method will be called by angular when the Component will initiate
    // 
    // Subscribe mediaObserver here to get the media type for the side-nav
    this.mediaType = this.mediaObserver.media$.subscribe(
      (change: MediaChange) => {
        this.deviceType = change.mqAlias;
        // 
        if (this.deviceType === 'xl' || this.deviceType === 'lg') {
          this.navMode = 'side';
          this.isSideNavOpen = true;
        }
        else {
          this.navMode = 'over';
          this.isSideNavOpen = false;
        }
      }
    );
  }

}
