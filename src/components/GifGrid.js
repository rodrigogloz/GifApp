import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import deleteButton from "../assets/delete-svgrepo-com.svg";
// import loadingWheel from "../assets/Spin-1s-200px.gif";

export const GifGrid = ({ category }) => {
  const { state, setState } = useFetchGifs(category);
  const { data: images, loading } = state;

  const onDelete = () => {
    setState({
      data: [],
      loading: true,
    });
  };

  return (
    images.length > 0 && (
      <div className="category-container">
        <span className="category-header animate__animated animate__fadeIn">
          <h3 className="category-name animate__animated animate__fadeIn">
            {category}
          </h3>
          <img
            src={deleteButton}
            alt="delete"
            className="icon-delete"
            onClick={onDelete}
          />
        </span>
        {loading && <p>Cargando...</p>}

        <div className="card-grid scrolling-wrapper">
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      </div>
    )
  );
};
