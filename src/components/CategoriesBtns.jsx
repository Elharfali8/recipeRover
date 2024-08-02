import React from 'react'
import { categoriesBtns } from '../utils'

const CategoriesBtns = ({ activeBtn, handleBtn, cat }) => {
    
    const newArr = [{ id: 'all', name: 'All', query: 'all' }, ...categoriesBtns]
    

  return (
      <div className='py-8 lg:py-11 flex flex-wrap gap-4 items-center'>
          {cat ? (
              newArr.map((btn) => {
                const { name, id, query } = btn
                return (
                    <button type="button" key={id} className={`px-4 py-1 rounded-md border border-[#2ecc71] text-lg lg:text-xl poppins-medium tracking-wide transition-all ease-in-out duration-150 hover:text-[#3498db] hover:border-[#3498db] ${activeBtn === query && 'bg-[#2ecc71] text-white'}`} data-btn={query} onClick={handleBtn}>
                        {name}
                    </button>
                )
            })
          ) : (
            categoriesBtns.map((btn) => {
                const { name, id, query } = btn
                return (
                    <button type="button" key={id} className={`px-4 py-1 rounded-md border border-[#2ecc71] text-lg lg:text-xl poppins-medium tracking-wide transition-all ease-in-out duration-150 hover:text-[#3498db] hover:border-[#3498db] ${activeBtn === query && 'bg-[#2ecc71] text-white'}`} data-btn={query} onClick={handleBtn}>
                        {name}
                    </button>
                )
            })
          )}
    </div>
  )
}

export default CategoriesBtns