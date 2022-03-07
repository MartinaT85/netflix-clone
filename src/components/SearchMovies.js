import axios from "../utils/axios";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const SearchMovies = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  console.log("user query", userQuery);

  const fetchData = async (userQuery) => {
    const request = await axios.get(
      `/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&query=${userQuery}&page=1&include_adult=false`
    );

    const arr = request?.data?.results;
    if (arr) {
      setMoviesSearch(arr);
    }
  };

  useEffect(() => {
    // async function fetchData(query) {
    //   try {
    //     const request = await axios.get(
    //       `/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&query=${query}&page=1&include_adult=false`
    //     );
    //     const arr = request.data.results;

    //     if (request.data.results) {
    //       setMoviesSearch(arr);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    fetchData(userQuery);
  }, [userQuery]);

  console.log("USER QUERY", moviesSearch);

  return (
    <>
      <StyledSection>
        <input
          type="text"
          placeholder="Search Movie"
          value={userQuery}
          onChange={(e) => setUserQuery(e.target.value)}
        />
      </StyledSection>
      <section className="movie-cards">
        {moviesSearch
          .filter((movieSearch) => movieSearch?.backdrop_path)
          .map((movieSearch) => (
            <MovieCard movieSearch={movieSearch} key={movieSearch.id} />
          ))}
      </section>
    </>
  );
};

const StyledSection = styled.section`
  width: 90%;
  margin: 3rem auto;
  margin-top: 5rem;
  display: flex;
  justify-content: flex-end;

  input {
    width: 70%;
    background-color: #000;
    border: transparent;
    border-bottom: 1px solid #fff;
    color: #fff;
    padding-left: 1rem;
  }
`;
export default SearchMovies;
