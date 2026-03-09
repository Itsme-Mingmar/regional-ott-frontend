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
    const payload = {
      ...formData,
      planType: selectedPlan,
      billingCycle: billing,
    };

    console.log("Sending to backend:", payload);

    // STANDARD PLAN → Direct signup
    if (selectedPlan === "standard") {
      // await axios.post("/api/auth/register", payload)

      console.log("Standard account created (no payment)");
      alert("Account created successfully!");
    }

    // PREMIUM PLAN → Open payment
    if (selectedPlan === "premium") {
      setShowModal(true);
    }
  };

  return (
    <div className="w-full max-w-md bg-[#1c1c2e] p-10 rounded-xl shadow-xl">
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

      <button
        disabled={!isFormValid}
        onClick={handleContinue}
        className="w-full mt-6 py-3 bg-purple-700 rounded-lg font-semibold hover:bg-purple-500 disabled:opacity-40 transition"
      >
        Continue
      </button>

      {showModal && <PaymentModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default AccountForm;