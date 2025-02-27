import { MobileDevice } from './MobileDevice';
import { Tablet } from './Tablet';
import { Smartphone } from './Smartphone';


export class MobileDeviceFactory {
    public static getMobileDevice(
        type: string, 
        brand: string,
        batteryCapacity: number,
        weight: number,
        extraFeature: number 
    ): MobileDevice {
        
        if (type == 'Smartphone') {
            return new Smartphone(brand, batteryCapacity, weight, extraFeature);
        } else if (type == 'Tablet') {
            return new Tablet(brand, batteryCapacity, weight, extraFeature);
        } else {
            console.error('Невідомий девайс:', type); 
            throw new Error('Невідомий девайс');
        }
    }
}
