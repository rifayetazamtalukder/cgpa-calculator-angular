import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FeedbackService } from '../services/feedback.service';
import { Subscription } from 'rxjs';
import { Feedback } from '../interfaces/feedback';




//#region Instant Errors Using ErrorStateMatcher
export class AdminErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;

    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
//#endregion Instant Errors Using ErrorStateMatcher







@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit, OnDestroy {


  adminErrorStateMatcher = new AdminErrorStateMatcher();
  private admin_username = 'rifayetewucse';
  private admin_password = 'Allabout#2189';
  public login_success: boolean = false;
  public wrong_username_or_password: boolean = false;
  public hide_password: boolean = true;
  private wrong_password_count: number;
  public error_text: string;
  public disable_login: boolean;
  private _feedback_sub: Subscription;
  public date_from_fire: any = [];

  public feedbacks: Feedback[];
  public unreadFeedbacks: Feedback[];
  public readFeedbacks: Feedback[];

  public admin_form = this.formBuilder.group({

    username: ['', [
      Validators.required,
    ]],

    password: ['', [
      Validators.required,
      Validators.pattern('^[a-zA-Z#0-9]+')
    ]]

  });

  get username() {
    return this.admin_form.get('username');
  }

  get password() {
    return this.admin_form.get('password');
  }


  // Constructor
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private feedbackService: FeedbackService) { }


  ngOnInit() {
    this.login_success = false;
    this.hide_password = true;
    this.wrong_username_or_password = false;
    this.wrong_password_count = 0;
    this.disable_login = false;

    // TODO: nicher data gulo service[json data] e set kora thakbe thakbe
    // 1. disable_login
    // 2. wrong_password_count

    this._feedback_sub = this.feedbackService.getFeedbacks().subscribe(_feedbacks => {
      this.feedbacks = _feedbacks;
    });
  }

  ngOnDestroy() {
    this._feedback_sub.unsubscribe();
  }



  Login() {
    // check if the form is valid
    if (this.admin_form.valid) {
      // console.log(`
      // Username: ${this.username.value}
      // Password: ${this.password.value}
      // `);

      // Check username and password
      if (this.username.value === this.admin_username && this.password.value === this.admin_password) {
        //
        // ==================== 
        //       Login user
        // ====================

        // TODO: Ekhane angular authentication use korbo
        // Session dhore rakhar jonne

        // Show Login success snack
        this.ShowSnackbar('Successfully Logged in', 2500, 'center', 'top');

        // Set wrong_username_or_password to false
        this.wrong_username_or_password = false;

        // Set login_success to true;
        this.login_success = true;

        // Fetch data from firestore to see all the feedbacks
        // Fetched in ngOnInit()

        // console.log(this.feedbacks)
        // let __fe = this.feedbacks;
        // console.log(__fe);
        // for (let i = 0; i < __fe.length; i++) {
        //   console.log(`
        //   Title: ${__fe[i].title}
        //   Date from firebase: ${__fe[i].datetime}
        //   Date Using new Date: ${(new Date(__fe[i].datetime)).toDateString()}
        //   `);
        // }
      }
      else {
        // username or password are wrong
        // show Error [middle of the screen]:
        // Wrong username or passwrod
        this.wrong_username_or_password = true;
        this.wrong_password_count += 1;

        if (this.wrong_password_count === 5) {
          // TODO:
          // jodi consicutively 5 bar wrong password
          // enter kore tahole firestore e user er
          // username, password, public ip(if possible)
          // store korbo
          // abong user k password enter kora theke 
          // 30 min biroto rakhbo 
          // eta service e count shuru hobe

          // let min_count = 0;

          // this.error_text = `Maximum try limit crossed. Please try again ${min_count} lalter.`;
          this.error_text = `Maximum try limit crossed. Please try again lalter.`;

          this.disable_login = true;

          // Store login data to firestore
        }
        else {
          this.error_text = 'Wrong username or password';
        }

      }


    }
    else {
      // show snackbar
      this.ShowSnackbar('Please fill all the required fields', 2500, 'center', 'bottom');
    }


  }

  ShowSnackbar(message: string, duration: number, horizontalPosition: any, verticalPosition: any) {
    this.snackBar.open(message, "Dismiss", {
      duration: duration,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition
    });
  }


  MarkFeedbackAsRead(feedback: Feedback) {
    this.feedbackService.markAsRead(feedback);
  }

  MarkFeedbackAsUnRead(feedback: Feedback) {
    this.feedbackService.markAsUnread(feedback)
  }

  DeleteFeedback(feedback: Feedback) {
    this.feedbackService.delete_A_Feedback(feedback);
  }



}
