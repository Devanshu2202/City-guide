const Home = () => {
    return (
        <div className="bg-[url('https://source.unsplash.com/1600x900/?city')] bg-cover bg-center w-full h-screen">

            {/* OVERLAY */}
            <div className="bg-black/50 w-full h-full flex items-center">

                {/* CONTENT CONTAINER */}
                <div className="max-w-5xl mx-auto px-6 w-full">

                    <div className="max-w-xl text-white">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            Discover your city like never before
                        </h1>

                        <p className="mb-6 text-lg md:text-xl text-gray-200">
                            Find the best restaurants, hotels, and attractions near you.
                        </p>

                        <button className="bg-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
                            Explore Now
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;