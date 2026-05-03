import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chat from './components/Chat'
import { Analytics } from '@vercel/analytics/react';
import Favorites from './components/Favorites'

function App() {
  return (
    <>
      <Nav/>
      <div className="pt-24 sm:pt-28 lg:pt-36"></div>
      <Hero/>
      <hr className="mx-5 sm:mx-8 lg:mx-16 xl:mx-28 border-stone-300 mb-8" />
      <Favorites/>
      <hr className="mx-5 sm:mx-8 lg:mx-16 xl:mx-28 border-stone-300 mb-8" />
      <Experience/>
      <hr className="mx-5 sm:mx-8 lg:mx-16 xl:mx-28 border-stone-300 mb-8 mt-8" />
      <Projects/>
      <hr className="mx-5 sm:mx-8 lg:mx-16 xl:mx-28 border-stone-300 mb-8 mt-8" />
      <Contact/>
      <Chat/>
      <Footer/>
      <Analytics/>
    </>
  )
}

export default App
