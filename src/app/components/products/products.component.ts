import { Component } from '@angular/core';

@Component({
  selector: 'products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  category: string = 'All';
  search: string = 'None';
  price: string = 'None';

  resultFilter(category: string, search: string, price: string): void {
    this.category = category || 'All';
    this.search = search || 'None';
    this.price = price || 'None';
  }
}
