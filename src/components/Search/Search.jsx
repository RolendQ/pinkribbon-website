import React from 'react'
import './search.css'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className='search__container'>
      <div className='search__field'>
        Search by number, name or keyword
      </div>
      <div className='search__submit'>
        <AiOutlineSearch />
      </div>
    </div>
  )
}

export default Search