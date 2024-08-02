import React, { useEffect, useState } from 'react'
import SectionTitle from './SectionTitle'
import { categoriesBtns } from '../utils'
import { useDispatch, useSelector } from 'react-redux'
import { fetchByCategories } from '../features/category/categoriesSlice'
import {CategoriesBtns, LoadingCircle} from '../components'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'

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
              <CategoriesBtns activeBtn={activeBtn} handleBtn={handleBtn} />
                  {isLoading ? (
                    <div className='grid place-items-center pt-9 lg:pt-12'>
                        <LoadingCircle />
                    </div>
                  ) : (
                          <>
                            <div className='pt-4 lg:pt-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                              {data?.map((item) => {
                                  const { id } = item
                                  return (
                                      <RecipeCard key={id} {...item} />
                                  )
                        })}
                              </div>
                              <div className='grid place-items-center pt-8 lg:pt-10'>
                                  <Link  className='primary-button px-4 py-1 text-lg lg:text-xl xl:text-2xl poppins-medium tracking-wide rounded-md transition-all ease-in-out duration-150 hover:bg-[#27ae60]  '>
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