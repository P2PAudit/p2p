import { useState } from "react";
import React from 'react'
import axios from "axios";
const urlserver = "https://p2pserver.vercel.app"
const urltest = "http://localhost:5000"

const Contact = () => {

  const [email, setEmail] = useState(null);
  const [message, setMessage] = useState(null);
  const [sending, setSending] = useState(false);

  const sendmessage = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      await axios.post(`${urlserver}/sendquery`, {
        email:email,
        message:message
      })
      setEmail("");
      setMessage("");
      setSending(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form id="connect" onSubmit={sendmessage}>
      <div className="contacthead">
        For any Queries
      </div>
      <div className="contacttext">
        Contact us , we’ll be happy to meet your needs.
      </div>
      <div className="contactfill">
        <input value={email} onChange={(e) => { setEmail(e.target.value) }} className="inputemail" placeholder="Your Email" type="email" id="email" size="30" required />
        <button type="submit" className="contactsubscribe">
          {sending ? <>Sending...</> :<>Send Message</>}
        </button>
      </div>
      <textarea value={message} onChange={(e) => { setMessage(e.target.value) }} className="inputmsg" placeholder="Your Message Here..!" type="text" id="textmsg" size="30" required />
    </form>
  )
}

export default Contact