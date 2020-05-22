import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from "rxjs";
import { MediaObserver, MediaChange } from "@angular/flex-layout";

import { FeedbackService } from "../services/feedback.service";
import { Feedback } from '../interfaces/feedback';

import { MatDialog } from "@angular/material/dialog";
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';



@Component({
  selector: 'app-topbar-with-sidenav',
  templateUrl: './topbar-with-sidenav.component.html',
  styleUrls: ['./topbar-with-sidenav.component.css']
})
export class TopbarWithSidenavComponent implements OnInit, OnDestroy {

  // ``````````````````````````````````````
  //              Variables
  // ``````````````````````````````````````
  //#region Variables
  private mediaType: Subscription;
  private feedback_dialog_subscriber: Subscription;
  public deviceType: string;
  public isSideNavOpen: boolean;
  public navMode: string;

  private is_feedback_added: boolean = false;



  //#endregion Variables

  // 
  constructor(private mediaObserver: MediaObserver, public dialog: MatDialog) {
    this.is_feedback_added = false;
  }

  ngOnInit() {
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


  AddFeedback() {
    // alert('Feedback button works');

    // dialog must be added in the entryComponents of app.module.ts
    // this.dialog.open(component_name, optional configuration); 

    let width: string;
    if (this.deviceType === 'xl') {
      width = '35%';
    }
    else if (this.deviceType === 'lg') {
      width = '50%';
    }
    else if (this.deviceType === 'md') {
      width = '60%';
    }
    else {
      width = '90%';
    }

    let feedbackDialoogRef = this.dialog.open(FeedbackDialogComponent, {
      width: width,
    });

    this.feedback_dialog_subscriber = feedbackDialoogRef.afterClosed().subscribe(result => {
      // this.is_feedback_added = result;
      // alert(`Result22 : ${result}`);
      // Do result check here if needed.
    });
  }


  ngOnDestroy() {
    this.mediaType.unsubscribe();
    this.feedback_dialog_subscriber.unsubscribe();
  }

}
