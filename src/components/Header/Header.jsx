import React from 'react'
import './header.css'
import LOGO from '../../assets/Logo.jpg'
import {BsTelephone} from 'react-icons/bs'

const Header = () => {
  return (
    <div>
      <div className='header__container'>
        <div className='header__logo'>
          <img className='header__logo__img' src={LOGO} alt=''></img>
        </div>
        <div className='header__title__container'>
          <h3 className='header__title'> VuRoyal.com </h3>
          <span> US Licensed Pharmaceutical Distributor </span>
        </div>
      </div>
      <div className='header__right'>
        <span> 303 Wyman Street, Ste 300, Waltham, MA 02451 </span>
        <span> <BsTelephone /> Tel: 1-781-240-9725 </span>
        <span> Email: customer.service@VuRoyal.com </span>
      </div>
    </div>
  )
}

export default Header