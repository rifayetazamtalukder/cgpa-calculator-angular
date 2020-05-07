import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorStateMatcher } from '@angular/material/core';
import { Subscription } from 'rxjs';







//#region Instant Errors Using ErrorStateMatcher
export class CGPACalculatorErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;

    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
//#endregion Instant Errors Using ErrorStateMatcher












@Component({
  selector: 'app-cgpa-calculator',
  templateUrl: './cgpa-calculator.component.html',
  styleUrls: ['./cgpa-calculator.component.css']
})
export class CgpaCalculatorComponent implements OnInit, OnDestroy {

  cgpaCalculatorErrorStateMatcher = new CGPACalculatorErrorStateMatcher();
  public private_university_selected: string = 'ewu'; // Default select for the private university
  public private_university_selected_full_name: string = 'East West University - EWU';
  public selected_university_grade;
  public gpa: number;
  public cgpa: number;
  public show_result: boolean;

  // Credit Disable boolean variables
  public isCredit_required: boolean = false;
  public isSub1Credit_required: boolean = false;
  public isSub2Credit_required: boolean = false;
  public isSub3Credit_required: boolean = false;
  public isSub4Credit_required: boolean = false;
  public isSub5Credit_required: boolean = false;
  public isSub6Credit_required: boolean = false;
  public isSub7Credit_required: boolean = false;
  public isSub8Credit_required: boolean = false;
  public isSub9Credit_required: boolean = false;
  public isSub10Credit_required: boolean = false;

  // table
  public displayedColumns: string[];
  public dataSource; // default dataSource
  //

