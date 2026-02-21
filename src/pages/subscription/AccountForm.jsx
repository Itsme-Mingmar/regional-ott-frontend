import { useState } from "react";
import PaymentModal from "./PaymentModal";

const AccountForm = ({ selectedPlan, billing }) => {
  const [showModal, setShowModal] = useState(false);

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

  const handleContinue = () => {
    // 🔥 This is the payload you will send to backend
    const payload = {
      ...formData,
      plan: selectedPlan,
      billing: billing,
    };

    console.log("Sending to backend:", payload);

    // Later:
    // await axios.post("/api/subscription/create", payload)

    setShowModal(true);
  };

  return (
    <div className="w-full max-w-md bg-cardBg p-10 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Your Account
      </h2>

      <div className="space-y-4">
        <input
          name="fullName"
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-primaryBg border border-gray-700 focus:border-accent outline-none"
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-primaryBg border border-gray-700 focus:border-accent outline-none"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-primaryBg border border-gray-700 focus:border-accent outline-none"
        />

        <select
          name="province"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:border-accent outline-none"
        >
          <option value="">Select Province</option>
          <option value="Province 1">Province 1</option>
          <option value="Province 2">Province 2</option>
          <option value="Bagmati">Bagmati</option>
          <option value="Gandaki">Gandaki</option>
          <option value="Lumbini">Lumbini</option>
          <option value="Karnali">Karnali</option>
          <option value="Sudurpashchim">Sudurpashchim</option>
        </select>
      </div>

      <button
        disabled={!isFormValid}
        onClick={handleContinue}
        className="w-full mt-6 py-3 bg-purple-700 rounded-lg font-semibold hover:bg-purple-500 disabled:opacity-50 transition cursor-pointer"
      >
        Continue
      </button>

      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default AccountForm;