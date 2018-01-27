import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {NewsComponent} from './news/news.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: '', component: HomeComponent},  // /admin
      { path: 'news', component: NewsComponent} // /admin/news
    ]},
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
exports: [ RouterModule ]
})
export class AdminRoutingModule {}
