export class Subject {
    priceForOne: number;
    name: string;
    unitOfMeasure: string;
    quantity: number;

    constructor(priceForOne: number, name: string, unitOfMeasure: string, quantity: number){
        this.priceForOne = priceForOne;
        this.name = name;
        this.unitOfMeasure = unitOfMeasure;
        this.quantity = quantity;
    }

    increaseQuantityByOne() {
        this.quantity++;
    }

    decreaseQuantityByOne() {
        this.quantity--;
    }

    getTotalPrice(): number {
        return this.priceForOne * this.quantity;
    }
}