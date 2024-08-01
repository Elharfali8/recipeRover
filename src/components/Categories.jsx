import React, { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import { categoriesBtns } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { fetchByCategories } from '../features/category/categoriesSlice'
import {LoadingCircle} from '../components'
import { Link } from 'react-router-dom'

const Categories = () => {
    const { data, isLoading, error } = useSelector((store) => store.categories)
    const dispatch = useDispatch()
    const [activeBtn, setActiveBtn] = useState('vegetarian')

    const handleBtn = (e) => {
        const query = e.target.getAttribute('data-btn')
        setActiveBtn(query)
    }

    useEffect(() => {
        dispatch(fetchByCategories({query: activeBtn}))
    }, [dispatch, activeBtn])

  return (
      <section className='py-8 lg:py-12'>
          <div className="container main-container">
              <SectionTitle title='Recipes with categories' />
              <div className="grid place-items-center">
              <div className='py-8 lg:py-11 flex flex-wrap gap-4 items-center'>
                  {categoriesBtns.map((btn) => {
                      const { name, id, query } = btn
                      return (
                          <button type="button" key={id} className={`px-4 py-1 rounded-md border border-[#2ecc71] text-lg lg:text-xl poppins-medium tracking-wide transition-all ease-in-out duration-150 hover:text-[#3498db] hover:border-[#3498db] ${activeBtn === query && 'bg-[#2ecc71] text-white'}`} data-btn={query} onClick={handleBtn}>
                              {name}
                          </button>
                      )
                  })}
                  </div>
                  {isLoading ? (
                    <div className='grid place-items-center pt-9 lg:pt-12'>
                        <LoadingCircle />
                    </div>
                  ) : (
                          <>
                            <div className='pt-4 lg:pt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                              {data?.map((item) => {
                                  const { id, title, image } = item
                                  return (
                                      <Link key={id} className='rounded-lg overflow-hidden shadow-lg transition-all ease-in-out duration-150 hover:scale-105 hover:shadow-xl'>
                                          <img src={image} alt={title} className='' />
                                          <div className='px-2  py-1'>
                                              <h3 className='text-lg lg:text-xl poppins-medium tracking-wide'>{title}</h3>
                                          </div>
                                      </Link>
                                  )
                        })}
                              </div>
                              <div className='grid place-items-center pt-8 lg:pt-10'>
                                  <Link  className='primary-button    '>
                                      See more
                                  </Link>
                              </div>
                          </>
                  )}
              </div>
              </div>
    </section>
  )
}

export default Categories