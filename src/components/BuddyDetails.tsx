import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BuddyDetails = () => {
    const { id } = useParams();
    const [buddy, setBuddy] = useState(null);

    useEffect(() => {
        const fetchBuddy = async () => {
            const res = await fetch(
                `https://city-guide-server.onrender.com/api/buddies/${id}`
            );
            const data = await res.json();

            console.log("data", data)

            setBuddy(data[0]);
        };

        fetchBuddy();
    }, [id]);

    if (!buddy) return <h2 className="text-center mt-10" > Loading...</h2>;

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

                    <p className="text-gray-500 mb-2">
                        {buddy.city}
                    </p>

                    <p className="text-lg font-semibold mb-4">
                        ₹{buddy.services?.[0]?.price_per_hour}/hr
                    </p>

                    <p className="text-gray-600 mb-4">
                        {buddy.bio}
                    </p>

                    <p className="text-sm text-gray-500 mb-6">
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