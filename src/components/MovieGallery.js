import axios from "../utils/axios";
import requests from "../utils/requests";
import { useEffect } from "react";
import { useState } from "react";
import FeaturedMovie from "./FeaturedMovie";

const MovieGallery = () => {
  const query = "pride and prejudice";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
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
