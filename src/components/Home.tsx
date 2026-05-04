import ImageUrl from "../assets/CityGuideBackgroundImage.avif";

const Home = () => {
    return (
        <div className="relative min-h-screen">

            {/* ✅ Background Image */}
            <img
                src={ImageUrl}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* ✅ Shade */}
            <div className="absolute inset-0 bg-blue-900/50"></div>

            {/* ✅ Content */}
            <div className="relative z-10 flex items-center justify-center text-center text-white min-h-screen px-6">

                <div className="max-w-3xl">

                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm mb-6">
                        Namaste. Welcome to real India.
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Experience India with a{" "}
                        <span className="text-orange-400">Local Friend</span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
                        Overcome language barriers and tourist traps. Connect with verified locals
                        for authentic street food, offbeat temples, and genuine cultural immersion.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold shadow-lg">
                            Find Your LocalBuddy →
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;