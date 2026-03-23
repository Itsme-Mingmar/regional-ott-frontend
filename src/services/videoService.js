import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAllMovies = async () => {
  const res = await axios.get(`${API_URL}/video/movies`, {
    withCredentials: true,
  });
  return res.data.data;
};

export const getNepaliMovies = async () => {
  const res = await axios.get(`${API_URL}/video/nepali-movies`, {
    withCredentials: true,
  });
  return res.data.data;
};