import React from 'react'
import { CORE_CONCEPTS } from './SecondData';
import CoreConcept from './CoreConcept';

function CoreConcepts() {
  return (
    <>
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

    </>
  )
}

export default CoreConcepts