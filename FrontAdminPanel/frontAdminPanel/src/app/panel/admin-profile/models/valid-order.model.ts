export class ValidOrder {
  id: 'string';
  name: 'string';
  phone: 'string';
  email: 'string';
  products: {};

  constructor(id: 'string',  name: 'string',  phone: 'string',  email: 'string', products: {}) {
    this.id = id;
    this.name = name;
   this.phone = phone;
   this.email = email;
   this.products = products;
  }
}
