import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  if (!darkMode) {
    document.body.classList.add("light-mode");
  }

  function toggleTheme() {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (!newMode) {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
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
