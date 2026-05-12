import { Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "../context/AuthContext";



const ProtectedRoute = () => {
    const { isLogin } = UseAuth()

    return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;