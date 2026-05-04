import AboutImage from "../assets/AboutBackgroundImage.png";

const About = () => {
    return (
        <div className="w-full">

            {/* HERO SECTION */}
            <div className="relative h-72 md:h-96">

                <img
                    src={AboutImage}
                    alt="city"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-900/60"></div>

                {/* Text on image */}
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                        Discover Cities with{" "}
                        <span className="text-orange-400">Local Buddies</span>
                    </h1>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-12">

                <h2 className="text-3xl font-bold mb-6 text-center">
                    Don’t squeeze in a city guide when you could relax.
                </h2>

                <p className="text-gray-600 mb-4 text-lg text-center">
                    Our mission is to make exploring your city easy and exciting.
                    Whether you're looking for the best restaurants, hotels, or attractions,
                    we’ve got everything in one place.
                </p>

                <p className="text-gray-600 mb-10 text-lg text-center">
                    We believe traveling and discovering places should be fun, not stressful.
                    That’s why we bring you curated places, real reviews, and simple navigation.
                </p>

                <div className="bg-orange-100 p-8 rounded-2xl shadow-md text-center">

                    <h2 className="text-2xl font-semibold mb-2">
                        Your destination is waiting.
                    </h2>

                    <p className="mb-6 text-gray-700">
                        Start exploring places near you today.
                    </p>

                    <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-lg font-semibold shadow">
                        Explore Places
                    </button>
                </div>

            </div>

        </div>
    );
};

export default About;