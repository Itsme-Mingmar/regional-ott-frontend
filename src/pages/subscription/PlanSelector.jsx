import { useState } from "react";

const PlanSelector = ({ onNext }) => {
  const [billing, setBilling] = useState("monthly");
  const [plan, setPlan] = useState(null);

  const premiumPrice =
    billing === "monthly" ? "Rs.600 / month" : "Rs.6000 / year";

  return (
    <div className="w-full max-w-5xl">
      <h2 className="text-4xl font-bold text-center mb-10">
        Choose Your Plan
      </h2>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-[#1c1c2e] p-1 rounded-full flex">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-full transition ${
              billing === "monthly"
                ? "bg-purple-600 text-white"
                : "text-gray-400"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("yearly")}
            className={`px-6 py-2 rounded-full transition ${
              billing === "yearly"
                ? "bg-purple-600 text-white"
                : "text-gray-400"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* STANDARD PLAN */}
        <div
          onClick={() => setPlan("standard")}
          className={`p-8 rounded-2xl cursor-pointer transition transform hover:scale-105
          ${
            plan === "standard"
              ? "border-2 border-purple-600 bg-[#1c1c2e]"
              : "border border-gray-700 bg-[#141427]"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4">Standard</h3>

          <p className="text-4xl font-bold mb-6">Free</p>

          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✔ Access documentaries of your province</li>
            <li>✔ Access cultural highlights</li>
          </ul>
        </div>

        {/* PREMIUM PLAN */}
        <div
          onClick={() => setPlan("premium")}
          className={`p-8 rounded-2xl cursor-pointer transition transform hover:scale-105
          ${
            plan === "premium"
              ? "border-2 border-purple-600 bg-[#1c1c2e]"
              : "border border-gray-700 bg-[#141427]"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4">Premium</h3>

          <p className="text-4xl font-bold mb-6">{premiumPrice}</p>

          <ul className="text-gray-400 space-y-2 text-sm">
            <li>✔ Access all movies</li>
            <li>✔ Access all provinces</li>
            <li>✔ Unlimited streaming</li>
            <li>✔ Premium exclusive content</li>
          </ul>
        </div>
      </div>

      {/* Next Button */}
      <div className="text-center mt-12">
        <button
          disabled={!plan}
          onClick={() => onNext(plan, billing)}
          className="px-10 py-3 bg-purple-700 rounded-lg font-semibold hover:bg-purple-500 transition disabled:opacity-40"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PlanSelector;