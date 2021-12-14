import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './containers/pages/Home/Home';
import About from './containers/pages/About/About';
import Schedule from './containers/pages/Schedule/Schedule';

const  App = () => {
  return ( 
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/our-story" element={<About/>} />
        <Route path="/event-schedule" element={<Schedule />} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </div>
    </Router>
    
  );
};

export default App;
