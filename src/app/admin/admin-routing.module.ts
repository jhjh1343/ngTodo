import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {NewsComponent} from './news/news.component';
import {HomeComponent} from './home/home.component';
import {ViewComponent} from './news/view/view.component';
import {WriteComponent} from './news/write/write.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
      { path: '', component: HomeComponent},  // /admin
      { path: 'news', component: NewsComponent, children: [ // /admin/news
          { path: 'view/:news_id', component: ViewComponent}, // /admin/news/view  queryParam : ccc?a= , urlParam: ccc/:1
          { path: 'write', component: WriteComponent}
        ]}
    ]},
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
exports: [ RouterModule ]
})
export class AdminRoutingModule {}
