import { useNavigate } from "react-router-dom";

const HostLogin = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        navigate("/host");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 pt-20">

            <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-10">

                <h1 className="text-4xl font-bold text-center text-slate-900">
                    Host Portal
                </h1>

                <p className="text-center text-gray-500 mt-3">
                    Welcome back, LocalBuddy.
                </p>

                <form onSubmit={handleLogin} className="mt-10 space-y-6">

                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="rajesh.localbuddy@gmail.com"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-gray-700">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-xl font-semibold shadow-md"
                    >
                        Secure Login
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-8">
                    Just click Login to simulate the demo host profile.
                </p>

            </div>

        </div>
    );
};
export default HostLogin;