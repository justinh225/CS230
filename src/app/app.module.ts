import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './TopNavigation/top-nav-bar/top-nav-bar.component';
import { TopNavigationTwoComponent } from './TopNavigation/top-navigation-two/top-navigation-two.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavigationTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
