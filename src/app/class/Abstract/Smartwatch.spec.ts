import { Smartwatch } from "./Smartwatch";

describe('Smartwatch testing', () => {
    let smartwatch: Smartwatch;
    beforeEach(() => {
        smartwatch = new Smartwatch("Apple Watch", 300, 0.2, "Пульсометр, акселерометр, гіроскоп");
    });
    it('Створення екземпляра класу', () => {
        expect(smartwatch).toBeTruthy();
    });
    it('Створення екземпляра класу без сенсорів', () => {
        expect(() => new Smartwatch("Apple Watch", 300, 0.2, "")).toThrow(new Error('Smartwatch must have sensors'));
    });
    it('Перевірка методу displayInfo', () => {
        expect(smartwatch.displayInfo()).toBe(
            'Бренд:Apple Watch<br>Ємність батареї:300<br>Вага:0.2<br>Сенсори:Пульсометр, акселерометр, гіроскоп'
        );
    });
});
