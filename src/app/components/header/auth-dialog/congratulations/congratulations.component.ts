import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../../../../core/interfaces/user.interface';



@Component({
  selector: 'app-congratulations',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './congratulations.component.html',
  styleUrl: './congratulations.component.scss'
})
export class CongratulationsComponent {

  constructor(public dialogRef: MatDialogRef<CongratulationsComponent>){}

  closeDialog(){
    this.dialogRef.close({})
  }
}
