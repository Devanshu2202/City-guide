const Dashboard = () => {
    return (
        <div className="pt-10">

            <div className="bg-orange-50 rounded-xl p-6 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Welcome back!
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Here’s what’s happening with your services today.
                    </p>
                </div>

                <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-semibold transition">
                    View Profile
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                {/* Earnings */}
                <div className="bg-white shadow-md rounded-xl p-6">
                    <p className="text-gray-500">Total Earnings</p>

                    <h2 className="text-3xl font-bold mt-2">
                        ₹48,500
                    </h2>

                    <p className="text-green-600 mt-2 text-sm">
                        +12% this month
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-xl p-6">
                    <p className="text-gray-500">Total Tours</p>

                    <h2 className="text-3xl font-bold mt-2">
                        128
                    </h2>

                    <p className="text-blue-600 mt-2 text-sm">
                        8 new bookings
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-xl p-6">
                    <p className="text-gray-500">Average Rating</p>

                    <h2 className="text-3xl font-bold mt-2">
                        ⭐ 4.9
                    </h2>

                    <p className="text-orange-500 mt-2 text-sm">
                        Based on 312 reviews
                    </p>
                </div>

            </div>

            <div className="bg-white shadow-md rounded-xl p-6 mt-8">

                <h2 className="text-2xl font-semibold mb-4">
                    Recent Activity
                </h2>

                <div className="space-y-4">

                    <div className="flex justify-between border-b pb-3">
                        <p>New booking from Rahul Sharma</p>
                        <span className="text-gray-500 text-sm">
                            2 hours ago
                        </span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <p>You received a 5-star review</p>
                        <span className="text-gray-500 text-sm">
                            Yesterday
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <p>Tour completed successfully</p>
                        <span className="text-gray-500 text-sm">
                            2 days ago
                        </span>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;