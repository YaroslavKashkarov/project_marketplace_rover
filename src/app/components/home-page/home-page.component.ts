import {Component} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CarouselComponent} from './carousel/carousel.component'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, CarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {

}
