import React from 'react'
import NewsLayout from '../components/Home/news-layout/NewsLayout'
import HealthSection from '../components/Home/HealthSection'
import Topstories from '../components/Home/Topstories'
import Businsess from '../components/Home/Business'
import World from '../components/Home/World'
import Sciencepol from '../components/Home/Sciencepol'
import ArtsSection from '../components/Home/Artsection'
import Cta from '../components/Home/Cta'
function Home() {
  return (
    <div className='overflow-hidden'>

      <NewsLayout/>
      <HealthSection/>
      <Topstories/>
      <Businsess/>
      <World/>
      <Cta/>
      <Sciencepol/>
      <ArtsSection/>

    </div>
  )
}

export default Home
