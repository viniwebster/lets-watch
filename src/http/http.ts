import axios from "axios";
import { apiKey, token } from "../environment/authorization";

const http = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const getMovies = async (page: number) => {
  const response = await http.get(
    `popular?api_key=${apiKey}&language=en-US&page=${page}`
  );
  return response.data;
};

export default http;
