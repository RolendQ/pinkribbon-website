import React from 'react'
import './queries.css'

const headers = [
  {
    name: 'VrId'
  },
  {
    name: 'Rx Otc Schedule'
  },
  {
    name: 'Generic Name'
  },
  {
    name: 'Product Name'
  },
  {
    name: 'Route'
  },
  {
    name: 'Strength'
  },
  {
    name: 'Dosage Form'
  },
  {
    name: 'Labeler'
  },
  {
    name: 'Market Status'
  },
  {
    name: 'Product Image'
  },
  {
    name: 'Ndc'
  },
  {
    name: 'How Supplied'
  },
  {
    name: 'Vr Brief Name'
  },
  {
    name: 'Awp'
  },
]

const items = new Array(140).fill(null);

const Queries = () => {
  return (
    <div className='queries__container'>
      <div className='queries__grid'>

        {
          headers.map(({name}, index) => {
            return (
              <div className='queries__header'>
                {name}
              </div>
            )
          })
        }

        {items.map((_, idx) => <div className='queries__content'>Content</div>)}
      </div>


      <div className='queries__more__btn'>
        See more
      </div>
      
    </div>
  )
}


export default Queries