import React from 'react'
import { ReactNode } from 'react'



interface CardProps {
icon:ReactNode
heading:string
paragraph:string
}

const Feature: React.FC<CardProps> = ({icon,heading,paragraph}) => {
  return (
    <div>
      <div className='h-[116px] flex flex-col justify-between w-[274px] lg:w-[270px] lg:h-[124px] mx-auto'>
        
        <div className='h-[24px] w-[24px] text-xl' >
        {icon}
          </div>

        <div className='h-[76px] flex flex-col justify-between'>
          <h5>{heading}</h5>
          <p className='text-sm'>{paragraph}</p>
        </div>


      </div>

    </div>
  )
}

export default Feature
