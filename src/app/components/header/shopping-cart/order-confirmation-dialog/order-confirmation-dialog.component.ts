import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LottieComponent, AnimationOptions } from 'ngx-lottie';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-order-confirmation-dialog',
  standalone: true,
  imports: [CommonModule, LottieComponent],
  templateUrl: './order-confirmation-dialog.component.html',
  styleUrl: './order-confirmation-dialog.component.scss',
})
export class OrderConfirmationDialogComponent {
  orderNumber: string;

  options: AnimationOptions = {
    path: '/assets/animation.json',
  };

  constructor(
    public dialogRef: MatDialogRef<OrderConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.orderNumber = data.orderNumber;
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
