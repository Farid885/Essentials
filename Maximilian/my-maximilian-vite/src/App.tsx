import { useState } from "react";
import { EXAMPLES } from "./dataExample";
import { Person } from "./test/Person";
import ProductView from "./test/ProductView";

// type CategoryTypes = "components" | "jsx" | "props" | "state";
type CategoryTypes = keyof typeof EXAMPLES;

function App() {
  const [category, setCategory] = useState<CategoryTypes | undefined>();

  const person = new Person("Farid", "Z");
  // person.firstName = "Farid";
  // person.lastName = "Z";
  person.printFullName();

  const handleClick = (buttontext: CategoryTypes) => {
    setCategory(buttontext);
    console.log(category);
  };

  return (
    <ProductView />
    // <div id="app">
    //   <h1>Available Experts</h1>

    //   <button
    //     onClick={() => {
    //       handleClick("components");
    //     }}
    //   >
    //     components
    //   </button>
    //   <button onClick={() => handleClick("jsx")}>jsx</button>
    //   <button
    //     onClick={() => {
    //       handleClick("props");
    //     }}
    //   >
    //     props
    //   </button>
    //   <button
    //     onClick={() => {
    //       handleClick("state");
    //     }}
    //   >
    //     state
    //   </button>

    //   {category && (
    //     <div>
    //       <h1>{category}</h1>
    //       <p>{EXAMPLES[category]?.title}</p>
    //       <p>{EXAMPLES[category]?.description}</p>
    //       <p>{EXAMPLES[category]?.code}</p>
    //       {/* <p>{EXAMPLES[count].code}</p> */}
    //     </div>
    //   )}
    // </div>
  );
}

export default App;
