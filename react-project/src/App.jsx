import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleTheme() {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (!newMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }

  return (
    <>
      <button className="toggle-theme" onClick={toggleTheme}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
