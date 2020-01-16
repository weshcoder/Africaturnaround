import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { FooterComponent } from './footer/footer.component';
import { JobsConsoltunciesComponent } from './jobs-consoltuncies/jobs-consoltuncies.component';
import { PartnersComponent } from './partners/partners.component';
import { Solution1Component } from './solution1/solution1.component';
import { Solution3Component } from './solution3/solution3.component';
import { BusinessDevelopmentComponent } from './business-development/business-development.component';
import { WezeshaComponent } from './wezesha/wezesha.component';
import { SliderComponent } from './slider/slider.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProjectsComponent,
    LandingPageComponent,
    LandingPageComponent,
    AboutComponent,
    OpportunitiesComponent,
    FooterComponent,
    JobsConsoltunciesComponent,
    PartnersComponent,
    Solution1Component,
    Solution3Component,
    BusinessDevelopmentComponent,
    WezeshaComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: LandingPageComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'opportunities', component: OpportunitiesComponent},
      {path: 'twalisha-martket', component: Solution3Component},
      {path: 'partners', component: PartnersComponent},
      {path: 'value-chain-market-systems', component: Solution1Component},
      {path: 'twalisha-sme-incubator', component: BusinessDevelopmentComponent},
      {path: 'twalisha-farmer', component: WezeshaComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      // {path: '**', component: PageNotFoundComponent}
    ]),
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
