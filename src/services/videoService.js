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
export const uploadVideo = async (formData) => {
  try {
    const res = await axios.post(
      `${API_URL}/video/upload`,
      formData,
      {
        withCredentials: true,
      }
    );

    return res.data.data;
  } catch (error) {
    throw error.response?.data?.message || "Upload failed";
  }
};
// GET ALL
export const getAllVideos = async () => {
  const res = await axios.get(`${API_URL}/video`, {
    withCredentials: true
  });
  return res.data.data;
};

// UPDATE
export const updateVideo = async (id, data) => {
  const res = await axios.put(`${API_URL}/video/${id}`, data, {
    withCredentials: true,
  });
  return res.data;
};

// DELETE
export const deleteVideo = async (id) => {
  const res = await axios.delete(`${API_URL}/video/${id}`, {
    withCredentials: true,
  });
  return res.data;
};