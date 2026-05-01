import axios from "axios";
axios.defaults.withCredentials = true;

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
    if (error.response?.status === 401 || error.response?.status === 500) {
      localStorage.removeItem("auth");

      // FORCE FULL RESET (IMPORTANT)
      window.location.href = "/signin";
    }

    return Promise.reject(error);
  }
);

// REGISTER USER
export const registerUser = async (userData) => {
  try {
    const res = await API.post("/registerUser", userData);

    const user = res.data.data;

    // ✅ update UI immediately
    localStorage.setItem("auth", JSON.stringify(user));

    return user;

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
// GET ALL USERS (ADMIN)
export const getAllUsers = async () => {
  try {
    const res = await API.get("/all");
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Failed to fetch users"
    );
  }
};

// DELETE USER (ADMIN)
export const deleteUser = async (userId) => {
  try {
    const res = await API.delete(`/${userId}`);
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Failed to delete user"
    );
  }
};

// UPDATE USER ROLE (ADMIN)
export const updateUserRole = async (userId, role) => {
  try {
    const res = await API.put(`/${userId}/role`, { role });
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message ||
      error.message ||
      "Failed to update user role"
    );
  }
};