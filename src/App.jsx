import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Schedule from "./pages/Schedule/Schedule";
import EventHeaderDetails from "./assets/components/EventHeaderDetails/EventHeaderDetails";

const App = () => {
  const baseURL = "/oae-event-programme";
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={baseURL} element={<Home />} />
          <Route path={baseURL + "/our-story"} element={<About />} />
          <Route path={baseURL + "/event-schedule"} element={<Schedule />} />
          <Route path={baseURL + "*"} element={<Home />} />
        </Routes>
        <EventHeaderDetails time="11.30am" date="Sun 21 Nov 2021" venue="London's King Place" location="London" />
      </div>
    </Router>
  );
};

export default App;
