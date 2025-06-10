import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Cellphone from '../domain/Cellphone';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add new item to cart', () => {
  const cart = new Cart();
  const movieItem = new Movie(1011, 'Avengers', 250, 2012, 'USA', '"Avengers Assemble!"', ['fantastic tales', 'action', 'fantasy', 'adventure'], '137 min. / 02:17');
  cart.add(movieItem);
  expect(cart.items).toContainEqual(movieItem);
});

test('calculate price without discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1011, 'Avengers', 250, 2012, 'USA', '"Avengers Assemble!"', ['fantastic tales', 'action', 'fantasy', 'adventure'], '137 min. / 02:17'));
  cart.addEnumerable(new Cellphone(9982, 'iPhone 14', 54999, 6, 128, 'iOS 15'));
  cart.addEnumerable(new Cellphone(9982, 'iPhone 14', 54999, 6, 128, 'iOS 15'));
  expect(cart.calculateFinalPrice()).toBe(113148);
});

test('calculate price with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1011, 'Avengers', 250, 2012, 'USA', '"Avengers Assemble!"', ['fantastic tales', 'action', 'fantasy', 'adventure'], '137 min. / 02:17'));
  cart.addEnumerable(new Cellphone(9982, 'iPhone 14', 54999, 6, 128, 'iOS 15'));
  cart.addEnumerable(new Cellphone(9982, 'iPhone 14', 54999, 6, 128, 'iOS 15'));
  expect(cart.calculateFinalPriceWithDiscount(7.5)).toBe(104661.9);
});

test('delete item from cart', () => {
  const cart = new Cart();
  const cartItem = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(cartItem);
  cart.delete(1001);
  expect(cart.items).not.toContainEqual(cartItem);
});