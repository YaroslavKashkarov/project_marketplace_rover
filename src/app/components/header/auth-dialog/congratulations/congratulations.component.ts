import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../../../../core/interfaces/user.interface';
import { DialogComponentsOptions } from '../../../../../core/interfaces/dialog-components-options';

export interface ICongratulationsInfo {
  title: string;
  openComponent?: DialogComponentsOptions;
}

@Component({
  selector: 'app-congratulations',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './congratulations.component.html',
  styleUrl: './congratulations.component.scss',
})
export class CongratulationsComponent implements OnInit {
  title: string;
  openComponent?: DialogComponentsOptions;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICongratulationsInfo,
    private dialogRef: MatDialogRef<CongratulationsComponent>,
  ) {}

  ngOnInit(): void {
    this.title = this.data.title;
    this.openComponent = this.data.openComponent;
  }

  closeDialog() {
    this.dialogRef.close({
      openComponent: this.openComponent,
    });
  }
}
