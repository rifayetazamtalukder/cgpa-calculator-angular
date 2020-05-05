import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { HelpPageComponent } from './help-page/help-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CgpaCalculatorComponent } from './cgpa-calculator/cgpa-calculator.component';


const routes: Routes = [
  // Routing goes here
  // 
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'calculate-cgpa',
    component: CgpaCalculatorComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'help',
    component: HelpPageComponent
  },

  // 
  // This wild card routing must be at the bottom of this routes
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
