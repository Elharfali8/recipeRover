import React from 'react'
import { Link } from 'react-router-dom'

const PageLinks = ({page}) => {
  return (
    <div className='flex items-center flex-wrap gap-4 '>
                  <Link to='/recipes' className={`${page === 'all' ? 'px-4 py-1 rounded-md border border-[#27ae60] hover:text-[#27ae60] text-lg lg:text-xl poppins-medium tracking-wider transition-all ease-in-out duration-150 bg-[#27ae60] text-white hover:bg-white' : 'px-4 py-1 rounded-md border border-[#27ae60] text-[#27ae60] text-lg lg:text-xl poppins-medium tracking-wider transition-all ease-in-out duration-150 hover:bg-[#27ae60] hover:text-white'}`}>All</Link>
                  <Link to='/recipes/popular' className={`${page === 'popular' ? 'px-4 py-1 rounded-md border border-[#27ae60] hover:text-[#27ae60] text-lg lg:text-xl poppins-medium tracking-wider transition-all ease-in-out duration-150 bg-[#27ae60] text-white hover:bg-white' : 'px-4 py-1 rounded-md border border-[#27ae60] text-[#27ae60] text-lg lg:text-xl poppins-medium tracking-wider transition-all ease-in-out duration-150 hover:bg-[#27ae60] hover:text-white'}`}>Popular</Link>
              </div>
  )
}

export default PageLinks