import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IconNetworkComponent } from './components/icon-network/icon-network.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconUserComponent } from './components/icon-user/icon-user.component';
import { PortfolioHeaderComponent } from './components/portfolio-header/portfolio-header.component';
import { InstitutionComponent } from './components/institution/institution.component';
import { BtnInterestComponent } from './components/btn-interest/btn-interest.component';
import { BtnAddsectionComponent } from './components/btn-addsection/btn-addsection.component';
import { BtnMasComponent } from './components/btn-mas/btn-mas.component';
import { AboutComponent } from './components/about/about.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { ExperienceEducationComponent } from './components/experience-education/experience-education.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsItemComponent } from './components/skills-item/skills-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconNetworkComponent,
    IconUserComponent,
    PortfolioHeaderComponent,
    InstitutionComponent,
    BtnInterestComponent,
    BtnAddsectionComponent,
    BtnMasComponent,
    AboutComponent,
    EducationItemComponent,
    ExperienceEducationComponent,
    ExperienceItemComponent,
    ProjectsComponent,
    SkillsComponent,
    SkillsItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
