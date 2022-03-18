import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Queries from './components/Queries/Queries'
import Search from './components/Search/Search'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Search />
      <div className='main__container'>
        <Queries />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App