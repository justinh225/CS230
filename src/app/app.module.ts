import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './TopNavigation/top-nav-bar/top-nav-bar.component';
import { TopNavigationTwoComponent } from './TopNavigation/top-navigation-two/top-navigation-two.component';
import { BottomNavBarComponent } from './BottomNavigation/bottom-nav-bar/bottom-nav-bar.component';
import { CarouseloneComponent } from './Carousels/carouselone/carouselone.component';
import { SideMenuComponent } from './SideMenu/side-menu/side-menu.component';
import { BrowseMenuComponent } from './BrowseMenu/browse-menu/browse-menu.component';
import { CardComponent } from './Card/card/card.component';
import { NowAvailableOnSteamComponent } from './SideBarRouting/now-available-on-steam.component';
import { Home } from './Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TopNavigationTwoComponent,
    BottomNavBarComponent,
    CarouseloneComponent,
    SideMenuComponent,
    BrowseMenuComponent,
    CardComponent,
    NowAvailableOnSteamComponent,
    Home
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
