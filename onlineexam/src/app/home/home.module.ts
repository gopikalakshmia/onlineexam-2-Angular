import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './components/start/start.component';



@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[StartComponent]
})
export class HomeModule { }
