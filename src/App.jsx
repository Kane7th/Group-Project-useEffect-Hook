import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Bio from './components/Bio.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <h2>by Group 1: Kane, Stacy, Wanjiru & Kelvin</h2>
      <div className="card">
        <h2>
          Real world example: Updating bio page
        </h2>
        <Bio />
        <p> This adds a form with an autosave feature that utilises 'useEffect' and adds a 5 second delay before autosaving</p>
      
      </div>
    </>
  )
}

export default App
