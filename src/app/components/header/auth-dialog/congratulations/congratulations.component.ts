import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-congratulations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './congratulations.component.html',
  styleUrl: './congratulations.component.scss'
})
export class CongratulationsComponent {
  @Output()
  closeDialogClicked = new EventEmitter<void>();

  closeDialog(){
    this.closeDialogClicked.emit();
  }
}
