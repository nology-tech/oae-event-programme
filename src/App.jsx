import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";

import { getMockEventById } from "./assets/data/data";

console.log(getMockEventById("6bb8ffe8-6e5e-4abc-be7f-b05b749849cf"));

const App = () => {
  return (
    <Routes>
      <Route index element={<h1>Invalid Route</h1>} />
      <Route path="/:eventId/our-story" element={<About />} />
      <Route path="/:eventId/event-schedule" element={<Schedule />} />
      <Route path="/:eventId/*" element={<Home />} />
    </Routes>

  
  

  );
};

export default App;
