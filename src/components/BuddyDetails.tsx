import { useParams } from "react-router-dom";
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
        <div className="max-w-5xl mx-auto p-6 pt-30" >

            < div className="relative overflow-hidden aspect-4/3" >
                <img
                    src={buddy.profile_pic}
                    alt={buddy.name}
                    className="w-full h-full object-cover rounded-2xl"
                />

                < div className="absolute inset-0 bg-black/30 rounded-2xl" > </div>

                <h1 className="absolute bottom-6 left-6 text-3xl font-bold text-white" >
                    {buddy.name}
                </h1>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-6 mt-6" >

                <p className="text-gray-500 text-lg" > {buddy.city} </p>

                < div className="flex justify-between items-center mt-4" >
                    <p className="text-lg" >
                        ⭐ {buddy.rating} ({buddy.reviews_snapshot[0].rating
                        })
                    </p>

                    < p className="text-xl font-bold text-orange-500" >
                        ₹{buddy.services?.[0]?.price_per_hour}/hr
                    </p>
                </div>

                < p className="mt-4 text-gray-600" >
                    Languages: {buddy.languages?.join(", ")}
                </p>

                {/* <div className="flex flex-wrap gap-2 mt-4" >
                    {
                        buddy.tags?.map((tag, i) => (
                            <span
                                key={i}
                                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
                            >
                                {tag}
                            </span>
                        ))
                    }
                </div> */}

                <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold" >
                    Book This Buddy
                </button>
            </div>
        </div>
    );
};

export default BuddyDetails;