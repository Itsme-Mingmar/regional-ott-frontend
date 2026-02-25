import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
                        className="min-w-[250px] bg-[#1C1C2E] rounded-xl overflow-hidden transition duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="relative">
                            <img
                                src={video.image}
                                alt={video.title}
                                className="w-full h-[160px] object-cover"
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

const ProvinceSection = ({ province }) => {
    return (
        <div className="bg-[#141427] p-8 rounded-2xl">
            <h1 className="text-2xl font-bold mb-2">Explore {province}</h1>
            <p className="text-gray-600 mb-8">Regional content curated for you</p>

            <Section title="Documentaries" province={province} />
            <Section title="Cultural Highlights" province={province} />
            <Section title="Tourism Places" province={province} />
        </div>
    );
};

export default ProvinceSection;