import AboutImage from "../assets/AboutBackgroundImage.png"

const About = () => {
    return (
        <div className="w-full">

            <div className="h-64 md:h-80">
                <img
                    src={AboutImage}
                    alt="city"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-5xl mx-auto px-6 py-10">

                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                    Don’t squeeze in a city guide when you could relax.
                </h1>

                <p className="text-gray-700 mb-4">
                    Our mission is to make exploring your city easy and exciting.
                    Whether you're looking for the best restaurants, hotels, or attractions,
                    we’ve got everything in one place.
                </p>

                <p className="text-gray-700 mb-8">
                    We believe traveling and discovering places should be fun, not stressful.
                    That’s why we bring you curated places, real reviews, and simple navigation.
                </p>

                <div className="bg-orange-100 p-6 rounded-xl ">
                    <h2 className="text-xl font-semibold mb-2">
                        Your destination is waiting.
                    </h2>

                    <p className="mb-4">
                        Start exploring places near you today.
                    </p>

                    <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold">
                        Explore Places
                    </button>
                </div>

            </div>

        </div>
    );
};

export default About;