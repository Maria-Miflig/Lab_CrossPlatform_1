import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { LoadingController, AlertController } from '@ionic/angular'; 
import { FormsModule } from '@angular/forms';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonItem, 
  IonList,
  IonLabel,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../header/header.component'; 
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Product } from '../class/List/Product';
import { ProductList } from '../class/List/ProductList';

@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent, 
    CommonModule,
    ExploreContainerComponent,
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonItem, 
    FormsModule,
    IonList,
    IonLabel,
    IonSelect,
    IonSelectOption,
  ], 
})

export class CloudPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  productList = new ProductList();
  dataURL = 'https://api.jsonbin.io/v3/b/67bc8337acd3cb34a8eefd9f'; 
  loading: boolean = true;
  lineChart: any;

  // зберігання категорії, яку вибрано для фільтрації
  selectedCategory: string = 'All';

  //  зберігання групованих товарів
  groupedProducts: { [key: string]: Product[] } = {};

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController
  ) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.loading = true;

    fetch(this.dataURL)
      .then(response => response.json())
      .then(data => {
        const records = data.record;
        records.forEach((record: any) => {
          const newProduct = new Product(
            record.name,
            record.unit,
            record.category,
            record.stock,
            record.price_per_unit
          );
          this.productList.addProduct(newProduct);
        });

        //  групування товарів
        this.groupedProducts = this.getProductsGroupedByCategory();
        this.lineChartMethod();
        this.loading = false;
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        this.loading = false;
      });
  }

  //  групування товарів за категоріями
  getProductsGroupedByCategory() {
    return this.productList.products.reduce((acc: { [key: string]: Product[] }, product) => {
      const category = product.category || 'Uncategorized'; 
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  }

  // отримання унікальних категорій для фільтру
  getCategories() {
    return ['All', ...Object.keys(this.groupedProducts)];
  }

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    const categoryStock = this.productList.getCategoryStock();

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: categoryStock.map(item => item.category),
        datasets: [{
          label: 'Загальна кількість на складі',
          data: categoryStock.map(item => item.totalStock),
          backgroundColor: 'rgba(42, 222, 228, 0.56)',
          borderColor: 'rgb(8, 160, 158)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1
            }
          }
        }
      }
    });
  }
}
