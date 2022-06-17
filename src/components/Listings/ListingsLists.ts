import product1 from "../../assets/images/products/product_1.png";
import product2 from "../../assets/images/products/product_5.png";
import product3 from "../../assets/images/products/product_3.png";
import product4 from "../../assets/images/products/product_4.png";

export interface DataListings {
  id: number;
  img: string;
  title: string;
  price: number;
}

export const ceramics: DataListings[] = [
  { id: 0, img: product1, title: "The Dandy chair", price: 250 },
  { id: 1, img: product3, title: "Rustic Vase Set", price: 155 },
  { id: 2, img: product4, title: "The Silky Vase", price: 125 },
  { id: 3, img: product2, title: "The Lucy Lamp", price: 399 },
];
