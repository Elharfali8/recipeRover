import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({id, title, image}) => {
  return (
    <Link key={id} className='rounded-lg overflow-hidden shadow-lg transition-all ease-in-out duration-150 hover:scale-105 hover:shadow-xl'>
                                          <img src={image} alt={title} className='object-cover w-full' />
                                          <div className='px-2  py-1'>
                                              <h3 className='text-lg lg:text-xl poppins-medium tracking-wide'>{title}</h3>
                                          </div>
                                      </Link>
  )
}

export default RecipeCard