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
 
      let a = parseFloat(a1);
      let b = parseFloat(b1);
      let c = parseFloat(c1);

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error("Параметри не є числами!");
      }

      // Умова: якщо всі числа непарні (3*3*3)
      if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) {
        this.d = a * b * c; 
      } else {
        let sum = a + b + c; // 3+3+6=12
        // Обчислення суми цифр суми чисел (1+2=3 непарне)
        let sumOfDigits = sum
          .toString()
          .split("")
          .reduce((acc, digit) => acc + parseInt(digit, 10), 0);
        // Якщо сума цифр непарна, обчислюється куб суми чисел (12^3)
        if (sumOfDigits % 2 !== 0) {
          this.d = Math.pow(sum, 3); 
        } else {
          this.d = 0; 
        }
      }
    } catch (error) {
      this.d = 0; 
      console.log(error);
    }
  }

  constructor() {}
}

