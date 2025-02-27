import { MobileDevice } from "./MobileDevice";
export class Tablet extends MobileDevice {
    constructor(
        override brand: string,
        override batteryCapacity: number,
        override weight: number,
        public screenSize: number
    ) {
        super(brand, batteryCapacity, weight);
        if (screenSize <= 0) throw new Error('Screen size must be positive');
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
            'Розмір екрана:'+
            this.screenSize
        );

    }
}
