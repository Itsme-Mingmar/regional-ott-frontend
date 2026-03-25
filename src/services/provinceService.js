import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getProvinceVideos = async (slug, category, limit = 6) => {
  const res = await axios.get(
    `${API_URL}/video/province/${slug}/${category}?limit=${limit}`
  );
  return res.data.data;
};