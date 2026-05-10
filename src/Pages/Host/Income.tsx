const Income = () => {
    return (
        <div className="pt-10">

            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Income
                </h1>

                <p className="text-gray-500 mt-2">
                    Last 30 days
                </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 mt-8">

                <p className="text-gray-600 text-lg">
                    Total Income
                </p>

                <h2 className="text-5xl font-bold mt-2">
                    ₹48,500
                </h2>

            </div>

            <div className="mt-10">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">
                        Your Transactions
                    </h2>

                    <p className="text-gray-500">
                        Last 30 days
                    </p>
                </div>

                <div className="space-y-4">

                    <div className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">
                                Heritage Walk Tour
                            </h3>

                            <p className="text-sm text-gray-500">
                                12 April 2026
                            </p>
                        </div>

                        <p className="text-xl font-bold text-orange-500">
                            ₹3,500
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">
                                Street Food Experience
                            </h3>

                            <p className="text-sm text-gray-500">
                                9 April 2026
                            </p>
                        </div>

                        <p className="text-xl font-bold text-orange-500">
                            ₹2,200
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-5 flex justify-between items-center">
                        <div>
                            <h3 className="font-semibold">
                                Temple Tour
                            </h3>

                            <p className="text-sm text-gray-500">
                                5 April 2026
                            </p>
                        </div>

                        <p className="text-xl font-bold text-orange-500">
                            ₹4,100
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Income;