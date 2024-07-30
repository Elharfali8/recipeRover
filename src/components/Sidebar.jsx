import React from 'react'
import { navLinks } from '../utils'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ({ navIsOpen, handleNav }) => {
  return (
    <aside className={`
        bg-[#2ecc71] p-6
        ${navIsOpen ? 'fixed inset-0 top-20 z-[99] translate-x-0 h-full transition-all ease-in-out duration-150' : 'fixed inset-0 top-20 translate-x-[-100%] transition-all ease-in-out duration-150 z-0'}
      `}>
          <ul className='grid gap-y-4'>
          {navLinks.map((link) => {
                      const { id, title, path } = link
                      return (
                          <li key={id}>
                              <NavLink to={path} className='text-white capitalize px-3 py-1 rounded-md poppins-medium tracking-wide text-lg xl:text-xl transition-all ease-in-out duration-150 hover:text-[#2c3e50] block hover:pl-4'>
                                  {title}
                              </NavLink>
                          </li>
                      )
                  })}
          </ul>
          <div className='mt-10 grid place-items-center gap-y-2'>
                  <Link to='/login' className=' px-4 py-1 rounded-md text-lg xl:text-xl hover:text-[#27ae60] poppins-medium tracking-wide transition-all ease-in-out duration-150 hover:bg-white border border-white text-white grid place-items-center w-full'>
                      Login
                  </Link>
                  <Link to='/login' className=' px-4 py-1 rounded-md text-lg xl:text-xl hover:text-[#27ae60] poppins-medium tracking-wide transition-all ease-in-out duration-150 hover:bg-white border border-white text-white grid place-items-center w-full'>
                      SignIn
                  </Link>
              </div>
      </aside>
  )
}

export default Sidebar