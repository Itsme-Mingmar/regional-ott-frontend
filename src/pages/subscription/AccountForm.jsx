import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import PaymentModal from "./PaymentModal";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const AccountForm = ({ selectedPlan, billing }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    province: "",
  });

  const isFormValid =
    formData.fullName &&
    formData.email &&
    formData.password &&
    formData.province;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = async () => {
    if (loading) return;

    const payload = {
      ...formData,
      plan: selectedPlan,
      billing,
    };

    setLoading(true);
    setError("");

    try {
      if (selectedPlan === "standard") {
        const response = await registerUser(payload);

        auth.login(response.data, response.data.token);
        navigate("/home");
      }

      if (selectedPlan === "premium") {
        setShowModal(true);
      }

    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handlePayment = async () => {
  try {
    const res = await axios.post(`${API_URL}/payment/initiate`, {
      ...formData,
      plan: selectedPlan,
      billing
    });

    window.location.href = res.data.payment_url;

  } catch (err) {
    setError(err.response?.data?.message || err.response?.data?.error || "Payment initiation failed");
    setShowModal(false);
  }
};

  return (
    <div className="max-w-md mx-auto bg-[#0f0f23] p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Your Account
      </h2>

      <div className="space-y-4">

        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#141427] border border-gray-700 focus:border-purple-500 outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#141427] border border-gray-700 focus:border-purple-500 outline-none"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#141427] border border-gray-700 focus:border-purple-500 outline-none"
        />

        <select
          name="province"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-[#141427] border border-gray-700 focus:border-purple-500 outline-none"
        >
          <option value="">Select Province</option>
          <option value="koshi">Koshi</option>
          <option value="madhesh">Madhesh</option>
          <option value="bagmati">Bagmati</option>
          <option value="gandaki">Gandaki</option>
          <option value="lumbini">Lumbini</option>
          <option value="karnali">Karnali</option>
          <option value="sudurpashchim">Sudurpashchim</option>
        </select>

      </div>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}

      <button
        disabled={!isFormValid || loading}
        onClick={handleContinue}
        className="w-full mt-6 py-3 bg-purple-700 rounded-lg font-semibold hover:bg-purple-500 disabled:opacity-40 transition"
      >
        {loading ? "Creating Account..." : "Continue"}
      </button>

      {showModal && <PaymentModal onClose={() => setShowModal(false)} onSuccess={handlePayment} />}

    </div>
  );
};

export default AccountForm;