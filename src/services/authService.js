import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Function to register a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user/registerUser`, userData, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.response?.data || error.message || "Registration failed";
    throw new Error(errorMessage);
  }
};

// Function to login a user
export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, credentials, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.response?.data || error.message || "Login failed";
    throw new Error(errorMessage);
  }
};