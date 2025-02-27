import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { MobileDevice } from '../class/Abstract/MobileDevice';
import { MobileDeviceFactory } from '../class/Abstract/MobileDeviceFactory';


@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
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
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonList,
    IonLabel,
    IonSelect,
    IonSelectOption,
  ],
})


export class AbstractClassPage implements OnInit {
  data: any = []; // масив з даними
  devices: MobileDevice[] = []; // масив для зберігання пристроїв
  dataUrl = 'https://api.jsonbin.io/v3/b/67c08b97ad19ca34f813985f'; 
  topDevices: MobileDevice[] = []; // масив для зберігання трьох пристроїв з найбільшою ємністю батареї

  ngOnInit(): void {
    this.load();
  }

  async load() {
    this.data = [];
    this.devices = [];
    this.topDevices = [];
  
    try {
      const response = await fetch(this.dataUrl);
      const json = await response.json();
      this.data = json.record;
  
      for (let i = 0; i < this.data.length; i++) {
        const deviceData = this.data[i];
  
        console.log('Тип пристрою:', deviceData.type);
  
        const extraFeature = deviceData.cameraResolution ? deviceData.cameraResolution : deviceData.screenSize;
        
        const device = MobileDeviceFactory.getMobileDevice(
          deviceData.type, 
          deviceData.brand,
          deviceData.batteryCapacity,
          deviceData.weight,
          extraFeature
        );
  
        this.devices.push(device); 
      }
  
      this.topDevices = this.findTopThreeDevices(this.devices);
  
    } catch (error) {
      console.error('Помилка завантаження даних', error);
    }
  }

  // функція для знаходження трьох пристроїв з найбільшою ємністю батареї
  findTopThreeDevices(devices: MobileDevice[]): MobileDevice[] {
    let topDevices: MobileDevice[] = [];
    
    for (let device of devices) {
      if (topDevices.length < 3) {
        topDevices.push(device);
      } else {
        const minBatteryDevice = topDevices.reduce((prev, curr) => prev.getBatteryCapacity() < curr.getBatteryCapacity() ? prev : curr);
        if (device.getBatteryCapacity() > minBatteryDevice.getBatteryCapacity()) {
          const minIndex = topDevices.indexOf(minBatteryDevice);
          topDevices[minIndex] = device;
        }
      }
    }
    return topDevices;
  }

  // функція для визначення кольору для кожного пристрою
  getDeviceColor(device: MobileDevice): string {
    return this.topDevices.includes(device) ? 'rgb(30, 119, 95)' : 'transparent';
  }
}