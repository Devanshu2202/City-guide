const BuddyCardSkeleton = () => {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">

            <div className="bg-gray-300 h-56 w-full"></div>

            <div className="p-4">
                <div className="flex justify-between items-center">
                    <div className="h-4 w-24 bg-gray-300 rounded"></div>
                    <div className="h-4 w-16 bg-gray-300 rounded"></div>
                </div>

                <div className="h-4 w-32 bg-gray-300 rounded mt-4"></div>
            </div>

        </div>
    );
};

export default BuddyCardSkeleton;