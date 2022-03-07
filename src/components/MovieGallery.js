import axios from "../utils/axios";
import requests from "../utils/requests";
import { useState, useEffect } from "react";
import FeaturedMovie from "./FeaturedMovie";

const MovieGallery = () => {
  const query = "pride and prejudice";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      const arr = request.data.results;
      const arrCopy = [...arr];

      const shuffleArray = (array) => {
        let oldMovie;
        for (let i = array.length - 1; i > 0; i--) {
          let rand = Math.floor(Math.random() * (i + 1));
          oldMovie = array[i];
          array[i] = array[rand];
          array[rand] = oldMovie;
        }
        return array;
      };
      const newArr = shuffleArray(arrCopy);

      const slicedArray = [...newArr].slice(0, 10);
      // console.log("sliced Array", slicedArray);

      setMovies(
        // request.data.results[
        //   Math.floor(Math.random() * request.data.results.length)
        // ]
        slicedArray
      );
    }
    fetchData();
  }, []);

  // console.log("MOVIE ARRAY", movies);

  return (
    <main className="movieGallery">
      <FeaturedMovie movies={movies} />
    </main>
  );
};

export default MovieGallery;
