export interface Item {
  id: String;
  name: String;
  price: Number;
  description: String;
  status: 'ON_SALE' | 'SOLD_OUT';
}
