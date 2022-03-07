import { useEffect, useState } from "react";
import styled from "styled-components";

const FeaturedMovie = ({ movies }) => {
  const [index, setIndex] = useState(0);

  function textLength(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  useEffect(() => {
    const lastIndex = movies.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, movies]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <StyledSection className="section">
      <div className="gallery-wrapper">
        {movies.map((movie, movieIndex) => {
          let position = "nextSlide";
          if (movieIndex === index) {
            position = "activeSlide";
          }

          if (
            movieIndex === index - 1 ||
            (index === 0 && movieIndex === movies.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article
              className={position}
              key={movie.id}
              style={{
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${
                  movie?.backdrop_path || movie?.poster_path
                }')`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                objectFit: "cover",
                height: "70vh",
              }}
            >
              <div className="background-overlay"></div>
              <div className="featuredMovie-content">
                <h1 className="featuredMovie-title">
                  {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="featuredMovie-btn">
                  <button className="btn btn-secondary">Play</button>
                  <button className="btn btn-secondary">My List</button>
                </div>
                <p className="featuredMovie-description">
                  {textLength(movie?.overview, 300)}
                </p>
              </div>
              <div className="featuredMovie-fade"></div>
            </article>
          );
        })}
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  height: 70vh;
  width: 100%;

  .gallery-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    overflow: hidden;
  }

  .background-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  .featuredMovie-content {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin: 1rem auto;
    z-index: 3;
    text-align: center;
  }

  .featuredMovie-title {
    font-size: 1.75rem;
    font-weight: 800;
    margin-top: 3rem;
    padding-bottom: 0.3rem;
  }

  .featuredMovie-description {
    width: 100%;
    max-width: 45rem;
    padding-top: 1rem;
    font-size: 1rem;
  }

  article {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .btn-secondary {
    background-color: rgba(51, 51, 51, 0.5);
    margin-right: 1rem;
  }

  .btn:hover,
  .btn:focus {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }

  .featuredMovie-fade {
    /* height: 7.4rem; */
    height: 4.4rem;
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

  article.activeSlide {
    opacity: 1;
    transform: translateX(0);
  }

  article.lastSlide {
    transform: translateX(-100%);
  }

  article.nextSlide {
    transform: translateX(100%);
  }

  @media screen and (min-width: 43em) {
    .featuredMovie-content {
      text-align: start;
      align-items: flex-start;
    }

    .featuredMovie-title {
      font-size: 3rem;
    }

    .featuredMovie-description {
      width: 70%;
    }

    @media screen and (min-width: 62em) {
      .featuredMovie-description {
        width: 50%;
      }
    }
  }
`;

export default FeaturedMovie;
