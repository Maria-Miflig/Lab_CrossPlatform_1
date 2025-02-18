import { Component, OnInit, Input} from '@angular/core' ;
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons, 
} from '@ionic/angular/standalone'; 

@Component({ 
  selector: 'app-header', 
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.scss'], 
  standalone: true, 
  imports: [IonButtons, IonHeader, IonToolbar, IonTitle, IonContent], 
  })

export class HeaderComponent implements OnInit { 
  @Input() name: string = 'Лабораторні роботи'; 
  constructor() {}
  ngOnInit() {}
  }