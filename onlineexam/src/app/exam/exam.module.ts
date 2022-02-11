import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamformComponent } from './components/examform/examform.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ExamformComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[ExamformComponent]
})
export class ExamModule { }
