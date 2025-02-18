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
  IonButton  } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
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
    ExploreContainerComponent]
})

export class Tab2Page {
  result: number[] = [];
  resultText: string = '';  // Текст для результату

  calculate(a1: any, b1: any) {
    try {
      // Конвертація введених значень у числа
      let a = parseInt(a1);
      let b = parseInt(b1);

      // Валідація введених значень
      if (isNaN(a) || isNaN(b)) {
        throw new Error("Parameter is not a number!");
      }

      // Ініціалізуємо масив для зберігання результатів
      this.result = [];

      // Проходимо по всіх числах в проміжку від a до b
      for (let i = a; i <= b; i++) {
        // Перевіряємо чи залишок від ділення на 6 дорівнює 3
        if (i % 6 === 3) {
          this.result.push(i); // Додаємо число в результат
        }
      }

      // Формуємо текст для результату
      if (this.result.length > 0) {
        this.resultText = this.result.map(num => {
          let integerPart = Math.floor(num / 6);  // Отримуємо цілу частину числа
          return `<li>${num} при діленні на 6 дає залишок 3, ціла частина від ділення ${integerPart}</li>`;
        }).join('');
        

      } else {
        this.resultText = 'Немає чисел, які задовольняють умову.';
      }
    } catch (error) {
      this.result = []; // Якщо сталася помилка, очищуємо результат
      this.resultText = 'Сталася помилка';
      console.log(error);
    }
  }

  constructor() {}

}


