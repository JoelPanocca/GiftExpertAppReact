import React from "react";
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const {data:images, loading } = useFetchGif(category);
  return (
    <>
      <h2>{category}</h2>
      {loading && <p>Cargando...</p>}

      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
