<<<<<<< HEAD
import './App.scss';
import Schedule from './containers/Schedule/Schedule';
=======
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Schedule from "./pages/Schedule/Schedule";
>>>>>>> d257424aa15016358c15e7d8dbe6ccd527034629

const App = () => {
  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
       
      </header>
      <Schedule />
    </div>
=======
    <Routes>
      <Route index element={<Home />} />
      <Route path="/our-story" element={<About />} />
      <Route path="/event-schedule" element={<Schedule />} />
      <Route path="/*" element={<Home />} />
    </Routes>
>>>>>>> d257424aa15016358c15e7d8dbe6ccd527034629
  );
};

export default App;
