import axios from "../utils/axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const SearchMovies = () => {
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [userQuery, setUserQuery] = useState("Hobbit");
  console.log("user query", userQuery);

  const fetchData = async (userQuery) => {
    const request = await axios.get(
      `/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&query=${userQuery}&page=1&include_adult=false`
    );

    const arr = request?.data?.results;
    request.data.results && setMoviesSearch(arr);
  };

  useEffect(() => {
    fetchData(userQuery);
  }, [userQuery]);

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
  align-items: center;
  justify-content: flex-end;

  p {
    border-bottom: 1px solid #fff;
  }

  input {
    width: 60%;
    background-color: #000;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;
    padding-left: 1rem;
    cursor: pointer;
  }
`;
export default SearchMovies;
