import { Component } from '@angular/core';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonInput, 
  IonItem, 
  IonButton 
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    HeaderComponent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonInput, 
    IonItem, 
    IonButton, 
    ExploreContainerComponent
  ],
})
export class Tab1Page {
  d: number = 0;

  calculate(a1: any, b1: any, c1: any) {
    try {
      // Конвертація введених значень у числа
      let a = parseFloat(a1);
      let b = parseFloat(b1);
      let c = parseFloat(c1);

      // Валідація введених значень
      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error("Parameter is not a number!");
      }

      // Умова: якщо всі числа непарні
      if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) {
        this.d = a * b * c; // Обчислюємо добуток
      } else {
        // Обчислюємо суму
        let sum = a + b + c;

        // Обчислюємо суму цифр суми
        let sumOfDigits = sum
          .toString()
          .split("")
          .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

        // Якщо сума цифр непарна
        if (sumOfDigits % 2 !== 0) {
          this.d = Math.pow(sum, 3); // Обчислюємо куб суми
        } else {
          this.d = 0; // Якщо жодна умова не виконується
        }
      }
    } catch (error) {
      this.d = 0; // У випадку помилки
      console.log(error);
    }
  }

  constructor() {}
}

