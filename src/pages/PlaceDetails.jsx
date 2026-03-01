import { useParams } from "react-router-dom";
import { tourismData } from "../data/tourismData";
import { useMemo } from "react";

const PlaceDetails = () => {
  const { slug } = useParams();

  const place = useMemo(() => {
    return tourismData.find((item) => item.slug === slug);
  }, [slug]);

  if (!place) {
    return (
      <div className="min-h-screen bg-[#141427] flex items-center justify-center text-white">
        <h1 className="text-2xl">Place Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#141427] text-white min-h-screen">

      {/* HERO IMAGE */}
      <div className="w-full h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={place.image}
          alt={place.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          {place.name}
        </h1>

        <p className="text-purple-400 mb-6">
          Province: {place.province}
        </p>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-10">
          {place.description}
        </p>

        {/* Extra Sections */}
        <div className="grid sm:grid-cols-2 gap-8">

          <div className="bg-[#1C1C2E] p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">
              Best Time to Visit
            </h3>
            <p className="text-gray-400">{place.bestTime}</p>
          </div>

          <div className="bg-[#1C1C2E] p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">
              How to Reach
            </h3>
            <p className="text-gray-400">{place.howToReach}</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PlaceDetails;