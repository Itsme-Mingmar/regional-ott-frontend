const PaymentModal = ({ onClose }) => {
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
          Choose Payment Method
        </h3>

        <img
          src="https://via.placeholder.com/150x80?text=Wallet+Logo"
          alt="Wallet"
          className="mx-auto mb-4"
        />

        <button className="px-6 py-2 bg-purple-700 rounded-lg hover:bg-purple-500 transition">
          Proceed
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;