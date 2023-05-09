import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IconNetworkComponent } from './components/icon-network/icon-network.component';
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
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { PersonaComponent } from './components/persona/persona.component';
import { SkillItemComponent } from './components/skill-item/skill-item.component';
import { ProyectoItemComponent } from './components/proyecto-item/proyecto-item.component';
import { LogginComponent } from './components/loggin/loggin.component';

const appRoutes: Routes =[
  {path: '', component:PersonaComponent},
  {path:'login',component:LogginComponent}
]

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
    SkillsItemComponent,
    IconEditComponent,
    IconDeleteComponent,
    PersonaComponent,
    SkillItemComponent,
    ProyectoItemComponent,
    LogginComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
