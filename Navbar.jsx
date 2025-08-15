import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.body.classList.remove("light");
    if (theme === "light") document.body.classList.add("light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ background: "rgba(0,0,0,.35)", backdropFilter: "blur(10px)" }}>
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#home">MyPortfolio</a>

        <button className="navbar-toggler text-white" type="button" onClick={() => setExpanded(!expanded)}>
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {["home","about","skills","projects","contact"].map(id => (
              <li className="nav-item" key={id}>
                <a className="nav-link text-white" href={`#${id}`} onClick={() => setExpanded(false)}>
                  {id[0].toUpperCase()+id.slice(1)}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <button
                className="btn btn-sm btn-outline-muted"
                onClick={() => setTheme(t => (t === "dark" ? "light" : "dark"))}
              >
                <i className={`me-2 ${theme === "dark" ? "fa-regular fa-sun" : "fa-regular fa-moon"}`} />
                {theme === "dark" ? "Light" : "Dark"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
