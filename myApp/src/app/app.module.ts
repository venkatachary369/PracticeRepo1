import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { YoutubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { BindingExComponent } from './binding-ex/binding-ex.component';
import { ParentExComponent } from './parent-ex/parent-ex.component';
import { ChildExComponent } from './child-ex/child-ex.component';
import { DirectivesExComponent } from './directives-ex/directives-ex.component';
import { ChangeColorDirective } from './change-color.directive';
import { YoutubeCompComponent } from './youtube-comp/youtube-comp.component';
import { PipesExComponent } from './pipes-ex/pipes-ex.component';
import { ImpureSortExPipe } from './impure-sort-ex.pipe';
import { PureSortExPipe } from './pure-sort-ex.pipe';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    BindingExComponent,
    ParentExComponent,
    ChildExComponent,
    DirectivesExComponent,
    ChangeColorDirective,
    YoutubeCompComponent,
    PipesExComponent,
    ImpureSortExPipe,
    PureSortExPipe,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    // YoutubePlayerModule
    // NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
