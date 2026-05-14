export class Stock {
  favorite: boolean = false;
  quantityInCart = 0;
  constructor(
    public BookName: string,
    public Code: string,
    public price: number,
    public img: string,
  ) {}
}
