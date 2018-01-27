import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MatButtonModule, MatCardContent, MatCardModule, MatPaginatorModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {AdminService} from './admin.service';
import { ViewComponent } from './news/view/view.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule
  ],
  declarations: [AdminComponent, HomeComponent, NewsComponent, ViewComponent],
  providers: [AdminService]
})
export class AdminModule { }
