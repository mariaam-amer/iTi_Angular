import { Component } from '@angular/core';
import { ProductService } from '../../services/product';

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
  products: any[] = [];
  categories: any[] = [];

  constructor(private productService: ProductService) {}

   ngOnInit():void{
    this.productService.getProducts().subscribe(data=>{
      this.products=data.products;
    });

      this.productService.getCategories().subscribe(data => {
      this.categories = data; 
    });

  }
  resultFilter(category: string, search: string, price: string): void {
    this.category = category || 'All';
    this.search = search || 'None';
    this.price = price || 'None';
  }


  resetFilters(): void {
  this.category = 'All';
  this.search = 'None';
  this.price = 'None';

  // to reset filters
  const categorySelect = document.querySelector('select') as HTMLSelectElement;
  const titleInput = document.querySelector('input[type="text"]') as HTMLInputElement;
  const priceInput = document.querySelector('input[type="number"]') as HTMLInputElement;

  if (categorySelect && titleInput && priceInput) {
    categorySelect.value = 'All';
    titleInput.value = '';
    priceInput.value = '';
  }
}

}
