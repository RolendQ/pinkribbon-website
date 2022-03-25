import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Queries from './components/Queries/Queries'
import Search from './components/Search/Search'
import Contact from './components/Contact/Contact'
import Gallery from './components/Gallery/Gallery'

const App = () => {
  return (
    <>
      <Header />
      <div className='topbar__container'>
        <Search />
        <Nav />
      </div>
      <div className='account__btn'>
        My Account
      </div>
      <Gallery />
      <div>
        <Queries />
      </div>
      <Footer />
      <Contact />
    </>
  )
}

export default App