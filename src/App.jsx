import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import TitleSubHome from "./components/EventHeaderTitle/EventHeaderTitle";

const App = () => {
  return (
    <div> 
    <Routes>
      <Route index element={<Home />} />
      <Route path="/our-story" element={<About />} />
      <Route path="/event-schedule" element={<Schedule />} />
      <Route path="/*" element={<Home />} />
    </Routes>

  
  
    </div>

  );
};

export default App;
