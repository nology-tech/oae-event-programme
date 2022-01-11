import { Route, Routes, useParams } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import { useEffect, useState } from "react";

import { getMockEventById } from "./assets/data/data";

const App = () => {
  const { eventId } = useParams();
  const url = `https://oae-mock-api.herokuapp.com/events/${eventId}`;

  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((event) => {
        setEvent(event);
      });
  }, [url]);

  return (
    <Routes>
      <Route index element={<h1>Invalid Route</h1>} />
      <Route path="/:eventId/our-story" element={<About />} />
      <Route path="/:eventId/event-schedule" element={<Schedule />} />
      <Route path="/:eventId/*" element={<Home />} />
      <Route path="*" element={<h1>Invalid Route</h1>} />
    </Routes>
  );
};

export default App;
