import Validator from '../app';

test('должна проверять имя пользователя', () => {
  const expected = true;
  const received = Validator.validateUsername('Irina009_ledi-123h');
  expect(received).toBe(expected);
});
