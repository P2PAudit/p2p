import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="contacthead">
        Get in touch with us
      </div>
      <div className="contacttext">
        Contact us for any reason, we’ll be happy to meet your needs.
      </div>
      <div className="contactfill">
        <input className="inputemail" placeholder="Your Email" type="email" id="email" size="30" required />
        <button className="contactsubscribe">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default Contact