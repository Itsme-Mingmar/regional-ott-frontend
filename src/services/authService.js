import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// AXIOS INSTANCE
const API = axios.create({
  baseURL: `${API_URL}/user`,
  withCredentials: true,
});

// RESPONSE INTERCEPTOR (Handle Expired Session)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // clear user data only
      localStorage.removeItem("auth");

      // redirect to login
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

// REGISTER USER
export const registerUser = async (userData) => {
  try {
    const res = await API.post("/registerUser", userData);

    // store only user data (NO token needed)
    localStorage.setItem("auth", JSON.stringify(res.data.data));

    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Registration failed"
    );
  }
};

// LOGIN USER
export const loginUser = async (credentials) => {
  try {
    const res = await API.post("/login", credentials);

    // store only user data
    localStorage.setItem("auth", JSON.stringify(res.data.data));

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

// LOGOUT USER
export const logoutUser = async () => {
  try {
    await API.post("/logout");
  } catch (error) {
    console.warn("Backend logout failed:", error.message);
  } finally {
    localStorage.removeItem("auth");
  }
};

// GET USER PROFILE
export const getUserProfile = async () => {
  try {
    const res = await API.get("/profile");
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch profile"
    );
  }
};
export const updateUserPlan = async (data) => {
  try {
    const res = await API.put("/updatePlan", data);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Update plan failed"
    );
  }
};