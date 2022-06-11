import React from "react";
import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => {
  return <img src={url} alt={title} title={title} className="card card-img" />;
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
