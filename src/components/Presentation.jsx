import React from "react";

function PresentationPage() {
  return (
    <div>
      <section>
        <h2>How this code works</h2>
        <img src="SS3.png" alt="Bio Component" />
        <p id="text-field">
          useEffect is a React Hook for handling side effects in components.
          Examples of side effects include: Fetching data such as APIs, Setting
          up subscriptions, Updating the DOM Debouncing user input and more.
        </p>
      </section>
      <section>
        <h2> Understanding to the Bio Component </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {" "}
          <li>
            It uses React Hooks (useState, useEffect)
          </li>
          <li>Styles are imported from an external CSS file (index.css)</li>
        </ul>
        <img src="SS4.png" alt="Bio Component" />
        <p id="text-field"></p>
      </section>
      <section>
        <h2> Managing Form State with useState </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>useState is used to store and update form input values</li>
          <li>formData is an object with 3 fields: name, status, and bio</li>
        </ul>
        <img src="SS5.png" alt="Imports" />
        <p id="text-field"></p>
      </section>
      <section>
        <h2> Auto-Saving with useEffect </h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>useEffect watches for changes to formData</li>
          <li>Waits 5 seconds before logging the form as "autosaved"</li>
          <li> Uses setTimeout + clearTimeout for debouncing</li>
        </ul>
        <img src="SS6.png" alt="autosave useEffect" />
        <p id="text-field"></p>
      </section>
      <section>
        <h2> The Form JSX Structure </h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>The form includes 2 'input' fields and 1 'textarea' </li>
          <li>Each input is bound to state</li>
          <li> onChange updates state using the spread operator </li>
        </ul>
        <img src="SS7.png" alt="JSX structure" />
        <p id="text-field"></p>
      </section>
      <section>
        <h2> Final Touch </h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>Component is exported as default</li>
          <li>Ready to be imported & used anywhere in the app</li>
        </ul>
        <img src="SS8.png" alt="Export" />
        <p id="text-field"></p>
      </section>
    </div>
  );
}

export default PresentationPage;
