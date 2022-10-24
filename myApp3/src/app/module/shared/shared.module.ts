import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstCompComponent } from '../components/first-comp/first-comp.component';
import { SecondCompComponent } from '../components/second-comp/second-comp.component';
import {SharedRoutingModule} from './shared-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FirstCompComponent,
    SecondCompComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule
  ]
})
export class SharedModule { }
