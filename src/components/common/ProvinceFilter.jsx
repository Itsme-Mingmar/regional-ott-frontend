const ProvinceFilter = ({
  provinces,
  activeProvince,
  setActiveProvince,
  planType,
  userProvince,
}) => {
  return (
    <div className="mb-10">
      <div className="flex gap-4 min-w-max">
        {provinces.map((province) => {
          const isDisabled =
            planType === "standard" && province !== userProvince;

          return (
            <button
              key={province}
              onClick={() => {
                if (!isDisabled)
                  setActiveProvince(province);
                  localStorage.setItem("activeProvince", province);

              }}
              disabled={isDisabled}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${activeProvince === province
                  ? "bg-linear-to-r from-purple-600 to-pink-500 text-white shadow-lg scale-105"
                  : isDisabled
                    ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                    : "bg-[#1C1C2E] hover:bg-purple-700"
                }`}
            >
              {province}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProvinceFilter;