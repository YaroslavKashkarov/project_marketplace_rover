import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  //   export class ProductCardComponent implements OnInit {
  //   productId: number;
  //   productData: any; // Заменить на интерфейс или модель данных
  //
  //   constructor(
  //     private route: ActivatedRoute,
  //     private productService: ProductService
  //   ) {}
  //
  //   ngOnInit(): void {
  //     this.route.params.subscribe(params => {
  //       this.productId = +params['id'];
  //       this.loadProductData(this.productId);
  //     });
  //   }
  //
  //   loadProductData(productId: number): void {
  //     // Использывать сервис productService для загрузки данных о продукте по ID
  //     this.productData = this.productService.getProduct(productId);
  //   }
  // }
}
