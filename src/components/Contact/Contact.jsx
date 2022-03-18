import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact__container'>
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
}

export default Contact