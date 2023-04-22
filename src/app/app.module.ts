import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IconNetworkComponent } from './components/icon-network/icon-network.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconUserComponent } from './components/icon-user/icon-user.component';
import { PortfolioHeaderComponent } from './components/portfolio-header/portfolio-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconNetworkComponent,
    IconUserComponent,
    PortfolioHeaderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
