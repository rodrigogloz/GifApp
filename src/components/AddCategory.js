import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faSearch } from "@fortawesome/free-solid-svg-icons";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  const resetCategories = () => {
    setCategories([]);
  };

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit} className="search-container">
        <input
          spellCheck="false"
          className="animate__animated animate__fadeIn"
          type="text"
          placeholder="Buscar GIFs por categoría"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </button>
      </form>

      <select className="search-quantity">
        <option value="1">10</option>
        <option value="2">50</option>
        <option value="3">100</option>
      </select>

      <button className="reset-button" onClick={resetCategories}>
        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
      </button>
    </div>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
