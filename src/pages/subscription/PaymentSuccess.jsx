import { useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const pidx = new URLSearchParams(window.location.search).get("pidx");

    if (!pidx) {
      navigate("/subscribe");
      return;
    }

    const verify = async () => {
      try {
        const res = await axios.post(
          `${API_URL}/payment/verify`,
          { pidx },
          { withCredentials: true }
        );

        if (!res.data.success) {
          navigate("/subscribe?payment=failed");
          return;
        }

        // ✅ USE THIS (no /profile)
        const user = res.data.user;

        localStorage.setItem("auth", JSON.stringify(user));
        login(user, "cookie");

        navigate("/home");

      } catch (err) {
        navigate("/subscribe?payment=error");
      }
    };

    verify();
  }, []);

  return <p className="text-white text-center mt-20">Verifying payment...</p>;
};

export default PaymentSuccess;