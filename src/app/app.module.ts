import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProjectsComponent,
    LandingPageComponent,
    LandingPageComponent,
    AboutComponent,
    SolutionsComponent,
    OpportunitiesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: LandingPageComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'solutions', component: SolutionsComponent},
      {path: 'opportunities', component: OpportunitiesComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      // {path: '**', component: PageNotFoundComponent}
    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
