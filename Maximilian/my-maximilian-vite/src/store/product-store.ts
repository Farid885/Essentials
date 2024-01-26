import { makeAutoObservable } from "mobx";

interface Product {
  id: number;
  name: string;
  price: number;
}

export class ProductStore {
  constructor() {
    // Class-daki deyisikliklere nezaret etmek ucun
    makeAutoObservable(this);
  }

  items: Product[] = [];

  setItems(val: Product[]) {
    this.items = val;
  }

  removeItem = (id: number) => {
    const itemsWithoutDeleted = this.items.filter((it) => it.id !== id);
    this.setItems(itemsWithoutDeleted);
  };

  addItem = (val: Product) => {
    // this.setItems([...this.items, val]);
    this.items = [...this.items, val];
  };

  getItems = async () => {
    const data: Product[] = [
      {
        id: 1702215264403,
        name: "Product8.301525958604385",
        price: 303.3193632765533,
      },
      {
        id: 1702215265315,
        name: "Product1.437260410808714",
        price: 102.06160223482274,
      },
    ];
    this.setItems(data);
  };
}
