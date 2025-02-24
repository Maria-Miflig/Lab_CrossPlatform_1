import { Product } from "./Product"; 

export class ProductList {
  products: Product[] = [];

  addProduct(p: Product) {
    this.products.push(p);
  }

  getCategoryStock(): { category: string; totalStock: number }[] {
    const categoryStockMap = this.products.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + product.stock;
      return acc;
    }, {} as { [key: string]: number });

    return Object.keys(categoryStockMap).map(category => ({
      category,
      totalStock: categoryStockMap[category],
    }));
  }
}
