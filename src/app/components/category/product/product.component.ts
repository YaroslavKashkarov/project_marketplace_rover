import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from "../product";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  @Input()product: Product
}
