import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, checkEmail } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const SignInPage = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const navigate = useNavigate();
  const auth = useAuth();

  const handleEmailCheck = async () => {
    if (!email.trim()) return;

    try {
      setLoadingEmail(true); 
      await checkEmail({ email });
      setError("");
      setStep(2);
    } catch (err) {
      setError("No account found with this email. Please sign up first.");
    } finally {
      setLoadingEmail(false); 
    }
  };

  const handleLogin = async () => {
    if (!password.trim()) return;

    try {
      setLoadingLogin(true); 

      const response = await loginUser({ email, password });

      const user = response.data;
      const token = response.data.token;

      auth.login(user, token);
      navigate("/home");
    } catch (error) {
      setError(error.message || "Login failed");
    } finally {
      setLoadingLogin(false); 
    }
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
              disabled={!email || loadingEmail}
              onClick={handleEmailCheck}
              className={`w-full mt-6 py-3 rounded-lg font-semibold transition
                ${(!email || loadingEmail)
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#7C3AED] hover:bg-purple-500"}
              `}
            >
              {loadingEmail ? "Processing..." : "Continue"}
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

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            <button
              disabled={!password || loadingLogin}
              onClick={handleLogin}
              className={`w-full mt-6 py-3 rounded-lg font-semibold transition
                ${(!password || loadingLogin)
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#7C3AED] hover:bg-purple-500"}
              `}
            >
              {loadingLogin ? "Processing..." : "Sign In"}
            </button>

            <button
              onClick={() => setStep(1)}
              disabled={loadingLogin}
              className="mt-4 text-sm text-gray-400 hover:text-white disabled:opacity-50"
            >
              ← Change Email
            </button>
          </>
        )}

        {/* Footer Links */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>
            Don't have an account?{" "}
            <Link
              to="/subscribe"
              className="text-[#22D3EE] cursor-pointer hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default SignInPage;