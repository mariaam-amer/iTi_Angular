import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
  standalone: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: any[], category: string, search: string, price: string): any[] {
    if (!products) return [];

    return products.filter(product => {
      const matchesCategory =
        category === 'All' || product.category.toLowerCase().includes(category.toLowerCase());

      const matchesTitle =
        search === 'None' || product.title.toLowerCase().includes(search.toLowerCase());

      const matchesPrice =
        price === 'None' || product.price <= parseFloat(price);

      return matchesCategory && matchesTitle && matchesPrice;
    });
  }

}
