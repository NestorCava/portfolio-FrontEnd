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
    BtnMasComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
