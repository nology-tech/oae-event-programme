import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
import TitleSubHome from "./components/TitleAndSubHome/TitleAndSubHome";

const App = () => {
  return (
    <div> 
    <Routes>
      <Route index element={<Home />} />
      <Route path="/our-story" element={<About />} />
      <Route path="/event-schedule" element={<Schedule />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    <TitleSubHome subtitle = "Can You Hear The Shape of The Drum?" title=  "BACH, THE UNIVERSE & EVERYTHING"/>
  
  
    </div>

  );
};

export default App;
