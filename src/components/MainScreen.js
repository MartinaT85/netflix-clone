import Navbar from "./Navbar";
import MovieGallery from "./MovieGallery";
import SearchMovies from "./SearchMovies";

const MainScreen = () => {
  return (
    <>
      <Navbar />
      <MovieGallery />
      <SearchMovies />
    </>
  );
};

export default MainScreen;
