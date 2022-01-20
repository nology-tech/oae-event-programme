import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import Setting from "./pages/Setting/Setting";

const App = () => {
  return (
    <Routes>
      <Route index element={<h1>Invalid Route</h1>} />
      <Route path="/:eventId/our-story" element={<About />} />
      <Route path="/:eventId/event-schedule" element={<Schedule />} />
      <Route path="/:eventId/home" element={<Home />} />
      <Route path="/:eventId/setting" element={<Setting />} />
      <Route path="*" element={<h1>Invalid Route</h1>} />
    </Routes>
  );
};

export default App;
