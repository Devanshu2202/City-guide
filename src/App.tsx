import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// ── Structural components (always rendered, keep static) ──────────────────────
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import ProtectedRoute from "./components/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext";


const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Buddies = lazy(() => import("./components/Buddies"));
const BuddyDetails = lazy(() => import("./components/BuddyDetails"));
const DashBoard = lazy(() => import("./Pages/Host/DashBoard"));
const Income = lazy(() => import("./Pages/Host/Income"));
const Reviews = lazy(() => import("./Pages/Host/Reviews"));
const ServicesList = lazy(() => import("./Pages/Host/ServiceList"));
const Login = lazy(() => import("./Pages/Host/Login"));


function PageLoader() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
    }}>
      <div style={{
        width: "42px",
        height: "42px",
        border: "4px solid #e5e7eb",
        borderTop: "4px solid #F55A5A",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="buddies" element={<Buddies />} />
              <Route path="buddies/:id" element={<BuddyDetails />} />
              <Route path="host" element={<ProtectedRoute />}>
                <Route path="" element={<HostLayout />}>
                  <Route index element={<DashBoard />} />
                  <Route path="income" element={<Income />} />
                  <Route path="reviews" element={<Reviews />} />
                  <Route path="services" element={<ServicesList />} />
                </Route>
              </Route>
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;