  public cgpa_value_change: Subscription;

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.cgpa_value_change = this.gpa_cgpa_form.valueChanges.subscribe(() => {
      // toggle show result and hide result
      this.show_result = false;
    });

  }

  ngOnInit() {

    // 
    // Default Values when the component renders
    this.selected_university_grade = this.private_university_grading_policy.ewu;
    this.displayedColumns = ['mark', 'letter_grade', 'grade_point'];
    this.dataSource = this.private_university_grading_policy.ewu;
    this.show_result = false;
    this.gpa = 0;
    // 
  }

  ngOnDestroy() {
    // Unsubscribe all the subscriptions
    this.cgpa_value_change.unsubscribe();
  }




  public gpa_cgpa_form = this.formBuilder.group({
    old_cgpa: [null, [
      Validators.min(0),
      Validators.max(5.00)
    ]],
    old_credit_completed: [{ value: null, disabled: true }],

    sub1_grade: [null, [
      Validators.required
    ]],
    sub2_grade: [null],
    sub3_grade: [null],
    sub4_grade: [null],
    sub5_grade: [null],
    sub6_grade: [null],
    sub7_grade: [null],
    sub8_grade: [null],
    sub9_grade: [null],
    sub10_grade: [null],

    sub1_credit: [{
      value: null,
      disabled: true
    }],
    sub2_credit: [{
      value: null,
      disabled: true
    }],
    sub3_credit: [{
      value: null,
      disabled: true
    }],
    sub4_credit: [{
      value: null,
      disabled: true
    }],
    sub5_credit: [{
      value: null,
      disabled: true
    }],
    sub6_credit: [{
      value: null,
      disabled: true
    }],
    sub7_credit: [{
      value: null,
      disabled: true
    }],
    sub8_credit: [{
      value: null,
      disabled: true
    }],
    sub9_credit: [{
      value: null,
      disabled: true
    }],
    sub10_credit: [{
      value: null,
      disabled: true
    }],

  });

  // Getters for gpa_cgpa_form
  //#region gpa_cgpa_form getters
  get old_cgpa() {
    return this.gpa_cgpa_form.get('old_cgpa');
  }

  get old_credit_completed() {
    return this.gpa_cgpa_form.get('old_credit_completed');
  }
  // 
  // 
  get sub1_grade() {
    return this.gpa_cgpa_form.get('sub1_grade');
  }
  get sub2_grade() {
    return this.gpa_cgpa_form.get('sub2_grade');
  }
  get sub3_grade() {
    return this.gpa_cgpa_form.get('sub3_grade');
  }
  get sub4_grade() {
    return this.gpa_cgpa_form.get('sub4_grade');
  }
  get sub5_grade() {
    return this.gpa_cgpa_form.get('sub5_grade');
  }
  get sub6_grade() {
    return this.gpa_cgpa_form.get('sub6_grade');
  }
  get sub7_grade() {
    return this.gpa_cgpa_form.get('sub7_grade');
  }
  get sub8_grade() {
    return this.gpa_cgpa_form.get('sub8_grade');
  }
  get sub9_grade() {
    return this.gpa_cgpa_form.get('sub9_grade');
  }
  get sub10_grade() {
    return this.gpa_cgpa_form.get('sub10_grade');
  }
  // 
  // 
  get sub1_credit() {
    return this.gpa_cgpa_form.get('sub1_credit');
  }
  get sub2_credit() {
    return this.gpa_cgpa_form.get('sub2_credit');
  }
  get sub3_credit() {
    return this.gpa_cgpa_form.get('sub3_credit');
  }
  get sub4_credit() {
    return this.gpa_cgpa_form.get('sub4_credit');
  }
  get sub5_credit() {
    return this.gpa_cgpa_form.get('sub5_credit');
  }
  get sub6_credit() {
    return this.gpa_cgpa_form.get('sub6_credit');
  }
  get sub7_credit() {
    return this.gpa_cgpa_form.get('sub7_credit');
  }
  get sub8_credit() {
    return this.gpa_cgpa_form.get('sub8_credit');
  }
  get sub9_credit() {
    return this.gpa_cgpa_form.get('sub9_credit');
  }
  get sub10_credit() {
    return this.gpa_cgpa_form.get('sub10_credit');
  }

  //#endregion gpa_cgpa_form getters




  OnCGPA_Change() {

    // console.log(`Start: ${this.old_cgpa.value}`);

    if (this.old_cgpa.value >= 0 && this.old_cgpa.valid) {
      // Add required Validity to Old Credit
      this.old_credit_completed.setValidators([
        Validators.required,
        Validators.min(1),
        Validators.max(300),
      ]);
      this.old_credit_completed.enable();
      this.isCredit_required = true;
      //   this.old_credit_completed.updateValueAndValidity();
    }
    // this.old_cgpa.value < 0 || this.old_cgpa.value === undefined || this.old_cgpa.value === '' || this.old_cgpa.value === null
    else {

      this.Disable_and_Clear_Old_Credit_field();
      console.log(`Empty cgpa`);
    }

    // Also clear validity if value is null
    if (this.old_cgpa.value === null) {
      // console.log('Null');
      this.Disable_and_Clear_Old_Credit_field();
    }

    //  Update Validity
    this.old_credit_completed.updateValueAndValidity();

    // console.log(`End: ${this.old_cgpa.value}`);
  }

  // Disable old_credit_field
  Disable_and_Clear_Old_Credit_field() {
    this.old_credit_completed.clearValidators();

    this.gpa_cgpa_form.patchValue({
      old_cgpa: null,
      old_credit_completed: null
    });

    this.old_credit_completed.disable();
    this.isCredit_required = false;
  }


  Subject1GradeChanged() {

    // alert(`Sub1 Garde Changed: ${this.sub1_grade.value}`);

    if (this.sub1_grade.value === undefined) {
      // 
      // Clear Validity 
      // Clear Value and 
      // Disable field 
      // Set isSub1Credit_required to false of sub1_credit
      this.sub1_credit.clearValidators(); // Validity Cleared
      this.gpa_cgpa_form.patchValue({
        sub1_credit: null
      }); // Value Updated
      this.sub1_credit.disable(); // Field disabled
      this.isSub1Credit_required = false;

    }
    else {
      // 
      // Set Validity and 
      // Enable field
      // Set isSub1Credit_required to true of sub1_credit
      this.sub1_credit.setValidators([
        Validators.required
      ]); // Validity set
      this.sub1_credit.enable();
      this.isSub1Credit_required = true;
    }

    // 
    // Update Validity for sub1_credit
    this.sub1_credit.updateValueAndValidity();
    // 
  }


  // 
  Subject2GradeChanged() {

    // alert(`Sub2 Garde Changed: ${this.sub2_grade.value}`);

    if (this.sub2_grade.value === undefined) {
      // 
      // Clear Validity 
      // Clear Value and 
      // Disable field 
      // Set isSub2Credit_required to false of sub2_credit
      this.sub2_credit.clearValidators(); // Validity Cleared
      this.gpa_cgpa_form.patchValue({
        sub2_credit: null
      }); // Value Updated
      this.sub2_credit.disable(); // Field disabled
      this.isSub2Credit_required = false;

    }
    else {
      // 
      // Set Validity and 
      // Enable field
      // Set isSub2Credit_required to true of sub2_credit
      this.sub2_credit.setValidators([
        Validators.required
      ]); // Validity set
      this.sub2_credit.enable();
      this.isSub2Credit_required = true;
    }

    // 
    // Update Validity for sub2_credit
    this.sub2_credit.updateValueAndValidity();
    // 
  }
  // 
  // 

  Subject3GradeChanged() {

    // alert(`Sub3 Garde Changed: ${this.sub3_grade.value}`);

    if (this.sub3_grade.value === undefined) {
      // 
      // Clear Validity 
      // Clear Value and 
      // Disable field 
      // Set isSub3Credit_required to false of sub3_credit
      this.sub3_credit.clearValidators(); // Validity Cleared
      this.gpa_cgpa_form.patchValue({
        sub3_credit: null
      }); // Value Updated
      this.sub3_credit.disable(); // Field disabled
      this.isSub3Credit_required = false;

    }
    else {
      // 
      // Set Validity and 
      // Enable field
      // Set isSub3Credit_required to true of sub3_credit
      this.sub3_credit.setValidators([
        Validators.required
      ]); // Validity set
      this.sub3_credit.enable();
      this.isSub3Credit_required = true;
    }

    // 
    // Update Validity for sub3_credit
    this.sub3_credit.updateValueAndValidity();
    // 
  }

  // 
  // 


  Subject4GradeChanged() {

    // alert(`Sub4 Garde Changed: ${this.sub4_grade.value}`);

    if (this.sub4_grade.value === undefined) {
      // 
      // Clear Validity 
      // Clear Value and 
      // Disable field 
      // Set isSub4Credit_required to false of sub4_credit
      this.sub4_credit.clearValidators(); // Validity Cleared
      this.gpa_cgpa_form.patchValue({
        sub4_credit: null
      }); // Value Updated
      this.sub4_credit.disable(); // Field disabled
      this.isSub4Credit_required = false;

    }
    else {
      // 
      // Set Validity and 
      // Enable field
      // Set isSub4Credit_required to true of sub4_credit
      this.sub4_credit.setValidators([
        Validators.required
      ]); // Validity set
      this.sub4_credit.enable();
      this.isSub4Credit_required = true;
    }

    // 
    // Update Validity for sub4_credit
    this.sub4_credit.updateValueAndValidity();
    // 
  }


  public private_university_lists = [

    { name: 'East West University - EWU', value: 'ewu' },

    { name: 'North South University - NSU', value: 'nsu' },

    { name: 'Brac University', value: 'brac' },

    { name: 'American International University Bangladesh - AIUB', value: 'aiub' },

    { name: 'Ahsanullah University of Science & Technology - AUST', value: 'aust' },

    { name: 'United International University - UIU', value: 'uiu' },

    { name: 'Daffodil International University - DIU', value: 'diu' },

    { name: 'Independent University, Bangladesh - IUB', value: 'iub' },

    { name: 'University of Asia Pacific - UAP', value: 'uap' },

    { name: 'University of Liberal Arts Bangladesh - ULAB', value: 'ulab' },

    { name: 'International University of Business Agriculture and Technology - IUBAT', value: 'iubat' },

    { name: 'Southeast University - SU', value: 'su' },

    { name: 'Stamford University Bangladesh - SUB', value: 'sub' },

    { name: 'Bangladesh University of Business and Technology - BUBT', value: 'bubt' },

    { name: 'Asian University of Bangladesh - AUB', value: 'aub' },

    { name: 'Eastern University - EU', value: 'eu' },

    { name: 'Manarat International University - MIU', value: 'miu' },

    { name: 'Not Listed? - Add Yours', value: 'add_university' }
  ];



  public credits = [
    { credit: '-- Please Select a Credit --' },

    { credit: 1, value: 1 },
    { credit: 1.5, value: 1.5 },

    { credit: 2, value: 2 },
    { credit: 2.5, value: 2.5 },

    { credit: 3, value: 3 },
    { credit: 3.5, value: 3.5 },

    { credit: 4, value: 4 },
    { credit: 4.5, value: 4.5 },

    { credit: 5, value: 5 },
    { credit: 5.5, value: 5.5 },

    { credit: 6, value: 6 },
    { credit: 6.5, value: 6.5 },

    { credit: 7, value: 7 },
    { credit: 7.5, value: 7.5 },

    { credit: 8, value: 8 },
    { credit: 8.5, value: 8.5 },

    { credit: 9, value: 9 },
    { credit: 9.5, value: 9.5 },

    { credit: 10, value: 10 },
    { credit: 10.5, value: 10.5 },
  ];


  GetDataSource_forGradingPolicy() {
    // 
    if (this.private_university_selected === 'ewu') {
      this.selected_university_grade = this.private_university_grading_policy.ewu;
      this.dataSource = this.private_university_grading_policy.ewu;
      this.private_university_selected_full_name = 'East West University - EWU';
    }
    else if (this.private_university_selected === 'nsu') {
      this.selected_university_grade = this.private_university_grading_policy.nsu;
      this.dataSource = this.private_university_grading_policy.nsu;
      this.private_university_selected_full_name = 'North South University - NSU';
    }
    else if (this.private_university_selected === 'brac') {
      this.selected_university_grade = this.private_university_grading_policy.brac;
      this.dataSource = this.private_university_grading_policy.brac;
      this.private_university_selected_full_name = 'Brac University';
    }

    // TODO: Use MAt Snackbar Here for University Selection

    this.snackBar.open(`Showing Data for ${this.private_university_selected_full_name}`, "Dismiss", {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }


  public private_university_grading_policy = {
    ewu: [
      { letter_grade: 'A+', grade_point: 4.00, mark: '97 - 100' },
      { letter_grade: 'A', grade_point: 4.00, mark: '90 - below 97' },
      { letter_grade: 'A-', grade_point: 3.70, mark: '87 - below 90' },
      { letter_grade: 'B+', grade_point: 3.30, mark: '83 - below 87' },
      { letter_grade: 'B', grade_point: 3.00, mark: '80 - below 83' },
      { letter_grade: 'B-', grade_point: 2.70, mark: '77 - below 80' },
      { letter_grade: 'C+', grade_point: 2.30, mark: '73 - below 77' },
      { letter_grade: 'C', grade_point: 2.00, mark: '70 - below 73' },
      { letter_grade: 'C-', grade_point: 1.70, mark: '67 - below 70' },
      { letter_grade: 'D+', grade_point: 1.30, mark: '63 - below 67' },
      { letter_grade: 'D', grade_point: 1.00, mark: '60 - below 63' },
      { letter_grade: 'F', grade_point: 0.00, mark: 'below 60' },
    ],

    nsu: [
      { letter_grade: 'A', grade_point: 4.00, mark: '93 and above' },
      { letter_grade: 'A-', grade_point: 3.70, mark: '90 - 92' },
      { letter_grade: 'B+', grade_point: 3.30, mark: '87 - 89' },
      { letter_grade: 'B', grade_point: 3.00, mark: '83 - 86' },
      { letter_grade: 'B-', grade_point: 2.70, mark: '80 - 82' },
      { letter_grade: 'C+', grade_point: 2.30, mark: '77 - 79' },
      { letter_grade: 'C', grade_point: 2.00, mark: '73 - 76' },
      { letter_grade: 'C-', grade_point: 1.70, mark: '70 - 72' },
      { letter_grade: 'D+', grade_point: 1.30, mark: '67 - 69' },
      { letter_grade: 'D', grade_point: 1.00, mark: '60 - 66' },
      { letter_grade: 'F', grade_point: 0.00, mark: 'below 60' },
    ],
    brac: [
      { letter_grade: 'A', grade_point: 4.00, mark: '90 - 100' },
      { letter_grade: 'A-', grade_point: 3.70, mark: '85 - below 90' },
      { letter_grade: 'B+', grade_point: 3.30, mark: '80 - below 85' },
      { letter_grade: 'B', grade_point: 3.00, mark: '75 - below 80' },
      { letter_grade: 'B-', grade_point: 2.70, mark: '70 - below 75' },
      { letter_grade: 'C+', grade_point: 2.30, mark: '65 - below 70' },
      { letter_grade: 'C', grade_point: 2.00, mark: '60 - below 65' },
      { letter_grade: 'C-', grade_point: 1.70, mark: '57 - below 60' },
      { letter_grade: 'D+', grade_point: 1.30, mark: '55 - below 57' },
      { letter_grade: 'D', grade_point: 1.00, mark: '52 - below 55' },
      { letter_grade: 'D-', grade_point: 0.70, mark: '50 - below 52' },
      { letter_grade: 'F', grade_point: 0.00, mark: 'below 50' },
    ],
  };























  CalculateGPA_CGPA() {
    // 

    if (this.gpa_cgpa_form.valid) {
      // alert(`Form is valid`);

      // define variables
      let grades = {
        s1: 0,
        s2: 0,
        s3: 0,
        s4: 0,
        s5: 0,
        s6: 0,
        s7: 0,
        s8: 0,
        s9: 0,
        s10: 0,
      };
      let credits = {
        s1: 0,
        s2: 0,
        s3: 0,
        s4: 0,
        s5: 0,
        s6: 0,
        s7: 0,
        s8: 0,
        s9: 0,
        s10: 0,
      };
      let _old_cgpa = 0;
      let _old_credit = 0;


      // Check for undefined value
      if (this.sub1_grade.value != null) {
        // console.log(`Sub2 grade is not null`);
        grades.s1 = this.sub1_grade.value;
        credits.s1 = this.sub1_credit.value;
      }
      // 
      if (this.sub2_grade.value != null) {
        // console.log(`Sub2 grade is not null`);
        grades.s2 = this.sub2_grade.value;
        credits.s2 = this.sub2_credit.value;
      }
      // 
      if (this.sub3_grade.value != null) {
        // console.log(`Sub2 grade is not null`);
        grades.s3 = this.sub3_grade.value;
        credits.s3 = this.sub3_credit.value;
      }
      // 
      if (this.sub4_grade.value != null) {
        // console.log(`Sub2 grade is not null`);
        grades.s4 = this.sub4_grade.value;
        credits.s4 = this.sub4_credit.value;
      }
      // 
      if (this.sub5_grade.value != null) {
        // console.log(`Sub2 grade is not null`);
        grades.s5 = this.sub5_grade.value;
        credits.s5 = this.sub5_credit.value;
      }
      // 
      if (this.sub6_grade.value != null) {
        // console.log(`Sub2 grade is not null`);
        grades.s6 = this.sub6_grade.value;
        credits.s6 = this.sub6_credit.value;
      }
      // 
      if (this.sub7_grade.value != null) {
        // console.log(`Sub2 grade is not null`);
        grades.s7 = this.sub7_grade.value;
        credits.s7 = this.sub7_credit.value;
      }
      // 
      if (this.sub8_grade.value != null) {
        // console.log(`Sub2 grade is not null`);
        grades.s8 = this.sub8_grade.value;
        credits.s8 = this.sub8_credit.value;
      }
      // 
      if (this.sub9_grade.value != null) {
        // console.log(`Sub2 grade is not null`);
        grades.s9 = this.sub9_grade.value;
        credits.s9 = this.sub9_credit.value;
      }
      // 
      if (this.sub10_grade.value != null) {
        // console.log(`Sub2 grade is not null`);
        grades.s10 = this.sub10_grade.value;
        credits.s10 = this.sub10_credit.value;
      }
      // 
      if (this.old_cgpa.value != null) {
        _old_cgpa = this.old_cgpa.value;
        _old_credit = this.old_credit_completed.value;
      }



      let sum_of_credit_and_grade =
        (grades.s1 * credits.s1) +
        (grades.s2 * credits.s2) +
        (grades.s3 * credits.s3) +
        (grades.s4 * credits.s4) +
        (grades.s5 * credits.s5) +
        (grades.s6 * credits.s6) +
        (grades.s7 * credits.s7) +
        (grades.s8 * credits.s8) +
        (grades.s9 * credits.s9) +
        (grades.s10 * credits.s10);

      let sum_of_this_semesters_credit =
        credits.s1 + credits.s2 + credits.s3 + credits.s4 +
        credits.s5 + credits.s6 + credits.s7 + credits.s8 +
        credits.s9 + credits.s10;

      this.gpa = sum_of_credit_and_grade / sum_of_this_semesters_credit;


      // TODO: Calculate CGPA
      let sum_of_gpa_and_old_cgpa = (_old_cgpa * _old_credit) + (this.gpa * sum_of_this_semesters_credit);

      this.cgpa = sum_of_gpa_and_old_cgpa / (sum_of_this_semesters_credit + _old_credit);


      this.show_result = true;

    }
    else {
      // alert(`Form is INvalid`);

      this.snackBar.open(`Please fill all the required fields`, "Dismiss", {
        duration: 2500,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });

    }



    // let sum_of_credit_and_grade =
    //   ((+this.subject_grade.sub1_grade) * (+this.subject_credit.sub1_credit)) +
    //   ((+this.subject_grade.sub2_grade) * (+this.subject_credit.sub2_credit)) +
    //   ((+this.subject_grade.sub3_grade) * (+this.subject_credit.sub3_credit)) +
    //   ((+this.subject_grade.sub4_grade) * (+this.subject_credit.sub4_credit)) +
    //   ((+this.subject_grade.sub5_grade) * (+this.subject_credit.sub5_credit)) +
    //   ((+this.subject_grade.sub6_grade) * (+this.subject_credit.sub6_credit)) +
    //   ((+this.subject_grade.sub7_grade) * (+this.subject_credit.sub7_credit)) +
    //   ((+this.subject_grade.sub8_grade) * (+this.subject_credit.sub8_credit)) +
    //   ((+this.subject_grade.sub9_grade) * (+this.subject_credit.sub9_credit)) +
    //   ((+this.subject_grade.sub10_grade) * (+this.subject_credit.sub10_credit));

    // let sum_of_this_semesters_credit =
    //   (+this.subject_credit.sub1_credit) + (+this.subject_credit.sub2_credit) +
    //   (+this.subject_credit.sub3_credit) + (+this.subject_credit.sub4_credit) +
    //   (+this.subject_credit.sub5_credit) + (+this.subject_credit.sub6_credit) +
    //   (+this.subject_credit.sub7_credit) + (+this.subject_credit.sub8_credit) +
    //   (+this.subject_credit.sub9_credit) + (+this.subject_credit.sub10_credit);

    // this.gpa = sum_of_credit_and_grade / sum_of_this_semesters_credit;

    // this.show_result = true;


    // if (this.current_cgpa === undefined || this.current_cgpa === null) {
    //   this.current_cgpa = 0;
    // }

    // if (this.current_cgpa > 0) {
    //   if (isNaN(this.gpa)) {
    //     this.gpa = 0;
    //     alert("true");
    //   }

    //   let sum_of_current_gpa_and_current_cgpa =
    //     (this.current_cgpa * this.currently_credit_completed) +
    //     (this.gpa * sum_of_this_semesters_credit);

    //   let cgpa = sum_of_current_gpa_and_current_cgpa / (sum_of_this_semesters_credit + this.currently_credit_completed);

    //   alert(`Your CGPA is: ${cgpa} ${this.gpa}`);
    // }

  }

  ResetAllFields() {

  }


}
