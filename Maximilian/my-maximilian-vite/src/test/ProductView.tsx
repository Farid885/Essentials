import { observer } from "mobx-react-lite";
import { productStore } from "../store/store";
import { dp } from "./dp";
import { useEffect } from "react";

function ProductView() {
  function addProduct() {
    productStore.addItem({
      id: Date.now(),
      name: "Product" + Math.random() * 10,
      price: Math.random() * 500,
    });
  }

  useEffect(() => {
    productStore.getItems();
  }, []);

  return (
    <div>
      <button type="button" onClick={addProduct}>
        Add Product
      </button>
      {productStore.items.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <button
            onClick={() => {
              const stateCopy = [...productStore.items];
              const indexToModify = stateCopy.findIndex((x) => x.id === product.id);

              stateCopy[indexToModify] = {
                id: product.id,
                price: product.price,
                name: "",
              };

              productStore.setItems(stateCopy);
            }}
            type="button"
          >
            delete name
          </button>
          <h5>{product.price}</h5>
        </div>
      ))}
    </div>
  );
}
export default observer(ProductView);
