import { useState } from 'react'
import heroImg from '../assets/hero-img.jpg'
import SearchInput from './SearchInput'

const Hero = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  return (
    <section className='min-h-screen grid lg:place-items-center'>
    <div className="container main-container flex items-center justify-center lg:grid lg:grid-cols-2 gap-x-6">
  <div className='flex flex-col items-start justify-center mt-20 lg:mt-0 bg-[#2ecc71] p-8 lg:p-0 rounded-lg lg:rounded-none'>
    <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wide poppins-semibold text-white mb-1 lg:mb-2'>Discover Delicious Recipes</h1>
    <p className='text-lg md:text-xl lg:text-2xl tracking-wide text-gray-200'>Find the best recipes for every meal, any occasion.</p>
    <div className='py-6 lg:py-8 w-full'>
        <SearchInput inputValue={inputValue} handleInput={handleInput} />
        </div>
        </div>
  <div className='hidden lg:grid place-items-center'>
    <img src={heroImg} alt="hero-img" className='rounded-2xl' />
        </div>
    </div>
</section>
  )
}

export default Hero