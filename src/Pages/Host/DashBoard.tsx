const Dashboard = () => {
    return (
        <section className="min-h-screen bg-orange-50 p-6">
            {/* Welcome Section */}
            <div className="bg-orange-200 p-6 rounded-2xl mb-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    Welcome back, Devanshu!
                </h1>

                <p className="text-gray-700 mt-2">
                    Here’s what’s happening with your buddies today.
                </p>

                <button className="mt-4 bg-black text-white px-5 py-2 rounded-lg">
                    Explore Buddies
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-5">
                <div className="bg-white p-5 rounded-2xl shadow-sm">
                    <h2 className="text-gray-500 text-sm">Total Buddies</h2>
                    <p className="text-3xl font-bold mt-2">128</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm">
                    <h2 className="text-gray-500 text-sm">Trips Planned</h2>
                    <p className="text-3xl font-bold mt-2">24</p>
                </div>

                <div className="bg-white p-5 rounded-2xl shadow-sm">
                    <h2 className="text-gray-500 text-sm">Messages</h2>
                    <p className="text-3xl font-bold mt-2">56</p>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-2xl shadow-sm mt-6">
                <h2 className="text-2xl font-semibold mb-4">
                    Recent Activity
                </h2>

                <div className="space-y-4">
                    <div className="flex justify-between border-b pb-3">
                        <p>Rahul joined your Goa trip.</p>
                        <span className="text-gray-500">2h ago</span>
                    </div>

                    <div className="flex justify-between border-b pb-3">
                        <p>A new buddy sent you a request.</p>
                        <span className="text-gray-500">5h ago</span>
                    </div>

                    <div className="flex justify-between">
                        <p>Your Manali trip is trending.</p>
                        <span className="text-gray-500">1d ago</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;