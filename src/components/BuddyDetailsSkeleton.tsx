const BuddyDetailsSkeleton = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 pt-28 animate-pulse">

            <div className="flex flex-col md:flex-row gap-10">

                <div className="md:w-1/2 h-[400px] bg-gray-300 rounded-xl"></div>

                <div className="md:w-1/2 space-y-4">

                    <div className="h-8 w-48 bg-gray-300 rounded"></div>

                    <div className="h-4 w-24 bg-gray-300 rounded"></div>

                    <div className="h-4 w-32 bg-gray-300 rounded"></div>

                    <div className="h-20 w-full bg-gray-300 rounded"></div>

                    <div className="h-12 w-40 bg-gray-300 rounded"></div>

                </div>

            </div>
        </div>
    );
};

export default BuddyDetailsSkeleton;