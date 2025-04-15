import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Bio from "./components/Bio.jsx";
import "./App.css";
import PresentationPage from "./components/Presentation.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>useEffect in Practice</h1>
      <h3>by Group 1: Kane, Stacy, Wanjiru & Kelvin</h3>
      <div className="card">
        <h2>Real world example: Updating bio</h2>
        <p>
          This form utilises 'useEffect' to autosave anything that has been
          written within the input fields, with a 5 second delay between input
          and autosaves, use cases would be text boxes such as social media
          posts, mailboxes etc.
        </p>
        <Bio />
      </div>
      <div>
        <PresentationPage />
      </div>
    </>
  );
}

export default App;
