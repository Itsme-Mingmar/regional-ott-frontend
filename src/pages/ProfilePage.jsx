import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { getUserProfile } from "../services/authService";

const ProfilePage = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getUserProfile();

        setUser(res.data);
      } catch (error) {
        console.error("Profile fetch failed:", error.message);
      }
    };

    fetchProfile();
  }, []);
  const auth = useAuth();
  const handleLogout = async () => {
    try {
      await logoutUser();   // backend + localStorage clear
      auth.logout();        // clear context (important)
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#141427] text-white">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141427] text-white py-24 px-6">

      <div className="max-w-5xl mx-auto">

        {/* PROFILE HEADER */}
        <div className="flex items-center justify-between mb-12">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-6">

            <div className="w-10 h-10 rounded-full bg-purple-700 flex items-center justify-center text-xl font-bold">
              {user.name.charAt(0)}
            </div>

            <div>
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <p className="text-gray-400">{user.email}</p>
            </div>

          </div>

          {/* RIGHT SIDE (LOGOUT BUTTON) */}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-500 px-5 py-2 rounded-lg text-sm font-medium transition text-white/80"
          >
            Logout
          </button>

        </div>

        {/* PROFILE GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* ACCOUNT INFO */}
          <div className="bg-[#1C1C2E] p-8 rounded-xl shadow-lg">

            <h2 className="text-xl font-semibold mb-6">
              Account Information
            </h2>

            <div className="space-y-4 text-gray-300">

              <div className="flex justify-between">
                <span className="text-gray-500">Province</span>
                <span>{user.province}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Email</span>
                <span>{user.email}</span>
              </div>

            </div>

          </div>

          {/* SUBSCRIPTION CARD */}
          <div className="bg-[#1C1C2E] p-8 rounded-xl shadow-lg">

            <h2 className="text-xl font-semibold mb-6">
              Subscription
            </h2>

            <div className="flex items-center justify-between mb-4">

              <span className="text-gray-400">
                Current Plan
              </span>

              <span className="bg-purple-700 px-3 py-1 rounded-lg text-sm capitalize">
                {user.planType}
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-gray-400">
                Status
              </span>

              <span className={`
                ${user.subscriptionStatus ? "text-green-400" : "text-red-400"}
              `}>
                {user.subscriptionStatus ? "Active" : "Inactive"}
              </span>

            </div>

            {/* Upgrade */}
            {user.planType === "standard" && (

              <Link to="/subscribe">

                <button className="mt-6 w-full bg-purple-700 hover:bg-purple-600 py-3 rounded-lg transition">
                  Upgrade to Premium
                </button>

              </Link>

            )}

          </div>

        </div>

        {/* ADMIN PANEL */}
        {user.role == "admin" && (

          <div className="mt-12 bg-[#1C1C2E] p-8 rounded-xl">

            <h2 className="text-xl font-semibold mb-4">
              Admin Panel
            </h2>

            <p className="text-gray-400 mb-6">
              Manage videos, upload content and control platform data.
            </p>

            <Link to="/admin">

              <button className="bg-red-600 hover:bg-red-500 px-6 py-3 rounded-lg transition">
                Go to Admin Dashboard
              </button>

            </Link>

          </div>

        )}

      </div>

    </div>
  );
};

export default ProfilePage;