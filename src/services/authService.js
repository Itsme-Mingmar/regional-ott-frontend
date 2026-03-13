import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user/registerUser`, userData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

// Function to login a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, credentials);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};