import React from 'react'
import logo from '../images/logop2p.png';
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <nav>
        <div className="navbar">
            <Link to='/p2p' className="logo">
              <img src={logo} className="logo" alt="logo" />
              <div className="p2paudit">
                p2paudit.xyz
              </div>
            </Link>
            <div className="sections">
              <Link to='/p2p/connect' className="sectionh">Connect</Link>
              <Link to='/p2p/leaderboard' className="sectionh">LeaderBoard</Link>
              <Link to='/p2p/services' className="sectionh">Services</Link>
              <Link to='/p2p/reports' className="sectionh">Reports</Link>
              <Link to='/p2p/docs' className="sectionh">Docs</Link>
              <Link to='/p2p/register' className="sectionhbtn">
                <div className="register">
                  Register
                </div>
              </Link>
            </div>
        </div>
      </nav>
    </>
  )
}

export default header