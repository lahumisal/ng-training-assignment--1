import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { CommonModule } from '@angular/common'; // Required for date pipe
import { Component } from '@angular/core';
import { DeleteComponent } from './delete/delete.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms'; // Required for ngModel in checkboxes
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox'; // Required for checkboxes
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'; // Required for dropdown menu
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewTaskComponent } from './new-task/new-task.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,
    CommonModule, // For DatePipe
    FormsModule, // For ngModel binding in checkboxes
    MatMenuModule // For dropdown menu
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'To-Do-Application';

  constructor(private dialog: MatDialog) {}

  openNewTask() {
    this.dialog.open(NewTaskComponent, {
      width: '800px',
    });
  }

  editComment() {
    this.dialog.open(EditComponent,{
      width:'800px',
    });
  }


  deleteComment() {
    this.dialog.open(DeleteComponent, {
      width: '800px',
    });
  }


  displayedColumns: string[] = ['select', 'assignedTo', 'status', 'dueDate', 'priority', 'comments'];
  dataSource = ELEMENT_DATA;

  toggleAllSelection() {
    const allSelected = this.dataSource.every(element => element.selected);
    this.dataSource.forEach(element => (element.selected = !allSelected));
  }

}

export interface PeriodicElement {
  assignedTo: string;
  status: string;
  dueDate: Date;
  priority: string;
  comments: string; // New field for comments
  selected?: boolean; // Optional to track checkbox state
}

const ELEMENT_DATA: PeriodicElement[] = [
  { assignedTo: 'User 1', status: 'Complete', dueDate: new Date(), priority: 'Low', comments: 'This task is good',  selected: false },
  { assignedTo: 'User 2', status: 'In Progress', dueDate: new Date(), priority: 'high', comments: 'This task is in progress', selected: false },
  { assignedTo: 'User 3', status: 'Not Started', dueDate: new Date(), priority: 'Low', comments: 'This task is not started', selected: false },
  { assignedTo: 'User 4', status: 'In progress', dueDate: new Date(), priority: 'Normal', comments: 'This task is in progress', selected: false },

];
