import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

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
  expect(cart.calculateFinalPrice()).toBe(3150);
});

test('calculate price with discount', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1011, 'Avengers', 250, 2012, 'USA', '"Avengers Assemble!"', ['fantastic tales', 'action', 'fantasy', 'adventure'], '137 min. / 02:17'));
  expect(cart.calculateFinalPriceWithDiscount(10)).toBe(2835);
});

test('delete item from cart', () => {
  const cart = new Cart();
  const cartItem = new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225);
  cart.add(cartItem);
  cart.delete(1001);
  expect(cart.items).not.toContainEqual(cartItem);
});