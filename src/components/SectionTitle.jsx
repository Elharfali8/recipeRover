import React from 'react'

const SectionTitle = ({title}) => {
  return (
      <div className='grid place-items-center w-full'>
          <h1 className='gradient-title font-semibold text-2xl capitalize md:text-3xl lg:text-4xl xl:text-5xl tracking-wider'>{title}</h1>
    </div>
  )
}

export default SectionTitle