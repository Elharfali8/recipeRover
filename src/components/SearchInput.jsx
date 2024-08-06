import React from 'react'
import { Link } from 'react-router-dom'

const SearchInput = ({inputValue, handleInput, onchangeInput, sub, handleSearch}) => {
    
  return (
      <div className='flex items-center flex-col gap-y-[6px] lg:flex-row  w-full'>
          <input
              type="text"
              className=' w-full focus:outline-none rounded-lg lg:rounded-tr-none lg:rounded-br-none h-[34px] lg:h-[38px] pl-2 text-lg tracking-wide' placeholder='Search for recipes...'
              value={inputValue}
              onChange={sub ? onchangeInput : handleInput}
          />
      {sub ? (
        <button type="button" className='grid place-items-center px-3 bg-[#27ae60] text-white text-lg lg:text-xl -tracking-tighter w-full lg:w-auto h-[34px] lg:h-[38px] rounded-lg lg:rounded-tl-none lg:rounded-bl-none poppins-medium transition-all ease-in-out duration-150 hover:bg-[#2c3e50]' onClick={handleSearch}>
          Search
      </button>
      ) : (
        <Link to='/discover' className='grid place-items-center px-3 bg-[#27ae60] text-white text-lg lg:text-xl -tracking-tighter w-full lg:w-auto h-[34px] lg:h-[38px] rounded-lg lg:rounded-tl-none lg:rounded-bl-none poppins-medium transition-all ease-in-out duration-150 hover:bg-[#2c3e50]' >
        Search
      </Link>
          )}
    </div>
  )
}

export default SearchInput