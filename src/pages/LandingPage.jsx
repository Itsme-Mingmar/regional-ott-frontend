import { FaPlay, FaBolt, FaFilm, FaMobileAlt } from "react-icons/fa";

const LandingPage = () => {
    return (
        <div className="pt-20 bg-black">

            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center text-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4')",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primaryBg/80 to-primaryBg" />

                <div className="relative z-10 max-w-3xl px-6">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                        Stream the Best Regional Stories
                    </h1>
                    <p className="text-gray-300 text-lg mb-8">
                        Discover exclusive movies and shows from your region — anytime,
                        anywhere.
                    </p>

                    <button className="px-8 py-3 bg-accent bg-purple-700 hover:bg-purple-600 rounded-lg text-lg font-semibold transition duration-300 shadow-lg shadow-accent/40 cursor-pointer">
                        Subscribe Now
                    </button>
                </div>
            </section>

            {/* WHAT'S NEW */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-accent">What's</span> New
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-15">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            key={item}
                            className="rounded-xl overflow-hidden transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-highlight/40"
                        >
                            <img
                                src={`https://picsum.photos/200/200`}
                                alt="movie"
                                className="w-full h-72 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* REASONS TO JOIN */}
            <section className="bg-cardBg py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Why Join Us</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 bg-primaryBg rounded-xl hover:shadow-lg hover:shadow-highlight/40 transition">
                            <FaFilm className="text-accent text-4xl mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-3">
                                Exclusive Content
                            </h3>
                            <p className="text-gray-400">
                                Watch original regional movies and shows you won't find
                                anywhere else.
                            </p>
                        </div>

                        <div className="p-8 bg-primaryBg rounded-xl hover:shadow-lg hover:shadow-highlight/40 transition">
                            <FaBolt className="text-accent text-4xl mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-3">
                                Fast Streaming
                            </h3>
                            <p className="text-gray-400">
                                Enjoy smooth, high-quality streaming across all devices.
                            </p>
                        </div>

                        <div className="p-8 bg-primaryBg rounded-xl hover:shadow-lg hover:shadow-highlight/40 transition">
                            <FaMobileAlt className="text-accent text-4xl mb-4 mx-auto" />
                            <h3 className="text-xl font-semibold mb-3">
                                Watch Anywhere
                            </h3>
                            <p className="text-gray-400">
                                Stream on mobile, tablet, laptop, or smart TV anytime.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;