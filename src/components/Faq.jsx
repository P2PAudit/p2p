import React from 'react'

const Faq = (props) => {
  return (
    <li>
      <label for={props.faq._id}>
        <b>{props.faq.question}</b>
      </label> 
      <input type="checkbox" name='accordian' id={props.faq._id}/>
      <div className="contentaccordian">
        <p>'{props.faq.answer}'</p>
      </div>
    </li>
  )
}

export default Faq