import { Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") return false;
    if (saved === "dark") return true;
    return true; // défaut: sombre (comme tu voulais)
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)] dark:bg-[var(--bg-dark)] dark:text-[var(--fg-dark)] transition-none">
      <TopBar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode((prev) => !prev)}
      />

      {/* padding-top pour compenser la topbar fixed */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/about"
            element={<div className="p-8 text-4xl">About (à venir)</div>}
          />
          <Route
            path="/experience"
            element={<div className="p-8 text-4xl">Experience (à venir)</div>}
          />
          <Route
            path="/skills"
            element={<div className="p-8 text-4xl">Skills (à venir)</div>}
          />
          <Route
            path="/recommendations"
            element={
              <div className="p-8 text-4xl">Recommendations (à venir)</div>
            }
          />
          <Route
            path="/contact"
            element={<div className="p-8 text-4xl">Contact (à venir)</div>}
          />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
