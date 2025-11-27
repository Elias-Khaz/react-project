import ProjectOne from "./components/projectOne";
import ProjectTwo from "./components/projectTwo";
import ProjectThree from "./components/projectThree";
import { useState } from "react";

function App() {
  let [darkMode, setDarkMode] = useState(true);
  
  function toggleTheme() {
    let newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode === false) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }
  
  return (
    <div>
      <button className="toggle-theme" onClick={toggleTheme}>
          {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>My Portfolio</h1>

      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
    </div>
  )
}

export default App;