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
import { NowAvailableOnSteamComponent } from './SideBarRouting/NowAvailableComponent/now-available-on-steam.component';
import { Home } from './Home/home.component';
import { Support } from './TopNavBarRouting/SupportComponent/support.component';
import { Tags } from './SideBarRouting/TagsComponent/tags.component';
import { TopSellers } from './SideBarRouting/TopSellersComponent/top-sellers.component';
import { NewReleases } from './SideBarRouting/NewReleasesComponent/new-releases.component';
import { SupportButton } from './TopNavBarRouting/SupportComponent/ButtonComponent/support-button.component';
import { SupportButtonTwo } from './TopNavBarRouting/SupportComponent/ButtonTwoComponent/support-button-two.component';
import { TagContentType } from '@angular/compiler';
import { TagsButton } from './SideBarRouting/TagsComponent/TagsButtonComponent/tags-button.component';
import { TopSellersButton } from './SideBarRouting/TopSellersComponent/TopSellersButtonComponent/top-sellers-button.component';
import { TopSellersSideButton } from './SideBarRouting/TopSellersComponent/TopSellersSideButtonComponent/side-button.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileData } from './TopNavigation/profile-bar/profile-data.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';
import { AddGame } from './Admin/admin.component';
import { FormsModule } from '@angular/forms';
import { GameCard } from './GameCard/game-card.component';
import { CarouselTwo } from './Carousels/crouseltwo/carouseltwo.component';

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
    Home,
    Support,
    Tags,
    TopSellers,
    NewReleases,
    SupportButton,
    SupportButtonTwo,
    Tags,
    TagsButton,
    TopSellersButton,
    TopSellersSideButton,
    ProfileData,
    AddGame,
    GameCard,
    CarouselTwo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
