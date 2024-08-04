import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CategoriesBtns from '../components/CategoriesBtns'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../features/recipes/recipesSlice';
import {LoadingCircle, PageLinks, RecipeCard} from '../components'

const Recipes = () => {
    const dispatch = useDispatch()
    const {recipes, isLoading, error} = useSelector((store) => store.recipes)
    const [activeBtn, setActiveBtn] = useState('all');
    const [recipeNum, setRecipeNum] = useState(15)

    const handleBtn = (e) => {
        const query = e.target.getAttribute('data-btn')
        setActiveBtn(query) 
    }

    useEffect(() => {
        dispatch(fetchRecipes({activeBtn, recipeNum}))
    }, [dispatch, activeBtn, recipeNum])

  return (
      <main className='min-h-screen mt-20'>
          <div className="container main-container py-8 lg:py-10" >
              <PageLinks page='all' />
              <div className='h-[2px] w-full bg-[#27ae60] mt-4 lg:mt-8' />
              <div className='grid place-items-center'>
                <CategoriesBtns cat={true} handleBtn={handleBtn} activeBtn={activeBtn} />
              </div>
              <div className='h-[2px] w-full bg-[#27ae60] mb-4 lg:mb-8' />
              {isLoading ? (
                  <div className='grid place-items-center pt-6 lg:pt-9'>
                      <LoadingCircle />
                  </div>
              ) : (
                      <>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                          {recipes?.map((item) => {
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

export default Recipes
