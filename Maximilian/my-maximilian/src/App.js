import { useState } from "react";
import { EXAMPLES } from "./dataExample";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "./SecondData";
import Header from "./Header";

import TabButton from "./TabButton";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  // const handleClick = (buttontext) => {
  //   setCount(buttontext);
  //   console.log(count);
  // };

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  const getRandom = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

  return (
    <div id="app">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concepts) => {
              return <CoreConcept key={concepts.title} {...concepts} />;
            })}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} /> */}
          </ul>
        </section>
      </main>

      <section id="examples">
        <h2>Examples</h2>

        <menu id="examplerer">
          <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>
            Components
          </TabButton>
          <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>
            Jsx
          </TabButton>
          <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>
            Props
          </TabButton>
          <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>
            State
          </TabButton>
        </menu>

        {selectedTopic ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        ) : (
          <p>Please select a topic</p>
        )}
      </section>
    </div>
  );
}

export default App;
