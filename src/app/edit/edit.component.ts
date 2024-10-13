import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,
    MatSelectModule,
  ], // Include required Material modules
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'], // Fix to styleUrls
})
export class EditComponent {
  constructor(private dialog: MatDialog) {}

  closeModal(): void {
    this.dialog.closeAll();
  }
}
