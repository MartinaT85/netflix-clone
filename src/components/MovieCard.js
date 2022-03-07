import styled from "styled-components";

const MovieCard = ({ movieSearch }) => {
  console.log("props", movieSearch);
  return (
    <StyledDiv className="movieCard-wrapper">
      <div className="movieImg-container">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movieSearch?.backdrop_path || movieSearch?.poster_path
          }`}
          alt={movieSearch.title}
        />
      </div>
      <div className="movieTxt-container">
        <h2>{movieSearch?.title}</h2>
        <p>{movieSearch?.overview}</p>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 2.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  .movieImg-container {
    width: 100%;
  }

  img {
    object-fit: contain;
    border-radius: 10px;
  }

  .movieTxt-container {
    width: 100%;
    margin: 0 auto;
    text-align: center;

    h2 {
      font-size: 1.55rem;
      padding: 1rem 0;
    }

    @media screen and (min-width: 43em) {
      h2 {
        font-size: 2.25rem;
      }
    }
  }
  @media screen and (min-width: 62em) {
    display: flex;
    align-items: center;
    gap: 3rem;
    .movieImg-container {
      width: 40%;
    }

    .movieTxt-container {
      width: 50%;
      text-align: start;
    }
  }
`;

export default MovieCard;
