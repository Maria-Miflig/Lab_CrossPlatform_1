import { MobileDevice } from "./MobileDevice";
export class Smartphone extends MobileDevice {
    constructor(
        override brand: string,
        override batteryCapacity: number,
        override weight: number,
        public cameraResolution: number
    ) {
        super(brand, batteryCapacity, weight);
        if (cameraResolution <= 0) throw new Error('Camera resolution must be positive');
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
            'Роздільна здатність камери:'+
            this.cameraResolution
        );

    }
}
