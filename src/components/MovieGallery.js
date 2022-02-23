import axios from "../utils/axios";
import requests from "../utils/requests";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import FeaturedMovie from "./FeaturedMovie";

const MovieGallery = () => {
  const query = "sing";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/search/movie?api_key=a7d9f7aa23bfa9fe64b50d3baee20911&language=en-US&query=${query}&page=1&include_adult=false`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  return (
    <main className="movieGallery">
      <FeaturedMovie movie={movie} />
    </main>
  );
};

export default MovieGallery;
