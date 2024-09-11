
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUser } from '../../../../core/interfaces/user.interface';


@Component({
  selector: 'app-user-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-icon.component.html',
  styleUrl: './user-icon.component.scss'
})
export class UserIconComponent implements OnInit{

  @Input()
  user: IUser;

  initials: string;

  ngOnInit(): void {
    this.initials = this.getInithials(this.user.firstName, this.user.lastName);
  }

  getInithials(firstName: string, lastName: string){
    return firstName[0] + lastName[0];
  }


}
