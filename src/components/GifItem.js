import React from "react";
import PropTypes from 'prop-types';

export const GifItem = (img) => {
  return (
    <div className="card">
      <p>{img.titulo}</p>
      <img src={img.url} alt={img.titulo} />
    </div>
  );
};

GifItem.propTypes = {
    titulo : PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
