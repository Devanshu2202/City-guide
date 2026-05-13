import { Link } from "react-router-dom";

const ServicesList = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">

            <div className="text-7xl mb-6 animate-bounce">🚧</div>

            <h1 className="text-3xl font-bold text-gray-800 mb-3">
                Under Construction
            </h1>

            <p className="text-gray-500 text-lg mb-8 max-w-md">
                We're working hard to bring your Services page to life.
                Check back soon!
            </p>

            <Link to="/">
                <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl font-semibold shadow-md">
                    ← Go Back Home
                </button>
            </Link>

        </div>
    );
};

export default ServicesList;