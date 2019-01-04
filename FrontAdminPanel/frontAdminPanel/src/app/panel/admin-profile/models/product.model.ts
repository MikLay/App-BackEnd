export class Product {
  name: string;
  price: number;
  image_url: string;
  description: string;
  category: string;
  special_price: number;

  constructor(name: string, price: number, image_url: string,  description: string, category: string, special_price: number) {
    this.name = name;
    this.price = price;
    this.image_url = image_url;
    this.description = description;
    this.category = category;
    this.special_price = special_price;
  }
}
