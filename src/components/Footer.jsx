import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#2ecc71] text-white py-4'>
      <div className='container main-container text-center'>
        <p className='sm:text-lg lg:text-xl xl:text-2xl'>&copy; {new Date().getFullYear()} <span className='poppins-medium tracking-wider'>RecipeRover</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer