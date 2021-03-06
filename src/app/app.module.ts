import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';
import {AppRoutingModule} from './app-routing.module';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AngularComponent } from './angular/angular.component';
import {UserService} from './user.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { MydatePipe } from './mydate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HomeComponent,
    JqueryComponent,
    AngularComponent,
    HighlightDirective,
    MydatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, // ngModel을 사용하기 위해
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
