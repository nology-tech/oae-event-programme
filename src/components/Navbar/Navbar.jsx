import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/images/home.svg';
import AboutIcon from '../../assets/images/info.svg';
import ScheduleIcon from '../../assets/images/schedule.svg';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div>
      <nav> 
        <div>
        <Link 
          to="/event-schedule"><img 
          className="nav__icon" 
          src={ScheduleIcon} 
          alt="schedule icon" />
        </Link>
        <span>SCHEDULE</span>
        </div>
        <div>
        <Link 
          to="/"><img 
          className="nav__icon" 
          src={HomeIcon} 
          alt="home icon" />
        </Link>
        <span>HOME</span>
        </div>
        

        <div>
        <Link 
          to="/our-story"><img 
          className="nav__icon" 
          src={AboutIcon} 
          alt="about icon" />
        </Link>
        <span>ABOUT</span>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
