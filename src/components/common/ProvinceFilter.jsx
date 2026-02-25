const ProvinceFilter = ({ provinces, activeProvince, setActiveProvince }) => {
  return (
    <div className="mb-10">
      <div className="flex gap-4 min-w-max">
        {provinces.map((province) => (
          <button
            key={province}
            onClick={() => setActiveProvince(province)}
            className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
              activeProvince === province
                ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-lg scale-105"
                : "bg-[#1C1C2E] hover:bg-purple-700"
            }`}
          >
            {province}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProvinceFilter;