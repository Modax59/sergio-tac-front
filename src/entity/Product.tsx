export class Product {
  id: number;

  name: string;

  href: string;

  imageSrc: string;

  imageAlt: string;

  price: string;

  color: string;

  constructor(
    id: number,
    name: string,
    href: string,
    imageSrc: string,
    imageAlt: string,
    price: string,
    color: string
  ) {
    this.id = id;
    this.name = name;
    this.href = href;
    this.imageSrc = imageSrc;
    this.imageAlt = imageAlt;
    this.price = price;
    this.color = color;
  }
}
