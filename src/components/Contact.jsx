import React from 'react'

const Contact = () => {
  return (
    <div id="connect" >
      <div className="contacthead">
        For any Queries
      </div>
      <div className="contacttext">
        Contact us , we’ll be happy to meet your needs.
      </div>
      <div className="contactfill">
        <input className="inputemail" placeholder="Your Email" type="email" id="email" size="30" required />
        <button className="contactsubscribe">
          Send Message
        </button>
      </div>
      <textarea className="inputmsg" placeholder="Your Message Here..!" type="text" id="textmsg" size="30" required />
    </div>
  )
}

export default Contact