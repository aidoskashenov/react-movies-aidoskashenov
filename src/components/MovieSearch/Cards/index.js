import React from "react";
import PropTypes from "prop-types";
import styles from "./Cards.css";

export const Cards = ({ movies }) => {
  return movies.map((movie) => {
    return (
      <figure key={movie.id} className={styles.card}>
        <section className="section">
          <div className="columns">
            <div className="column">
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                className={styles.image}
                alt="Movie Poster"
              />
            </div>

            <div className="column">
              <p className="is-size-3">{movie.original_title}</p>
            </div>
            <div className="column">{movie.overview}</div>
          </div>
        </section>
      </figure>
    );
  });
};

Cards.propTypes = {
  movies: PropTypes.array,
};
