import React from 'react'
import { About, Categories, Featured, Hero } from '../components'

const Home = () => {
  return (
    <main className='min-h-screen'>
    <div className='hero-img lg:bg-[#2ecc71]'>
      <Hero />
      </div>
      <div className=''>
        <Categories />
        <Featured />
        <About />
      </div>
</main>
  )
}

export default Home