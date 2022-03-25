import React from 'react'
import './gallery.css'

const Gallery = () => {
  return (
    <div className='gallery__container'>
        <h3 className='gallery__title'> Shop Categories & Resources </h3>
        <div className='gallery__row'>
            <div className='gallery__box'>
                Default
            </div>
            <div className='gallery__box'>
                Newly Approved Products
            </div>
            <div className='gallery__box'>
                Popular deals
            </div>
            <div className='gallery__box'>
                Favorites List
            </div>
            <div className='gallery__box'>
                Knowledge Database
            </div>
        </div>
    </div>
  )
}

export default Gallery