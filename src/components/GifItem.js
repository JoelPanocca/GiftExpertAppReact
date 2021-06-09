import React from "react";

export const GifItem = (img) => {
  return (
    <div className="card">
      <p>{img.titulo}</p>
      <img src={img.url} alt={img.titulo} />
    </div>
  );
};
