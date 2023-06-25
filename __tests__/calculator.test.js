import calculator from '../calculator.js'; // Сделал обычный импорт через дефолтное значение, но если будет что-то меняться, то потом надо исправить

test('Тестирование базового функционала', () => {
  expect(calculator(11, 7, '+')).toBe(18);
  expect(calculator(22, 2, '/')).toBe(11);
  expect(calculator(11, 7, '-')).toBe(4);
  expect(calculator(22, 2, '*')).toBe(44);
});

test('Тестирование исключений', () => {
  expect(calculator(11, 0, '/')).toBe("Look at what you've done"); // Деление на ноль должно возвращать неопределенное значение
})