import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './Home/home.component';
import { NewReleases } from './SideBarRouting/NewReleasesComponent/new-releases.component';
import { NowAvailableOnSteamComponent } from './SideBarRouting/NowAvailableComponent/now-available-on-steam.component';
import { Tags } from './SideBarRouting/TagsComponent/tags.component';
import { TopSellers } from './SideBarRouting/TopSellersComponent/top-sellers.component';
import { Support } from './TopNavBarRouting/SupportComponent/support.component';
import { AddGame } from './Admin/admin.component';



const routes: Routes = [
  {path: '', component: Home},
  {path: 'Now-Available-On-Steam', component: NowAvailableOnSteamComponent},
  {path: 'Home', component: Home},
  {path: 'Support', component: Support},
  {path: 'Tags', component: Tags},
  {path: 'Top-Sellers', component: TopSellers},
  {path: 'New-Releases', component: NewReleases},
  {path: 'admin', component: AddGame}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
