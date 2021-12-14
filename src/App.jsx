import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './containers/pages/Home/Home';
import About from './containers/pages/About/About';
import Schedule from './containers/pages/Schedule/Schedule';

const  App = () => {
  const baseURL = "/oae-event-programme";
  return ( 
    <Router>
    <div className="App">
      <Routes>
        <Route path={baseURL} element={<Home />}/>
        <Route path={baseURL +"/our-story"} element={<About/>} />
        <Route path={baseURL + "/event-schedule"} element={<Schedule />} />
        <Route path={baseURL +"*"} element={<Home/>} />
      </Routes>
    </div>
    </Router>
    
  );
};

export default App;
