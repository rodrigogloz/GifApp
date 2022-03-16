import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <div className="category-container">
      <h3 className="category-name animate__animated animate__fadeIn">
        {category}
      </h3>

      {loading && <p>Cargando...</p>}

      <div className="card-grid scrolling-wrapper">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};
