export abstract class MobileDevice {
    constructor(
        public brand: string,
        public batteryCapacity: number,
        public weight: number
    ) {
        if (!brand) throw new Error('Brand is required');
        if (batteryCapacity <= 0) throw new Error('Battery capacity must be positive');
        if (weight <= 0) throw new Error('Weight must be positive');
    }

    getBatteryCapacity(): number {
        return this.batteryCapacity;
    }

    abstract displayInfo(): void;
}