import { Smartphone } from "./Smartphone";

describe('Smartphone testing', () => {
    let smartphone: Smartphone;
    beforeEach(() => {
        smartphone = new Smartphone("Iphone", 100, 0.5, 48);
    });
    it('Створення екземпляра класу', () => {
        expect(smartphone).toBeTruthy;
    });
    it('Створення екземпляра класу без бренда', () => {
        expect(() => new Smartphone("", 100, 0.5, 48)).toThrow(new Error('Brand is required'));
    });
    it('Створення екземпляра класу з від\'ємною ємністю акамулятора', () => {
        expect(() => new Smartphone("Iphone", -100, 0.5, 48)).toThrow(new Error('Battery capacity must be positive'));
    });
    it('Створення екземпляра класу з від\'ємною вагою', () => {
        expect(() => new Smartphone("Iphone", 100, -0.5, 48)).toThrow(new Error('Weight must be positive'));
    });
    it('Створення екземпляра класу з від\'ємною роздільною здтністю камери', () => {
        expect(() => new Smartphone("Iphone", 100, 0.5, -12)).toThrow(new Error('Camera resolution must be positive'));
    });
    it('Перевірка методу displayInfo', () => {
        expect(smartphone.displayInfo()).toBe('Бренд:Iphone<br>Ємність батареї:100<br>Вага:0.5<br>Роздільна здатність камери:48');
    });
});