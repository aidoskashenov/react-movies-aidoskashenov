import React from "react";
import PropTypes from "prop-types";

export const Cards = ({ movies }) => {
  return movies.map((movie) => {
    return (
      <figure key={movie.id}>
        <figcaption>
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt="Movie Poster"
          />
        </figcaption>
      </figure>
    );
  });
};

Cards.propTypes = {
  movies: PropTypes.array,
};
