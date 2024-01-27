import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  constructor () {}

  closeFilter(): void {

  }
}
