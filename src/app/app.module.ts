import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModulesModule } from "./material-modules/material-modules.module";

import { HttpClientModule } from "@angular/common/http"; // Needed for svgIcon

import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { HomePageComponent } from './home-page/home-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopbarWithSidenavComponent } from './topbar-with-sidenav/topbar-with-sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CgpaCalculatorComponent } from './cgpa-calculator/cgpa-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HelpPageComponent,
    AboutPageComponent,
    FooterComponent,
    PageNotFoundComponent,
    TopbarWithSidenavComponent,
    CgpaCalculatorComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,

    BrowserAnimationsModule,

    MaterialModulesModule,

    HttpClientModule,

    ReactiveFormsModule,

    FormsModule // For ngModel Directives
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
