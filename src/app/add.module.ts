import { Component, NgModule } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatDialogClose,MatDialogTitle,MatDialogModule,ReactiveFormsModule,
    MatTableModule,Component, MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  ]
})
export class AddModule {

}
