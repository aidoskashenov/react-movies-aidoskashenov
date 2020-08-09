import React from "react";
import PropTypes from "prop-types";
import styles from "./Cards.css";

export const Cards = ({ movies }) => {
  return movies.map((movie) => {
    return (
      <figure key={movie.id} className={styles.card}>
        <figcaption>
          <img
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            className={styles.image}
            alt="Movie Poster"
          />
        </figcaption>
        <p>{movie.original_title}</p>
      </figure>
    );
  });
};

Cards.propTypes = {
  movies: PropTypes.array,
};
