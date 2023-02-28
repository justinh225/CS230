import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './Home/home.component';
import { NowAvailableOnSteamComponent } from './SideBarRouting/now-available-on-steam.component';
import { Support } from './TopNavBarRouting/support.component';
import { Tags } from './SideBarRouting/tags.component';
import { TopSellers } from './SideBarRouting/top-sellers.component';
import { NewReleases } from './SideBarRouting/new-releases.component';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'Now-Available-On-Steam', component: NowAvailableOnSteamComponent},
  {path: 'Home', component: Home},
  {path: 'Support', component: Support},
  {path: 'Tags', component: Tags},
  {path: 'Top-Sellers', component: TopSellers},
  {path: 'New-Releases', component: NewReleases}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
