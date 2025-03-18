import { MobileDevice } from './MobileDevice';
import { Tablet } from './Tablet';
import { Smartphone } from './Smartphone';
import { Smartwatch } from './Smartwatch';


export class MobileDeviceFactory {
    public static getMobileDevice(
        type: string, 
        brand: string,
        batteryCapacity: number,
        weight: number,
        extraFeature: any
    ): MobileDevice {
        
        if (type == 'Smartphone') {
            return new Smartphone(brand, batteryCapacity, weight, extraFeature);
        } else if (type == 'Tablet') {
            return new Tablet(brand, batteryCapacity, weight, extraFeature);
        } else if (type == 'Smartwatch') {
            return new Smartwatch(brand, batteryCapacity, weight, extraFeature);
        } else {
            console.error('Невідомий девайс:', type); 
            throw new Error('Невідомий девайс');
        }
    }
}
