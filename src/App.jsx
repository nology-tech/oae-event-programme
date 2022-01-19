import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Routes>
      <Route index element={<ErrorPage />} />

      <Route path="/:eventId/our-story" element={<About />} />

      <Route path="/:eventId/event-schedule" element={<Schedule />} />

      <Route path="/:eventId/home" element={<Home />} />

      <Route path="/:eventId" element={<Home />} />

      {/* <Route path="/:eventId/settings" element={<Settings />} /> */}

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
