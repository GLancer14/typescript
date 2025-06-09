import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculateFinalPrice(): number {
      return [...this._items].reduce((acc, item) => acc + item.price, 0);
    }

    calculateFinalPriceWithDiscount(discount: number): number {
      const priceWithoutDiscount = this.calculateFinalPrice();
      const discountAmount = Number((priceWithoutDiscount * discount / 100).toFixed(2));
      return priceWithoutDiscount - discountAmount;
    }

    delete(id: number): void {
      this._items = this._items.filter(item => item.id !== id);
    }
}