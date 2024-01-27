import React from 'react'
import TabButton from './TabButton'
import { useState } from 'react';
import { EXAMPLES } from './dataExample';

function Example() {

    const [selectedTopic, setSelectedTopic] = useState();

  // const handleClick = (buttontext) => {
  //   setCount(buttontext);
  //   console.log(count);
  // };

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
  };

  
  return (
    <>
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
    </>
  )
}

export default Example