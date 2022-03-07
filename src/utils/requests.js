const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_MOVIE_API}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API}&with_genres=35`,
  userQuery: `/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`,
};

export default requests;

// const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
