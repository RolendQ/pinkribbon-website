import React, { useEffect } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Queries from './components/Queries/Queries'
import Search from './components/Search/Search'
import Contact from './components/Contact/Contact'
import Gallery from './components/Gallery/Gallery'


import useLocalStorage from 'use-local-storage'

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <div className='page' data-theme={theme}>
      <Header />
      <div className='topbar__container'>
        <Search />
        <Nav />
      </div>
      <div className='account__btn'>
        My Account
      </div>
      <button className='theme__btn' onClick={switchTheme}>
        {theme === 'light' ? 'Light' : 'Dark'} Mode
      </button>
      <Gallery />
      <div>
        <Queries />
      </div>
      <Footer />
      <Contact />
    </div>
  )
}

export default App