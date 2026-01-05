import React from 'react'
import Hero from '../component/hero.jsx'
import Latestcollection from '../component/Latestcollection.jsx'

import Bestseller from '../component/Bestseller.jsx'
import OurPolicy from '../component/Ourpolicy.jsx'
import NewsLetter from '../component/NewsLetter.jsx'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Latestcollection></Latestcollection>
      <Bestseller/>
      <OurPolicy/>
      <NewsLetter/>
    
    </div>
  )
}

export default Home
