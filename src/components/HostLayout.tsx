import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
    return (
        <div className="p-6 pt-24">

            <nav className="flex gap-6 font-medium text-gray-700 mb-6">

                <NavLink
                    to="/host"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? "text-orange-500 font-semibold underline underline-offset-4"
                            : "hover:text-orange-500"
                    }
                >
                    Dashboard
                </NavLink>

                <NavLink to="income" className={({ isActive }) =>
                    isActive ? "text-orange-500 font-semibold underline underline-offset-4" : "hover:text-orange-500"
                }>
                    Income
                </NavLink>

                <NavLink to="services" className={({ isActive }) =>
                    isActive ? "text-orange-500 font-semibold underline underline-offset-4" : "hover:text-orange-500"
                }>
                    Services
                </NavLink>

                <NavLink to="reviews" className={({ isActive }) =>
                    isActive ? "text-orange-500 font-semibold underline underline-offset-4" : "hover:text-orange-500"
                }>
                    Reviews
                </NavLink>

            </nav>

            <Outlet />
        </div>
    );
};

export default HostLayout;