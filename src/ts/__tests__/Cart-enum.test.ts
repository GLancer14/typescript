import Cart from '../service/Cart';
import Cellphone from '../domain/Cellphone';

test('add enumerable items to cart', () => {
  const cart = new Cart();
  const cellphone = new Cellphone(9982, 'iPhone 14', 54999, 6, 128, 'iOS 15');
  cart.addEnumerable(cellphone);
  cart.addEnumerable(cellphone);
  expect(cart.items[0].amount).toBe(2);
});

test('delete not last enumerable item from cart', () => {
  const cart = new Cart();
  const cellphone = new Cellphone(9982, 'iPhone 14', 54999, 6, 128, 'iOS 15');
  cart.addEnumerable(cellphone);
  cart.addEnumerable(cellphone);
  cart.deleteEnumerable(9982);
  expect(cart.items[0].amount).toBe(1);
});

test('delete last enumerable item from cart', () => {
  const cart = new Cart();
  const cellphone = new Cellphone(9982, 'iPhone 14', 54999, 6, 128, 'iOS 15');
  cart.addEnumerable(cellphone);
  cart.deleteEnumerable(9982);
  expect(cart.items).not.toContainEqual(cellphone);
});

test('delete not existing enumerable item from cart', () => {
  const cart = new Cart();
  expect(() => cart.deleteEnumerable(9982)).toThrow();
});