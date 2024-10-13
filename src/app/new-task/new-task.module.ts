import { Component, Inject } from '@angular/core';
import { MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {


}

@NgModule({
  declarations: [NewTaskComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ]
})
export class NewTaskModule { }
