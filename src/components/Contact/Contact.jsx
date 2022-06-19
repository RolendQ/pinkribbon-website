import React, { useState, useRef, useEffect } from 'react';
import './contact.css'

const Contact = () => {
  const [active, setActive] = useState(0);

  if (active === 1) {
  return (
    <div className='contact__container' style={{width: "20rem"}}>
        <button
            type="button"
            onClick={() => setActive(0)}
            className="contact__button"
          >
            Close
        </button>
        <h3> Contact Us </h3>

        <form className='contact__form'>
                <div>
                    <label className='contact__option-tag'>Name</label>
                    <input type="text" name='name' placeholder="Your Name" required />
                </div>
                <div>
                    <label className='contact__option-tag'>Email</label>
                    <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div>
                    <label className='contact__option-tag'>Message</label>
                    <textarea name="message" rows="7" placeholder="Your Message" required />
                </div>
                <button type="submit" className='contact__submit'>Send Message</button>
            </form>
    </div>
  )
  } else {
    return (
      <div className='contact__container' style={{width: "7.5rem"}}>
        <button
            type="button"
            onClick={() => setActive(1)}
            className="contact__button"
          >
            Open Contact Us
        </button>
      </div>
    )
  }
}

export default Contact