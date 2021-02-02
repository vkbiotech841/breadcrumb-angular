import { ThirdChildComponent } from './parent-component/third-child/third-child.component';
import { SecondChildComponent } from './parent-component/second-child/second-child.component';
import { FirstChildComponent } from './parent-component/first-child/first-child.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/parent', component: ParentComponentComponent },
  { path: 'home/parent/first-child', component: FirstChildComponent },
  { path: 'home/parent/first-child/second-child', component: SecondChildComponent },
  { path: 'home/parent/first-child/second-child/third-child', component: ThirdChildComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
