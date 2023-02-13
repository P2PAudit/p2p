import React from 'react'

const Faqsection = () => {
  return (
    <div className="faqsection">
        <div className="faqhead">
          &lt;p2paudit FAQ’s&gt;
        </div>
        <ul className="faqs" id='accordian'>
          <li>
            <label for="first">
              Who needs a Smart Contract Audit? 
            </label> 
            <input type="checkbox" name='accordian' id='first'/>
            <div className="contentaccordian">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum repellat at laudantium deserunt delectus amet earum vero, optio enim laboriosam voluptatibus voluptates quas sit aliquam distinctio? Eaque, dolore in?</p>
            </div>
          </li>
          <li>
            <label for="second">
            What is the time scale for an audit to complete? 
            </label>
            <input type="checkbox" name='accordian' id='second'/>
            <div className="contentaccordian">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum repellat at laudantium deserunt delectus amet earum vero, optio enim laboriosam voluptatibus voluptates quas sit aliquam distinctio? Eaque, dolore in?</p>
            </div>
          </li>
          <li>
            <label for="third">
            What is a Smart Contract Audit? 
            </label>
            <input type="checkbox" name='accordian' id='third'/>
            <div className="contentaccordian">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum repellat at laudantium deserunt delectus amet earum vero, optio enim laboriosam voluptatibus voluptates quas sit aliquam distinctio? Eaque, dolore in?</p>
            </div>
          </li>
          <li>
            <label for="fourth">
            How much does a smart contract audit cost? 
            </label>
            <input type="checkbox" name='accordian' id='fourth'/>
            <div className="contentaccordian">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum repellat at laudantium deserunt delectus amet earum vero, optio enim laboriosam voluptatibus voluptates quas sit aliquam distinctio? Eaque, dolore in?</p>
            </div>
          </li>
          <li>
            <label for="fivth">
            What Audit process do we follow? 
            </label> 
            <input type="checkbox" name='accordian' id='fivth'/>
            <div className="contentaccordian">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum repellat at laudantium deserunt delectus amet earum vero, optio enim laboriosam voluptatibus voluptates quas sit aliquam distinctio? Eaque, dolore in?</p>
            </div>
          </li>
          <li>
            <label for="sixth">
            What are the differentiating grounds for automated audit & manual audit? 
            </label>
            <input type="checkbox" name='accordian' id='sixth'/>
            <div className="contentaccordian">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem rerum repellat at laudantium deserunt delectus amet earum vero, optio enim laboriosam voluptatibus voluptates quas sit aliquam distinctio? Eaque, dolore in?</p>
            </div>
          </li>
        </ul>
      </div>
  )
}

export default Faqsection