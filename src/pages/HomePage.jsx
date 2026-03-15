import { useState, useEffect } from "react";
import ProvinceFilter from "../components/common/ProvinceFilter";
import MovieGrid from "../components/common/MovieGrid";
import ProvinceSection from "../components/common/ProvinceSection";

const allProvinces = [
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      // For standard plans, default to the user's province (keeps UI consistent)
      if (parsedUser.planType === 'standard') {
        setActiveProvince(parsedUser.province);
      }
    }
  }, []);

  const isStandard = user?.planType === 'standard';
  const userProvince = user?.province;

  useEffect(() => {
    if (isStandard && userProvince && activeProvince !== userProvince) {
      setActiveProvince(userProvince);
    }
  }, [isStandard, userProvince, activeProvince]);

  return (
    <div className="pt-24 px-6 pb-16 bg-[#0F0F1A] min-h-screen text-white">
      <ProvinceFilter
        provinces={allProvinces}
        activeProvince={activeProvince}
        setActiveProvince={setActiveProvince}
        planType={user?.planType}
        userProvince={user?.province}
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