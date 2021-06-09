import React, { useState, useEffect } from "react";
import { GetGifs } from "../helper/GetGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);
  
  useEffect(() => {
    GetGifs(category).then(imgs => setImages(imgs));
  }, [category]);  

  return (
    <>
      <h2>{category}</h2>
      <div className="card-grid">
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />;
        })}
      </div>
    </>
  );
};
