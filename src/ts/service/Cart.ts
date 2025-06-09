import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
      this._items.push(item);
    }

    addEnumerable(item: Buyable): void {
      const earlySelectedItem = this._items.find(value => value.id === item.id);
      if (earlySelectedItem) {
        earlySelectedItem.amount!++;
      } else {
        this.add(item);
        item.amount = 1;
      }
    }

    get items(): Buyable[] {
      return [...this._items];
    }

    calculateFinalPrice(): number {
      return [...this._items].reduce((acc, item) => {
        return item.amount ? acc + (item.price * item.amount) : acc + item.price;
      }, 0);
    }

    calculateFinalPriceWithDiscount(discount: number): number {
      const priceWithoutDiscount = this.calculateFinalPrice();
      const discountAmount = Number((priceWithoutDiscount * discount / 100).toFixed(2));
      return priceWithoutDiscount - discountAmount;
    }

    delete(id: number): void {
      this._items = this._items.filter(item => item.id !== id);
    }

    deleteEnumerable(id: number): void {
      const deletingItem = this._items.find(item => item.id === id);
      (deletingItem!.amount === 1) ? this.delete(id) : deletingItem!.amount!--;
    }
}