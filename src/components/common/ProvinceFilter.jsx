import { FaGlobeAsia } from "react-icons/fa";

const ProvinceFilter = ({
  provinces,
  activeProvince,
  setActiveProvince,
  planType,
  userProvince,
}) => {
  const globalOption = "Global Movies";
  const provinceList = provinces.filter((p) => p !== globalOption);

  return (
    <div className="mb-8">
      <div className="sticky top-12 z-30 bg-[#0F0F1A]/80 backdrop-blur-md py-4">

        {provinces.includes(globalOption) && (
          <div className="mb-4">
            <button
              onClick={() => {
                setActiveProvince(globalOption);
                localStorage.setItem("activeProvince", globalOption);
              }}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300
                   ${activeProvince === globalOption
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md scale-105"
                  : "bg-[#1C1C2E] hover:bg-purple-700 text-gray-300 hover:scale-105"
                }
            `}
            >
              <FaGlobeAsia className="text-xs sm:text-sm" />
              {globalOption}
            </button>
          </div>
        )}

        {/* DIVIDER */}
        {provinceList.length > 0 && (
          <div className="border-t border-gray-800 mb-4"></div>
        )}

        {provinceList.length > 0 && (
          <h3 className="text-gray-300 text-sm md:text-base font-semibold mb-4 tracking-wide">
            Explore Provinces
          </h3>
        )}

        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-3 border-b border-gray-800">

          {provinceList.map((province) => {
            const isDisabled =
              planType === "standard" && province !== userProvince;

            const isActive = activeProvince === province;

            return (
              <button
                key={province}
                onClick={() => {
                  if (!isDisabled) {
                    setActiveProvince(province);
                    localStorage.setItem("activeProvince", province);
                  }
                }}
                disabled={isDisabled}
                className={`relative px-5 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300
                  
                  ${isActive
                    ? "bg-purple-600 text-white shadow-md scale-105"
                    : isDisabled
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-[#1C1C2E] hover:bg-purple-700 text-gray-300 hover:scale-105"
                  }
                `}
              >
                {province}

                {/* ACTIVE INDICATOR */}
                {isActive && (
                  <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-6 h-[2px] bg-purple-400 rounded-full"></span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProvinceFilter;