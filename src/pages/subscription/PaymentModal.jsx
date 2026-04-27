import { useState } from "react";
import khalti from "../../assets/images/khalti.png";

const PaymentModal = ({ onClose, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleProceed = async () => {
    if (loading) return; // prevent double click

    setLoading(true);

    try {
      await onSuccess(); // assume this is async (API/payment call)
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-cardBg p-8 rounded-xl text-center relative w-80">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h3 className="text-xl font-semibold mb-4">
          Payment Method
        </h3>

        <img
          src={khalti}
          alt="Khalti Wallet"
          className="mx-auto mb-4"
        />

        <button
          onClick={handleProceed}
          disabled={loading}
          className={`px-6 py-2 rounded-lg transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-purple-700 hover:bg-purple-500"
          }`}
        >
          {loading ? "Processing..." : "Proceed"}
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;