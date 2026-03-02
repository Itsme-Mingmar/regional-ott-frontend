import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { tourismData } from "../../data/tourism";

const dummyVideos = [
    { id: 1, title: "Cultural Festival", image: "https://picsum.photos/400/250?1" },
    { id: 2, title: "Local Documentary", image: "https://picsum.photos/400/250?2" },
    { id: 3, title: "Mountain Tourism", image: "https://picsum.photos/400/250?3" },
    { id: 4, title: "Village Life", image: "https://picsum.photos/400/250?4" },
    { id: 5, title: "Traditional Dance", image: "https://picsum.photos/400/250?5" },
    { id: 6, title: "Heritage Site", image: "https://picsum.photos/400/250?6" },
];

const Section = ({ title, province }) => {
    const scrollRef = useRef(null);
    const navigate = useNavigate();
    const [isEnd, setIsEnd] = useState(false);

    const checkScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        const atEnd =
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth - 5;

        setIsEnd(atEnd);
    };

    useEffect(() => {
        const container = scrollRef.current;
        container.addEventListener("scroll", checkScroll);
        return () => container.removeEventListener("scroll", checkScroll);
    }, []);

    return (
        <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto pb-4 no-scrollbar"
            >
                {dummyVideos.map((video) => (
                    <div
                        key={video.id}
                        className="min-w-62.5 bg-[#1C1C2E] rounded-xl overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="relative">
                            <img
                                src={video.image}
                                alt={video.title}
                                className="w-full h-40 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition duration-300" />
                        </div>

                        <div className="p-4">
                            <h3 className="text-sm font-medium">{video.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show See All only when scroll ends */}
            {isEnd && (
                <div className="mt-4 text-right">
                    <button
                        onClick={() =>
                            navigate(`/province/${province}/${title.toLowerCase().replace(/\s+/g, "-")}`)
                        }
                        className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-500 transition duration-300"
                    >
                        See All
                    </button>
                </div>
            )}
        </div>
    );
};

const TourismGrid = ({ province }) => {
  const navigate = useNavigate();

  const places = tourismData[province] || [];

  return (
    <div className="mt-16">
      <h2 className="text-xl font-semibold mb-6">
        Explore Beautiful Places in {province}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <div
            key={place.id}
            onClick={() =>
              navigate(`/province/${province}/tourism/${place.slug}`)
            }
            className="group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={place.images[0]}
                alt={place.name}
                className="w-full h-52 sm:h-64 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />
            </div>

            <h3 className="mt-3 text-sm sm:text-base font-medium text-center">
              {place.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProvinceSection = ({ province }) => {
  return (
    <div className="bg-[#141427] p-6 sm:p-8 rounded-2xl">
      <h1 className="text-2xl font-bold mb-2">Explore {province}</h1>
      <p className="text-gray-400 mb-10">
        Regional content curated for you
      </p>

      {/* Video Sections */}
      <Section title="Documentaries" province={province} />
      <Section title="Cultural Highlights" province={province} />

      {/* Unique Tourism Section */}
      <TourismGrid province={province} />
    </div>
  );
};

export default ProvinceSection;