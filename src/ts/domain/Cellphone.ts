import Buyable from './Buyable';

export default class Cellphone implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly screenSize: number,
        readonly storageCapacity: number,
        readonly os: string,
    ) { }
}