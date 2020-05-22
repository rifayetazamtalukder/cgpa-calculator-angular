import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; // Don't Need


// Material Modules
import { MatSidenavModule } from "@angular/material/sidenav";

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatIconModule } from "@angular/material/icon";

import { MatButtonModule } from "@angular/material/button";

import { MatMenuModule } from "@angular/material/menu";

import { MatDividerModule } from "@angular/material/divider";

import { MatTooltipModule } from "@angular/material/tooltip";

import { MatSnackBarModule } from "@angular/material/snack-bar";

import { MatInputModule } from "@angular/material/input";

import { MatFormFieldModule } from "@angular/material/form-field";

import { MatCardModule } from "@angular/material/card";

import { MatCheckboxModule } from "@angular/material/checkbox";

import { MatRadioModule } from "@angular/material/radio";

import { MatListModule } from "@angular/material/list";

// import { MatStepperModule } from "@angular/material/stepper";

import { MatTabsModule } from "@angular/material/tabs";

import { MatSelectModule } from "@angular/material/select";

import { MatTableModule } from '@angular/material/table';

import { MatButtonToggleModule } from "@angular/material/button-toggle";

import { MatDialogModule } from '@angular/material/dialog';



const MATERIAL_COMPONENTS = [
  MatSidenavModule,

  MatToolbarModule,

  MatIconModule,

  MatButtonModule,

  MatMenuModule,

  MatDividerModule,

  MatTooltipModule,

  MatSnackBarModule,

  MatInputModule,

  MatFormFieldModule,

  MatCardModule,

  MatCheckboxModule,

  MatRadioModule,

  MatListModule,

  // MatStepperModule,

  MatTabsModule,

  MatSelectModule,

  MatTableModule,

  MatButtonToggleModule,

  MatDialogModule
];


@NgModule({
  declarations: [],
  imports: [
    MATERIAL_COMPONENTS
  ],
  exports: [
    MATERIAL_COMPONENTS
  ]
})
export class MaterialModulesModule { }
