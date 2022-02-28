const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API}&with_genres=35`,
};

export default requests;
