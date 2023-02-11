import React from 'react'
import ranger from "../images/ranger.svg"
import protocol from "../images/protocol.svg"

const Body = () => {
  return (
    <div>
      <div className='body'>
        Top auditors <span className='bodycompete'>compete</span> here<br />
        to Secure your Protocol
      </div>
      <div className="bodytext">
        Join our 2-Layer-Protection-Plan <br />
        to secure your project
      </div>
      <div className="explorelinks">
        <div className="auditbutton">
          <div>
            Explore Audit Wars
          </div>
        </div>
        <div className="joinbutton">
          <div>
            Get protected
          </div>
        </div>
      </div>
      <div className="card">
        <div className="carditem leftcard">
          <div className="cardicon">
            <img src={ranger} alt="ranger icon" />
          </div>
          <div className="cardtitle">
            For Rangers
          </div>
          <div className="cardtext">
            Hack DeFi, save users from theft, and get paid doing it. Sign up to Immunefi as a hacker.
          </div>
          <div className="cardlink">
            Sign up
          </div>
        </div>
        <div className="carditem rightcard">
          <div className="cardicon">
            <img src={protocol} alt="ranger icon" />
          </div>
          <div className="cardtitle">
            For Protocols
          </div>
          <div className="cardtext">
            Secure your project against catastrophic exploits with DeFi's leading security talent.
          </div>
          <div className="cardlink">
            Learn how
          </div>
        </div>
      </div>
      <div className="upcomingwars">
        Upcoming Audit Wars
      </div>
      <div className="mediumsection">
        <div className="blockmedium">
          <div className='our'>
            Our
          </div>
          <div className="blog">
            Blog
          </div>
          <div className='readonmain'>
            <div className='readon'>
              <div className='readon1'>Read On</div>
              <a href='https://p2paudit.medium.com/' target="_blank" className='mediumcom link'>Medium.com</a>
            </div>
            <div className="mediumicon">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body