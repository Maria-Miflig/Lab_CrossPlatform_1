import { MobileDevice } from "./MobileDevice";
export class Smartwatch extends MobileDevice {
    constructor(
        brand: string,
        batteryCapacity: number,
        weight: number,
        public sensors: string
    ) {
        super(brand, batteryCapacity, weight);
        if (!sensors) throw new Error('Smartwatch must have sensors');
    }

    override displayInfo(): string {
        return (
            'Бренд:'+
            this.brand+
            '<br>'+
            'Ємність батареї:'+
            this.batteryCapacity+
            '<br>'+
            'Вага:'+
            this.weight+
            '<br>'+
            'Сенсори:'+
            this.sensors
        );

    }
}
