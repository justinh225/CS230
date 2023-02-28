import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './Home/home.component';
import { NowAvailableOnSteamComponent } from './SideBarRouting/now-available-on-steam.component';

const routes: Routes = [
  {path: '', component: Home},
  {path: 'Now-Available-On-Steam', component: NowAvailableOnSteamComponent},
  {path: 'Home', component: Home}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
