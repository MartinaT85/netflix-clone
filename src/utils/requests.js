const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=a7d9f7aa23bfa9fe64b50d3baee20911&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=a7d9f7aa23bfa9fe64b50d3baee20911&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=a7d9f7aa23bfa9fe64b50d3baee20911&with_genres=35`,
};

// for some reason, not known to me it DOESN'T work
// ${process.env.REACT_APP_MOVIE_API}
export default requests;
