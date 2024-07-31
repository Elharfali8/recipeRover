import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { navLinks } from '../utils'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

const Navbar = ({ navIsOpen, handleNav }) => {
    
  return (
      <nav className='w-full fixed top-0 z-[99] h-20 grid place-items-center bg-[#27ae60] text-white'>
          <div className="container main-container flex items-center justify-between">
              <Link to='/'>
                <img src={logo} alt="recipeRover-logo" className='max-w-[150px]' />
              </Link>
              <ul className='hidden lg:flex items-center gap-x-2 '>
                  {navLinks.map((link) => {
                      const { id, title, path } = link
                      return (
                          <li key={id}>
                              <NavLink to={path} className='text-white capitalize px-3 py-1 rounded-md poppins-medium tracking-wide text-lg xl:text-xl transition-all ease-in-out duration-150 hover:text-[#2c3e50]'>
                                  {title}
                              </NavLink>
                          </li>
                      )
                  })}
              </ul>
              <div className='hidden lg:flex items-center gap-x-2'>
                  <Link to='/login' className='bg-white px-4 py-1 rounded-md text-lg xl:text-xl text-[#27ae60] poppins-medium tracking-wide transition-all ease-in-out duration-150 hover:bg-transparent hover:border hover:border-white hover:text-white'>
                      Login
                  </Link>
                  <Link to='/login' className=' px-4 py-1 rounded-md text-lg xl:text-xl hover:text-[#27ae60] poppins-medium tracking-wide transition-all ease-in-out duration-150 hover:bg-white border border-white text-white'>
                      SignIn
                  </Link>
              </div>
              <div className='grid place-items-center lg:hidden'>
                  {navIsOpen ? (
                      <button type="button" onClick={handleNav}>
                      <FaTimes size={27} />
                  </button>
                  ): (
                    <button type="button" onClick={handleNav}>
                    <FaBars size={27} />
                </button>
                  )}
              </div>
          </div>
    </nav>
  )
}

export default Navbar