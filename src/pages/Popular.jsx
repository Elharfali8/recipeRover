import React, { useEffect } from 'react'
import { LoadingCircle, PageLinks, RecipeCard } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopular } from '../features/featured/popularSlice'

const Popular = () => {
    const { popular, isLoading, error } = useSelector((store) => store.popular)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPopular())
    }, [dispatch])

  return (
    <main className='min-h-screen mt-20'>
          <div className="container main-container py-8 lg:py-10" >
              <PageLinks page='popular' />
              <div className='h-[2px] w-full bg-[#27ae60] mt-4 lg:mt-8' />
              {isLoading ? (
                  <div className='grid place-items-center pt-6 lg:pt-9'>
                      <LoadingCircle />
                  </div>
              ) : (
                      <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-6'>
                          {popular?.map((item) => {
                              const { id } = item
                              return (
                                  <RecipeCard key={id} {...item} />
                              )
                          })}
                          </div>
                          <div className='pt-5 lg:pt-8 flex items-center justify-end'>
                              
                          </div>
                      </>
              )}
          </div>
          </main>
  )
}

export default Popular