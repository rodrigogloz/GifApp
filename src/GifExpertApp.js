import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Cats", "Coding", "Synths"]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h2 className="header-title animate__animated animate__fadeIn">
          GifExpertApp
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
        <div className="app-footer-content"></div>
      </footer>
    </div>
  );
};

export { GifExpertApp };
