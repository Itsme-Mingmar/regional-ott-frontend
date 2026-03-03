import { useState } from "react";
import ProvinceFilter from "../components/common/ProvinceFilter";
import MovieGrid from "../components/common/MovieGrid";
import ProvinceSection from "../components/common/ProvinceSection";

const provinces = [
  "Global Movies",
  "Koshi",
  "Madesh",
  "Bagmati",
  "Gandaki",
  "Lumbini",
  "Karnali",
  "Sudurpaschim",
];

const HomePage = () => {
  const [activeProvince, setActiveProvince] = useState("Global Movies");

  return (
    <div className="pt-24 px-6 pb-16 bg-[#0F0F1A] min-h-screen text-white">
      <ProvinceFilter
        provinces={provinces}
        activeProvince={activeProvince}
        setActiveProvince={setActiveProvince}
      />

      {activeProvince === "Global Movies" ? (
        <MovieGrid />
      ) : (
        <ProvinceSection province={activeProvince} />
      )}
    </div>
  );
};

export default HomePage;