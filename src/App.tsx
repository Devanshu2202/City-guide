import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
import Buddies from "./components/Buddies";
import BuddyDetails from "./components/BuddyDetails"
import HostLayout from "./components/HostLayout";
import DashBoard from "./Pages/Host/DashBoard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import ServicesList from "./Pages/Host/ServiceList";
import HostLogin from "./Pages/Host/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="buddies" element={<Buddies />} />
          <Route path="buddies/:id" element={<BuddyDetails />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="services" element={<ServicesList />} />

          </Route>
          <Route path="host-login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;