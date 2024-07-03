import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { BasketService } from './basket.service';
import { IProduct } from '../../category/product.interface';
import { IOrderProduct } from '../../../../core/interfaces/order-product';
import { DialogService } from '../../services/dialog.service';
import { OrderProductComponent } from './order-product/order-product.component';
import { LoaderComponent } from '../../common-components/loader/loader.component';


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
  imports: [CommonModule, RouterLink, OrderProductComponent, LoaderComponent]
})
export class ShoppingCartComponent implements OnInit {

  isLoading: boolean = false;
  groupedProducts: { sellerId: string, products: any[] }[] = [];

  constructor(
    private basketService: BasketService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.processData();

  }

  processData() {
    this.isLoading = true;

    this.basketService.getBasketProducts().subscribe(
      res => {
        if (res)
        this.groupedProducts = this.groupBySeller(res);
        this.isLoading = false;
      }
    )
  }

  groupBySeller(data: any[]): { sellerId: string, products: any[] }[] {
    const map = new Map<string, any[]>();

    data.forEach(product => {
      const sellerId = product.sellerId;
      if (!map.has(sellerId)) {
        map.set(sellerId, []);
      }
      map.get(sellerId)?.push(product);
    });

    return Array.from(map, ([sellerId, products]) => ({ sellerId, products }));
  }

  navigateWithState(sellerId: string) {
    this.router.navigate(['shopping-cart/checkout'], { state: { sellerId: sellerId } });
  }



}
