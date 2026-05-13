import { Link, useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import BuddyDetailsSkeleton from "./BuddyDetailsSkeleton";

interface Service {
    price_per_hour: number;
}

interface Buddy {
    id: string | number;
    name: string;
    city: string;
    profile_pic: string;
    bio: string;
    rating: number;
    reviews: number;
    verified: boolean;
    languages: string[];
    services: Service[];
}

const BuddyDetails = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch<Buddy[]>(`https://city-guide-server.onrender.com/api/buddies/${id}`);

    const buddy = data?.[0];

    if (loading) {
        return <BuddyDetailsSkeleton />;
    }

    if (error) {
        return <h1>Something went wrong</h1>;
    }

    if (!buddy) {
        return <h2 className="text-center mt-10">No buddy found.</h2>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6 pt-28">

            <Link
                to="/buddies"
                className="text-gray-600 hover:underline mb-6 inline-block"
            >
                ← Back to all buddies
            </Link>

            <div className="flex flex-col md:flex-row gap-10">

                <div className="md:w-1/2">
                    <img
                        src={buddy.profile_pic}
                        alt={buddy.name}
                        className="w-full h-[400px] object-cover rounded-xl"
                    />
                </div>

                <div className="md:w-1/2">

                    <h1 className="text-3xl font-bold mb-2">
                        {buddy.name}
                    </h1>

                    <p className="text-gray-800 mb-2">
                        {buddy.city}
                    </p>

                    <p className="text-lg font-semibold mb-4">
                        ₹{buddy.services?.[0]?.price_per_hour}/hr
                    </p>

                    <p className="text-gray-600 mb-4">
                        {buddy.bio}
                    </p>

                    <p className="text-sm text-gray-600 font-bold mb-6">
                        Languages: {buddy.languages?.join(", ")}
                    </p>

                    <button className="bg-black text-white px-6 py-3 rounded-lg">
                        Book this buddy
                    </button>

                </div>

            </div>
        </div>
    );
};

export default BuddyDetails;