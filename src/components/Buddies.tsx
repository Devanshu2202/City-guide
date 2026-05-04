import { useEffect, useState } from "react";

const Buddies = () => {
    const [buddies, setBuddies] = useState([]);

    useEffect(() => {
        const fetchBuddies = async () => {
            try {
                const res = await fetch("https://city-guide-server.onrender.com/api");
                const data = await res.json();

                console.log(data);

                setBuddies(data.buddies);
            } catch (error) {
                console.error("Error fetching buddies:", error);
            }
        };

        fetchBuddies();
    }, []);

    return (
        <div>
            {buddies.map((buddy) => (
                <div key={buddy.id}>
                    <h2>{buddy.name}</h2>
                    <h2>{buddy.age}</h2>
                </div>
            ))}
        </div>
    );
};

export default Buddies;