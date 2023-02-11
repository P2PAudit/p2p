import React from 'react'
import twitter from "../images/twitter.svg"
import discord from "../images/discord.svg"
import telegram from "../images/telegram.svg"
import medium from "../images/medium.svg"
import youtube from "../images/youtube.svg"
import linkedin from "../images/linkedin.svg"
import Contact from './Contact'

const Footer = () => {
  return (
    <>
    <Contact />
    <div className="footer">

      <div className="footersection">
        <div className="footersectionparts">
          <div className="tt">
            For Projects
          </div>
          <div>
            Private Audit
          </div>
          <div>
            Crowdsourced Audit
          </div>
          <div>
            BugBounty
          </div>
        </div>
        <div className="footersectionparts">
          <div className="tt">
            For Auditors
          </div>
          <div>
            Offer Private Audit
          </div>
          <div>
            Join Crowdsourced Audit
          </div>
          <div>
            Join the community
          </div>
        </div>
        <div className="footersectionparts">
          <div className="tt">
            Resources
          </div>
          <div>
            Academy
          </div>
          <div>
            Audit tools
          </div>
          <div>
            FAQ for Projects
          </div>
          <div>
            FAQ for Auditors
          </div>
        </div>
        <div className="footersectionparts">
          <div className="tt">
            Overview
          </div>
          <div>
            Career
          </div>
          <div>
            Contact us
          </div>
          <div>
            About us
          </div>
          <div>
            Privacy and Service Terms
          </div>
          
        </div>
      </div>

      <div className="footericon">
        <img src="" alt="" />
        <div className="p2pfooter">
          p2paudit.xyz
        </div>
      </div>

      <div className="socialmedia">
        <a href="https://twitter.com/p2pAudit" className="socialmedialink" target="_blank">
        <div className="media">
          <img src={twitter} alt="twitter icon" className='iconmedia'/>
          <div className="mediatt">
            Twitter
          </div>
        </div>
        </a>
        <a href="https://discord.gg/ZRWsMpAAPz" className="socialmedialink" target="_blank">
        <div className="media">
          <img src={discord} alt="discord icon" className='iconmedia'/>
          <div className="mediatt">
            Discord
          </div>
        </div>
        </a>
        <a href="https://t.me/p2p_audit" className="socialmedialink" target="_blank">
        <div className="media">
          <img src={telegram} alt="telegram icon" className='iconmedia'/>
          <div className="mediatt">
            Telegram
          </div>
        </div>
        </a>
        <a href="https://p2paudit.medium.com/" className="socialmedialink" target="_blank">
        <div className="media">
          <img src={medium} alt="medium icon" className='iconmedia'/>
          <div className="mediatt">
            Medium
          </div>
        </div>
        </a>
        <a href="" className="socialmedialink" target="_blank">
        <div className="media">
          <img src={youtube} alt="youtube icon" className='iconmedia'/>
          <div className="mediatt">
            Youtube
          </div>
        </div>
        </a>
        <a href="" className="socialmedialink" target="_blank">
        <div className="media">
          <img src={linkedin} alt="linkedin icon" className='iconmedia'/>
          <div className="mediatt">
            LinkedIn
          </div>
        </div>
        </a>
      </div>

    </div>
    <div className="copyright">
      ©2023 p2pAudit. All rights reserved.
    </div>
    </>
  )
}

export default Footer