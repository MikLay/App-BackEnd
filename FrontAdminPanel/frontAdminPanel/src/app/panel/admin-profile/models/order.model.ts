
export class OrderModel {
  id: string;
  name: string;
  phone: string;
  email: string;
  product: String[];
constructor(id: string,  name: string, phone: string, email: string, product: String[]) {
  this.id = id;
  this.name = name;
  this. phone = phone;
  this.email = email;
  this.product = product;

}


}
