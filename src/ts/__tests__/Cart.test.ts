import Cart from '../service/Cart';
import Movie from '../domain/Movie';

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