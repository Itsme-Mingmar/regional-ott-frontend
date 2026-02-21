import { useState } from "react";

const PlanSelector = ({ onNext }) => {
  const [billing, setBilling] = useState("monthly");
  const [plan, setPlan] = useState(null);

  const plans = {
    standard: billing === "monthly" ? "$9" : "$90",
    premium: billing === "monthly" ? "$15" : "$150",
  };

  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-8">
        Choose Your Plan
      </h2>

      {/* Toggle */}
      <div className="flex justify-center mb-10">
        <div className="bg-cardBg p-1 rounded-full flex">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full transition ${
              billing === "monthly"
                ? "bg-accent text-white"
                : "text-gray-400"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2 rounded-full transition ${
              billing === "yearly"
                ? "bg-accent text-white"
                : "text-gray-400"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-2 gap-8">
        {["standard", "premium"].map((type) => (
          <div
            key={type}
            onClick={() => setPlan(type)}
            className={`cursor-pointer p-8 rounded-xl bg-cardBg transition transform hover:scale-105 ${
              plan === type
                ? "border-2 border-accent shadow-lg shadow-accent/40"
                : "border border-gray-700"
            }`}
          >
            <h3 className="text-2xl font-semibold capitalize mb-4">
              {type}
            </h3>
            <p className="text-4xl font-bold">{plans[type]}</p>
            <p className="text-gray-400 mt-2">
              {billing === "monthly" ? "per month" : "per year"}
            </p>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="text-center mt-10">
        <button
          disabled={!plan}
          onClick={() => onNext(plan, billing)}
          className="px-8 py-3 bg-purple-700 rounded-lg font-semibold hover:bg-purple-500 transition disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PlanSelector;