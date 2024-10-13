import { MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';

import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

NgModule({
  declarations: [
    AppComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDialogTitle,
    MatDialogContent,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
  ]
})
export class EditModule { }
