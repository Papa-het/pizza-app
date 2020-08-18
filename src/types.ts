export type Pizza = {
  id: number;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export interface OrderPizza extends Pizza {
  selectedSize: number;
  selectedType: number;
}
