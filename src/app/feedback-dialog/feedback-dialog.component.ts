import { Component, OnInit } from '@angular/core';
import { Feedback } from '../interfaces/feedback';
import { FeedbackService } from '../services/feedback.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';



//#region Instant Errors Using ErrorStateMatcher
export class FeedbackErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;

    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
//#endregion Instant Errors Using ErrorStateMatcher






@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit {

  // feedback
  private _feedback: Feedback = {
    // id: '', // id dosen't required here
    username: '',
    title: '',
    description: '',
    datetime: null
  };

  // Error State Matcher
  feedback_errorStateMatcher = new FeedbackErrorStateMatcher();
  public is_feedback_added = false;
  public feedback_form_min_max = {
    username: { minLength: 5, maxLength: 50 },
    title: { minLength: 20, maxLength: 200 },
    description: { minLength: 20, maxLength: 1450 },
  };


  public feedback_form = this.formBuilder.group({
    username: ['', [
      Validators.required,
      Validators.pattern('^[a-zA-Z .]+'), //a to z, A to Z, space, dot are allowed
      Validators.minLength(this.feedback_form_min_max.username.minLength),
      Validators.maxLength(this.feedback_form_min_max.username.maxLength),
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    title: ['', [
      Validators.required,
      Validators.minLength(this.feedback_form_min_max.title.minLength),
      Validators.maxLength(this.feedback_form_min_max.title.maxLength)
    ]],
    description: ['', [
      Validators.required,
      Validators.minLength(this.feedback_form_min_max.description.minLength),
      Validators.maxLength(this.feedback_form_min_max.description.maxLength),
    ]],
    datetime: [{
      value: new Date(),
      disabled: true
    }],
    read: [false]
  });

  get username() {
    return this.feedback_form.get('username');
  }
  get email() {
    return this.feedback_form.get('email');
  }
  get title() {
    return this.feedback_form.get('title');
  }
  get description() {
    return this.feedback_form.get('description');
  }
  get datetime() {
    return this.feedback_form.get('datetime');
  }
  get read() {
    return this.feedback_form.get('read');
  }

  // Constructor
  constructor(
    private feedbackService: FeedbackService,
    public snackBar: MatSnackBar,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FeedbackDialogComponent>
  ) { }

  ngOnInit() {
    this.is_feedback_added = false;
  }

  SubmitFeedback() {
    // add feedback
    // this.feedbackService.addfeedback(this.feedback);
    // this.is_feedback_added = true;

    // TODO: take form fields value and add the feedback
    // this.feedbackService.addfeedback(form field values);

    if (this.feedback_form.valid) {

      // Add the feedback in firestore
      this._feedback = {
        // id: '', // id dosen't required here
        username: this.username.value,
        email: this.email.value,
        title: this.title.value,
        description: this.description.value,
        datetime: this.datetime.value,
        read: this.read.value
      };
      // console.log(this._feedback);

      this.feedbackService.addfeedback(this._feedback);

      // Show confermation message
      this.snackBar.open('Thank You for your feedback', "Dismiss", {
        duration: 2500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });


      // Close the dialog
      this.dialogRef.close();

    }
    else {
      this.snackBar.open('Please fill all the required fields', "Dismiss", {
        duration: 2500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
    }


  }

}
