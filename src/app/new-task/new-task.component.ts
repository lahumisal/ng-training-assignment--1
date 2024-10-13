import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Component } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    MatFormFieldModule, MatInputModule, MatIconModule,
    MatDatepickerModule,EditComponent,
    MatSelectModule, TextFieldModule,
    ReactiveFormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  assignedaddTask: FormGroup;

  constructor(private _fb: FormBuilder, private dialog: MatDialog) {
    this.assignedaddTask = this._fb.group({
      assignedTo: '',
      status: '',
      Date: '',  // This should match the formControlName in your HTML
      Priority: '', // This should match the formControlName in your HTML
      message: '', // This should match the formControlName in your HTML
    });
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  onFormSubmit() {
    if (this.assignedaddTask.valid) {
      console.log(this.assignedaddTask.value);
      this.closeModal(); // Close modal after form submission
    } else {
      console.error('Form is invalid');
    }
  }
}
