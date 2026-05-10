import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

const Buddies = () => {
    const { data, loading, error } = useFetch("https://city-guide-server.onrender.com/api")


    const buddies = data?.buddies || [];

    return (
        <div className="p-6  pt-24">

            {/* <h2 className="text-xl font-semibold mb-6">
                Showing {buddies.length} verified buddies
            </h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {buddies?.map((buddy) => (
                    <Link to={`/buddies/${buddy.id}`} key={buddy.id}>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">

                            <div className="relative overflow-hidden aspect-4/3">
                                <img
                                    src={buddy.profile_pic}
                                    alt={buddy.name}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-black/40"></div>

                                <div className="absolute bottom-4 left-4 text-white">
                                    <h2 className="text-lg font-bold">{buddy.name}</h2>
                                    <p className="text-sm">{buddy.city}</p>
                                </div>

                                {buddy.verified && (
                                    <div className="absolute top-3 right-3 bg-white text-green-600 text-xs px-3 py-1 rounded-full">
                                        ✔ Verified
                                    </div>
                                )}
                            </div>

                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <p className="text-orange-500 font-semibold">
                                        ⭐ {buddy.rating} ({buddy.reviews})
                                    </p>

                                    <p className="font-bold text-blue-600">
                                        ₹{buddy.services?.[0]?.price_per_hour}/hr
                                    </p>
                                </div>

                                <p className="text-sm text-gray-500 mt-2">
                                    {buddy.languages?.join(" • ")}
                                </p>
                            </div>

                        </div>

                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Buddies;