import { Tablet } from "./Tablet";

describe('Tablet testing', () => {
    let tablet: Tablet;
    beforeEach(() => {
        tablet = new Tablet("Apple iPad", 100, 0.5, 10);
    });
    it('Створення екземпляра класу', () => {
        expect(tablet).toBeTruthy;
    });
    it('Створення екземпляра класу з від\'ємним розміром екрана', () => {
        expect(() => new Tablet("Apple iPad", 100, 0.5, -12)).toThrow(new Error('Screen size must be positive'));
    });
    it('Перевірка методу displayInfo', () => {
        expect(tablet.displayInfo()).toBe('Бренд:Apple iPad<br>Ємність батареї:100<br>Вага:0.5<br>Розмір екрана:10');
    });
});