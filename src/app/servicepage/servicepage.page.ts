import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabService } from '../service/tab/tab.service';
import { SeriesService } from '../service/series/series.service';
import { RecursionService } from '../service/recursion/recursion.service';
import { Chart, registerables } from 'chart.js';

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
  IonLabel,
  IonList, 
  IonButton  } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [    
    HeaderComponent, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    CommonModule,
    IonCard,
    IonLabel,
    IonList,  
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonInput, 
    IonItem, 
    IonButton, 
    ExploreContainerComponent]
})


export class ServicepagePage implements OnInit {
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput: string[] = [];
  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recursionService: RecursionService
  ) { 
    Chart.register(...registerables)
  }

  xx: string[] = [];
  yySer: number[] = [];
  yyRec: number[] = [];
  yyTab: number[] = [];


  @ViewChild('lineCanvas') private lineCavas?: ElementRef;
  lineChart: any;
  lineChartMake() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCavas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Табулювання',
            data: this.yyTab,
            fill: false,
            borderColor: '#FF007F',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 2,
            spanGaps: false,
          },
          {
            label: 'Рекурсія',
            data: this.yyRec,
            fill: false,
            borderColor: '#00FFFF',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 4,
            spanGaps: false,
          },
          {
            label: 'Ряд',
            data: this.yySer,
            fill: false,
            borderColor: '#80FF00',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 6,
            spanGaps: false,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            suggestedMin: 0,
            title: {
              display: true,
              text: 'X',
            },
            ticks: {
              stepSize: 0.001,
            }
          },
          y: {
            title: {
              display: true,
              text: 'Y',
            },
            ticks: {
              stepSize: 0.001,
            }
          }
        }
      }
    });
  }
  ras(xn: any, xk: any, h: any){
    try {
      let xn1 = parseFloat(xn),
      xk1 = parseFloat(xk),
      h1 = parseFloat(h);
      this.xx = [];
      this.yyTab = [];
      console.log('Табулювання');
      this.xyTab = this.tabService.getTabulation(xn1, xk1, h1);
      console.log('Ряд');
      this.xySeries = this.seriesService.getTabulation(xn1, xk1, h1);
      console.log('Ркурсія');
      this.xyRecursion = this.recursionService.getTabulation(xn1, xk1, h1);
      this.input();
      this.lineChartMake();
    } catch {}
  }
  input() {
    this.yyTab = new Array();
    this.yyRec = new Array();
    this.yySer = new Array();
    this.xyInput = [];
    this.xx = Array.from(this.xyTab.keys());
    this.xx.forEach((value, index) => {
      let s = '';
      let y: number = 0;
      y = this.xyTab.get(value);
      this.yyTab.push(y)
      s = s + y.toFixed(4) + '; ';
      y = this.xySeries.get(value);
      this.yySer.push(y)
      s = s + y.toFixed(4) + '; ';
      y = this.xyRecursion.get(value);
      this.yyRec.push(y)
      s = s + y.toFixed(4);
      console.log(s);
      this.xyInput.push(s);
    });
  }
  ngOnInit() {
  }

}