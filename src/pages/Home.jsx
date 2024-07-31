import React from 'react'
import { Featured, Hero } from '../components'

const Home = () => {
  return (
    <main className='min-h-screen'>
    <div className='hero-img lg:bg-[#2ecc71]'>
      <Hero />
      </div>
      <div className=''>
        <Featured />
      </div>
</main>
  )
}

export default Home