import React from 'react'
import logo from '../images/logop2p.png';

const header = () => {
  return (
    <nav>
      <div className="navbar">
          <img src={logo} className="logo" alt="logo" />
          <div className="p2paudit">
            p2paudit.xyz
          </div>
          <div className="sections">
            <div className="sectionh">Connect</div>
            <div className="sectionh">LeaderBoard</div>
            <div className="sectionh">Services</div>
            <div className="sectionh">Reports</div>
            <div className="sectionh">Docs</div>
            <div className="sectionhbtn">
              <div className="register">
                Register
              </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default header