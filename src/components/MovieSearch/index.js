import React, { useState, useEffect } from "react";
import { Cards } from "./Cards";
import { Form as Search } from "./Form";

import api from "api";

export const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const searchHandler = async (event) => {
    const { results } = await api.index(event.target.elements[0].value);
    setMovies(results);
  };

  return (
    <body>
      <section className="hero is-full-width  has-background-grey">
        <div className="container">
          <h1 className="title">Find your movie Here</h1>
          <h2 className="subtitle">
            <main>
              <Search handler={searchHandler} />
            </main>

            <strong className="hero is-full-width has-background-grey-lighter">
              <Cards movies={movies} />
            </strong>
          </h2>
        </div>
      </section>
      <footer className="footer">
  <div className="content has-text-centered">
    <p>
      <strong>Application</strong> by <a href="https://jgthms.com">John Doe</a>. This statement meant to be very official and Corporate Looking Ltd.
      <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
      is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
    </p>
  </div>
</footer>
    </body>
  );
};
