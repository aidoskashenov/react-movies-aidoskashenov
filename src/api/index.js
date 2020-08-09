import dotenv from "dotenv";

dotenv.config();

export default {
  // query will be assigned the value of the whatever was submmited in
  async index(query) {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1&include_adult=false`
      );
      // fetch will not detect an error so we want to throw one if the code is

      if (res.status > 400) {
        throw new Error(res.status)
      }
      return await res.json();
    } catch (error) {
      return "Currently facing issue";
    }
  },
};
