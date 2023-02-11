import React from 'react'
import logo from '../images/logop2p.svg';
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <nav>
        <div className="navbar" id='home'>
            <Link to='/p2p' className="logo">
              <img src={logo} className="logo" alt="logo" />
              <div className="p2paudit">
                p2paudit.xyz
              </div>
            </Link>
            <div className="sections">
              <a href='#connect' className="sectionh">Connect</a>
              <Link to='/p2p/leaderboard' className="sectionh">LeaderBoard</Link>
              <Link to='/p2p/services' className="sectionh">Services</Link>
              <Link to='/p2p/docs' className="sectionh">Docs</Link>
              <Link to='/p2p/reports' className="sectionh">Reports</Link>
              <Link to='/p2p/help' className="sectionh">Help</Link>
              <Link to='/p2p/register' className="sectionhbtn">
                <div className="register">
                  Earn Rewards
                </div>
              </Link>
            </div>
        </div>
      </nav>
    </>
  )
}

export default header