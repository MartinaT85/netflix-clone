import axios from "axios";

const instance = axios.create({
  baseURL: "https://developers.themoviedb.org/3",
});

export default instance;
