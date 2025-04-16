import React from "react";

function PresentationPage() {
  return (
    <div className="presentation" >
      <section className="presentation-section" >
        <h2>How this code works</h2>
        <img src="SS3.png" alt="Bio Component" className="presentation-image"/>
        <p className="text-field">
          useEffect is a React Hook for handling side effects in components.
          Examples of side effects include: Fetching data such as APIs, Setting
          up subscriptions, Updating the DOM Debouncing user input and more.
        </p>
      </section>
      <section presentation-section>
        <h2> Understanding to the Bio Component </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {" "}
          <li>
            It uses React Hooks (useState, useEffect)
          </li>
         </ul>
        <img src="SS4.png" alt="Bio Component" 
          className="presentation-image"
        />
        {/* <p className="text-field"></p> */}
      </section>
      <section>
        <h2> Managing Form State with useState </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>useState is used to store and update form input values</li>
          <li>formData is an object with 3 fields: name, status, and bio</li>
        </ul>
        <img src="SS5.png" alt="Imports" className="presentation-image" />
      </section>
      <section className="presentation-section">
        <h2> Auto-Saving with useEffect </h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>First effect runs once on component mount. <>br</>It checks localStorage for
          previously saved data and populates the form.</li>
          <li>Second effect tracks changes to formData. It implements a debounce strategy using setTimeout.</li>
          <li> Uses setTimeout + clearTimeout for debouncing</li>
        </ul>
        <img src="SS6.png" alt="autosave useEffect" className="presentation-image" />
     
      </section>
      <section className="presentation-section">
        <h2> The Form JSX Structure </h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>The form includes 2 'input' fields and 1 'textarea' </li>
          <li>Each input is bound to state</li>
          <li> onChange updates state using the spread operator </li>
        </ul>
        <img src="SS7.png" alt="JSX structure" className="presentation-image" />
     
      </section>
      <section className="presentation-section"> 
        <h2> Final Touch </h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Component is exported as default</li>
          <li>Ready to be imported & used anywhere in the app</li>
        </ul>
        <img src="SS8.png" alt="Export" className="presentation-image" />
      
      </section>
    </div>
  );
}

export default PresentationPage;
