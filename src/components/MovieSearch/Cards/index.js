import React from "react";
import PropTypes from "prop-types"


export const Cards = ({ movies }) => {
 return <figure>
    <figcaption>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movies.poster_path}`}/>
    </figcaption>
  </figure>
};

Cards.propTypes = {
  movies: PropTypes.array
}
