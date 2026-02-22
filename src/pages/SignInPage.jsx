import { useState } from "react";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔥 Simulated backend email check
  const handleEmailCheck = () => {
    if (!email.trim()) return;

    // Simulate existing user
    const existingUserEmail = "test@gmail.com";

    if (email === existingUserEmail) {
      setError("");
      setStep(2);
    } else {
      setError("No account found with this email.");
    }
  };

  const handleLogin = () => {
    if (!password.trim()) return;

    console.log("Login payload:", { email, password });

    // Later:
    // axios.post("/api/auth/login", { email, password })
  };

  return (
    <div className="min-h-screen bg-[#0F0F1A] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-[#1C1C2E] p-10 rounded-xl shadow-xl text-white">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Sign In
        </h2>

        {/* STEP 1 — EMAIL */}
        {step === 1 && (
          <>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0F0F1A] border border-gray-700 focus:border-[#7C3AED] outline-none"
            />

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            <button
              disabled={!email}
              onClick={handleEmailCheck}
              className={`w-full mt-6 py-3 rounded-lg font-semibold transition
                ${email 
                  ? "bg-[#7C3AED] hover:bg-purple-500"
                  : "bg-gray-600 cursor-not-allowed"}
              `}
            >
              Continue
            </button>
          </>
        )}

        {/* STEP 2 — PASSWORD */}
        {step === 2 && (
          <>
            <p className="mb-4 text-gray-400 text-sm">
              Signing in as <span className="text-white font-bold">{email}</span>
            </p>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#0F0F1A] border border-gray-700 focus:border-[#7C3AED] outline-none"
            />

            <button
              disabled={!password}
              onClick={handleLogin}
              className={`w-full mt-6 py-3 rounded-lg font-semibold transition
                ${password 
                  ? "bg-[#7C3AED] hover:bg-purple-500"
                  : "bg-gray-600 cursor-not-allowed"}
              `}
            >
              Sign In
            </button>

            <button
              onClick={() => setStep(1)}
              className="mt-4 text-sm text-gray-400 hover:text-white"
            >
              ← Change Email
            </button>
          </>
        )}

        {/* Footer Links */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Don't have an account?{" "}
            <Link to="/subscribe" className="text-[#22D3EE] cursor-pointer hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignInPage;