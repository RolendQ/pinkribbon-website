import React from 'react'
import './gallery.css'
import FDA from '../../assets/fda_approved.jpg'
import KNOWLEDGE from '../../assets/drug_references.jpg'
import POPULAR from '../../assets/popular_deals.jpg'
import FAV from '../../assets/favorites_list.jpg'

const Gallery = () => {
  return (
    <div className='gallery__container'>
        <h3 className='gallery__title'> Shop Categories & Resources </h3>
        <div className='gallery__row'>
            <div className='gallery__box'>
                <span className='gallery__entry'> Newly Approved </span>
                <img className='gallery__box__img' src={FDA} alt=''></img>
            </div>
            <div className='gallery__box'>
                <span className='gallery__entry'> Popular deals </span>
                <img className='gallery__box__img' src={POPULAR} alt=''></img>
            </div>
            <div className='gallery__box'>
                <span className='gallery__entry'> Favorites List </span>
                <img className='gallery__box__img' src={FAV} alt=''></img>
            </div>
            <div className='gallery__box'>
                <span className='gallery__entry'> Knowledge Database </span>
                <img className='gallery__box__img' src={KNOWLEDGE} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Gallery