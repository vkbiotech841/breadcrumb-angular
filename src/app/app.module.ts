import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { FirstChildComponent } from './parent-component/first-child/first-child.component';
import { SecondChildComponent } from './parent-component/second-child/second-child.component';
import { ThirdChildComponent } from './parent-component/third-child/third-child.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponentComponent,
    FirstChildComponent,
    SecondChildComponent,
    ThirdChildComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
