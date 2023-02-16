import React, { useState } from 'react'
import axios from 'axios';
import Faq from './Faq';
const urlserver = "https://p2pserver.vercel.app"
const urltest = "http://localhost:5000"

const Faqsection = () => {

  const [faqlineup, setFaqlineup] = useState([]);

  const refresh = async () => {
    try {
      await axios.get(`${urlserver}/getfaqs`)
        .then((response) => {
          const data = response.data;
          setFaqlineup(data);
        });
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    refresh()
  }, [])

  return (
    <div className="faqsection">
        <div className="faqhead">
          &lt;p2paudit FAQ’s&gt;
        </div>
        <ul className="faqs" id='accordian'>

        {faqlineup.length === 0 ? (
            <div>Loading.....</div>
          ) :
            faqlineup.map((faq) => {
              return (<Faq faq={faq} />)
            })
          }

        </ul>
      </div>
  )
}

export default Faqsection