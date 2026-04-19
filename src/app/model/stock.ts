export class Stock {
  favorite: boolean = false;
  sale: boolean = false;
  quantityInCart = 0;
  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousProce: number,
    public img: string,
  ) {}

  isPositiveChange(): boolean {
    return this.price >= this.previousProce;
  }
  isOnSale(): boolean {
    return (this.sale = true);
  }
  incrementInCard() {
    this.quantityInCart++;
  }
  decrimentInCard() {
    if (this.quantityInCart > 0) {
      this.quantityInCart--;
    }
  }
}
