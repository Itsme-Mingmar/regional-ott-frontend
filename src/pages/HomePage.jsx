import { useState, useEffect } from "react";
import ProvinceFilter from "../components/common/ProvinceFilter";
import MovieGrid from "../components/common/MovieGrid";
import ProvinceSection from "../components/common/ProvinceSection";

const allProvinces = [
  "Global Movies",
  "koshi",
  "madhesh",
  "bagmati",
  "gandaki",
  "lumbini",
  "karnali",
  "sudurpashchim",
];

const HomePage = () => {
  const [activeProvince, setActiveProvince] = useState("Global Movies");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");

    if (storedAuth) {
      const parsedAuth = JSON.parse(storedAuth);
      const userData = parsedAuth.user;

      setUser(userData);

      if (userData.planType === "standard") {
        setActiveProvince(userData.selectedProvince?.slug);
      }
    }
  }, []);

  const isStandard = user?.planType === "standard";
  const provinceSlug = user?.selectedProvince?.slug;

  const provincesToShow = isStandard && provinceSlug
    ? [provinceSlug]
    : allProvinces;
  return (
    <div className="pt-24 px-6 pb-16 bg-[#0F0F1A] min-h-screen text-white">

      <ProvinceFilter
        provinces={provincesToShow}
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