import { MobileDeviceFactory } from './MobileDeviceFactory';
import { Smartphone } from './Smartphone';
import { Tablet } from './Tablet';
import { Smartwatch } from './Smartwatch';

describe('MobileDeviceFactory testing', () => {
    
    it('Створення смартфона', () => {
        const device = MobileDeviceFactory.getMobileDevice("Smartphone", "Samsung", 4000, 0.2, 108);
        expect(device).toBeInstanceOf(Smartphone);
        expect(device.brand).toBe("Samsung");
        expect(device.batteryCapacity).toBe(4000);
        expect(device.weight).toBe(0.2);
        expect((device as Smartphone).cameraResolution).toBe(108);
    });

    it('Створення планшета', () => {
        const device = MobileDeviceFactory.getMobileDevice("Tablet", "iPad", 7000, 0.5, 10.5);
        expect(device).toBeInstanceOf(Tablet);
        expect(device.brand).toBe("iPad");
        expect(device.batteryCapacity).toBe(7000);
        expect(device.weight).toBe(0.5);
        expect((device as Tablet).screenSize).toBe(10.5);
    });

    it('Створення смартвотча', () => {
        const device = MobileDeviceFactory.getMobileDevice("Smartwatch", "Apple Watch", 300, 0.1, "Пульсометр, гіроскоп");
        expect(device).toBeInstanceOf(Smartwatch);
        expect(device.brand).toBe("Apple Watch");
        expect(device.batteryCapacity).toBe(300);
        expect(device.weight).toBe(0.1);
        expect((device as Smartwatch).sensors).toBe("Пульсометр, гіроскоп");
    });

    it('Спроба створити невідомий пристрій', () => {
        expect(() => MobileDeviceFactory.getMobileDevice("UnknownDevice", "BrandX", 1000, 0.3, "Extra"))
            .toThrow(new Error('Невідомий девайс'));
    });

});
