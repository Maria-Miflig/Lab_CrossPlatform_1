import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { IonToolbar, 
  IonTitle, 
  IonContent, 
  IonHeader,
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonInput, 
  IonItem, 
  IonButton,
  IonGrid, 
  IonRow, 
  IonCol } from '@ionic/angular/standalone';  

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
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
    IonGrid,    
    IonRow,     
    IonCol,     
    CommonModule,
    ExploreContainerComponent],
})
export class Tab3Page {
  a:any;

  arraycalc(n1:any){
    try{
      let n = parseFloat(n1);
      if(isNaN(n)==true){
        throw new Error ('Parameter is not a number');   
      }
      if (n<=0){
        throw new Error('Parameter less than zero')
      }
      
      this.a = Array(n);
      console.log('Array created');
      
      for (let i = 0; i < n; i++) {
        this.a[i] = Array(n);
        for (let j = 0; j < n; j++) {
          let aa: number = (Math.random() * 20 - 10); 
          this.a[i][j] = parseInt(aa.toFixed(2));
        }  
      }
    }  catch (error){
      console.log(error);
    }
  }

  getColor(i:number, j:number, b:number){
    
    if (i == j && b % 2 === 0) {
      return 'lightgreen';  
    }
    return 'white'; 
  }

  constructor() {}
}
