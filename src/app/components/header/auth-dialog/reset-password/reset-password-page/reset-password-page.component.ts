import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ResetPasswordDialogComponent } from '../reset-password-dialog/reset-password-dialog.component';

@Component({
  selector: 'app-reset-password-page',
  standalone: true,
  imports: [CommonModule, RouterLink, MatDialogModule],
  templateUrl: './reset-password-page.component.html',
  styleUrl: './reset-password-page.component.scss'
})
export class ResetPasswordPageComponent implements OnInit{
  dialogRef: DialogRef<any, any>;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.router.events.pipe(
      filter(event=> event instanceof NavigationEnd)
    ).subscribe(() => {
      this.dialogRef.close();
    });    
  }

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    
    const dialogRef = this.dialog.open(ResetPasswordDialogComponent, {
      height: '530px',
      width: '530px',
      disableClose: true,
      data: {
        token: token,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.router.navigate(['/']);
    })  
  }
}
