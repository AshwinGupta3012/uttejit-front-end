import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cars from "./pages/Cars";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import Achievements from "./pages/Achievements";
import Admin from "./pages/Admin";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="bg-blackbutnot-0 w-screen">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/team" element={<Team />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
