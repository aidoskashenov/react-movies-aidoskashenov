import React, { useState, useEffect } from "react";
import { Cards } from "./Cards";
import { Form as Search } from "./Form";
import api from "api";

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const searchHandler = async (event) => {
    const { results } = await api.index(event.target.elements[0].value)
    setMovies(results);
  };

  return (
    <main>
      <Search handler={searchHandler} />
      <Cards movies={movies} />

    </main>
  );
};
