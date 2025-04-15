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
        <p>
          It uses React Hooks (useState, useEffect) Styles are imported from an
          external CSS file (index.css)
        </p>
      </section>
    </div>
  );
}

export default PresentationPage;
