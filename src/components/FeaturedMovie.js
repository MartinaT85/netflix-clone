import styled from "styled-components";

const FeaturedMovie = ({ movie }) => {
  console.log(movie);
  function textLength(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <StyledSection
      className="featuredMovie"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <div className="featuredMovie-content">
        <h1 className="featuredMovie-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="featuredMovie-btn">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <p className="featuredMovie-description">
          {textLength(movie?.overview, 300)}
        </p>
      </div>
      <div className="featuredMovie-fade"></div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  max-width: 1800px;
  margin: 0 auto;
  height: 28rem;
  position: relative;
  object-fit: contain;
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  justify-content: start;
  align-items: center;

  .featuredMovie-content {
    width: 90%;
    margin: 0 auto;
  }

  .featuredMovie-title {
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
  }

  .featuredMovie-description {
    width: 60%;
    max-width: 45rem;
    padding-top: 1rem;
  }

  .btn {
    cursor: pointer;
    font-weight: 700;
    border-radius: 2px;
    color: #fff;
    border: transparent;
    background-color: rgba(51, 51, 51, 0.5);
    padding: 0.5rem 2rem;
    margin-right: 1rem;
  }

  .btn:hover,
  .btn:focus {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }

  .featuredMovie-fade {
    height: 7.4rem;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.6),
      #111
    );
  }
`;

export default FeaturedMovie;