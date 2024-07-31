import React, { useEffect } from 'react'
import SectionTitle from './SectionTitle'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopular } from '../features/featured/popularSlice'
import Carousel from './Carousel'
import LoadingCircle from './LoadingCircle'

const Featured = () => {
    const {isLoading, popular, error} = useSelector((store) => store.popular)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPopular())
    }, [dispatch])

  return (
      <section className='py-8 lg:py-12'>
          <div className="container main-container">
              <SectionTitle title='popular & top rated' />
              <div className='mt-6 lg:mt-9'>
                  {isLoading ? (
                    <LoadingCircle />
                  ) : (
                    <Carousel data={popular} />
                  )}
              </div>
          </div>
    </section>
  )
}

export default Featured