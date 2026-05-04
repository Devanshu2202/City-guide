import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Layout from "./components/Layout";
import Buddies from "./components/Buddies";
import BuddyDetails from "./components/BuddyDetails"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="buddies" element={<Buddies />} />
          <Route path="buddies/:id" element={<BuddyDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;