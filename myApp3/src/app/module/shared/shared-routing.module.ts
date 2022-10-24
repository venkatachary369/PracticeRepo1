import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstCompComponent } from '../components/first-comp/first-comp.component';
import { SecondCompComponent } from '../components/second-comp/second-comp.component';


const routes: Routes = [
  {path:'',component:FirstCompComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }