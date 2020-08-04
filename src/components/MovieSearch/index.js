import React, { useState, useEffect } from "react";
import { Cards } from "./Cards";
import { Form as Search } from "./Form";
import api from "api";

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const searchHandler = async (event) => { setMovies(await api.index(event.target.elements[0].value))}


  return (
    <main>
      <Cards movies={movies} />
      <Search handler={searchHandler}/>
    </main>
  );
};
