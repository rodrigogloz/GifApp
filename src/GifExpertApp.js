import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import GitHub from "./assets/github-svgrepo-com .svg";
import Linkedin from "./assets/linkedin-svgrepo-com.svg";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Cats", "Coding", "Synths"]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h2 className="header-title animate__animated animate__fadeIn">
          Gif Finder
        </h2>
        <AddCategory setCategories={setCategories} />
        {/* <hr className="header-hr" /> */}
      </header>
      <ol className="results-list">
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      <footer className="app-footer">
        <div className="app-footer-content">
          <a href="https://github.com/rodrigogloz" target="_blank">
            <img className="footer-logo" src={GitHub} alt="GitHub" />
          </a>
          <p>© 2022 Rodrigo Ezequiel Gloz</p>
          <a href="https://www.linkedin.com/in/rodrigo-gloz/" target="_blank">
            <img className="footer-logo" src={Linkedin} alt="Linkedin" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export { GifExpertApp };
