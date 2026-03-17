import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

//AXIOS INSTANCE
const API = axios.create({
  baseURL: `${API_URL}/user`,
  withCredentials: true,
});

// REQUEST INTERCEPTOR 
API.interceptors.request.use(
  (config) => {
    try {
      const auth = JSON.parse(localStorage.getItem("auth"));

      if (auth?.token) {
        config.headers.Authorization = `Bearer ${auth.token}`;
      }
    } catch (error) {
      console.error("Token parsing error:", error);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

//  RESPONSE INTERCEPTOR (Handle Expired Token)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem("auth");

      // Optional: redirect to login
      window.location.href = "/signin";
    }

    return Promise.reject(error);
  }
);

// REGISTER USER
export const registerUser = async (userData) => {
  try {
    const res = await API.post("/registerUser", userData);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Registration failed"
    );
  }
};

//  LOGIN USER
export const loginUser = async (credentials) => {
  try {
    const res = await API.post("/login", credentials);

    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Login failed"
    );
  }
};

// CHECK EMAIL
export const checkEmail = async (emailData) => {
  try {
    const res = await API.post("/checkEmail", emailData);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Email check failed"
    );
  }
};

//  LOGOUT USER
export const logoutUser = async () => {
  try {
    // Call backend if logout route exists (optional)
    await API.post("/logout");

  } catch (error) {
    // even if backend fails, continue logout
    console.warn("Backend logout failed:", error.message);
  } finally {
    // 🔥 Always clear frontend auth
    localStorage.removeItem("auth");

    // Optional redirect
    window.location.href = "/signin";
  }
};