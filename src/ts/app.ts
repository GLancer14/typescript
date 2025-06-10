import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Cellphone from './domain/Cellphone';

const cart = new Cart();
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1011, 'Avengers', 250, 2012, 'USA', '"Avengers Assemble!"', ['fantastic tales', 'action', 'fantasy', 'adventure'], '137 min. / 02:17'));
cart.addEnumerable(new Cellphone(9982, 'iPhone 14', 54999, 6, 128, 'iOS 15'));
cart.addEnumerable(new Cellphone(9982, 'iPhone 14', 54999, 6, 128, 'iOS 15'));
