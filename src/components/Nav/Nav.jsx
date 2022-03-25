import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className='nav__container'>
      <div className='nav__section'>
        Orders
      </div>
      <div className='nav__section'>
        List
      </div>
      <div className='nav__section'>
        Support
      </div>
      <div className='nav__section'>
        Savings
      </div>
      <div className='nav__section'>
        Billing
      </div>
    </div>
  )
}

export default Nav