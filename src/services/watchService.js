import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getVideoById = async (id) => {
  const res = await axios.get(`${API_URL}/video/${id}`, {
    withCredentials: true,
  });
  return res.data.data;
};

export const startWatch = async (videoId) => {
  await axios.post(
    `${API_URL}/watch/start`,
    { videoId },
    { withCredentials: true }
  );
};