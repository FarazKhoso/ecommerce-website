import React from 'react'
import Feature from './feature'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";

const Feture = () => {
  return (
    <div className='w-screen md:h-[335px] h-[757px] flex justify-center items-center '>
      
      <div className=" h-[660px] w-[342px] overflow-hidden md:h-full md:w-full lg:h-[260px] lg:w-[1280px]  grid grid-cols-1  md:grid-cols-2 md:grid-rows-5 lg:grid-cols-4 lg:grid-rows-2  ">

<div className='w-[274px] text-[20px] md:w-[300px] mx-auto md:col-span-2 md:row-span-1 lg:col-span-4   '>
    <h4 className=''>What makes our brand different</h4>

  </div>


  <div className='md:row-span-2 '>
    <Feature icon= {<LiaShippingFastSolid/>} 
    heading='Next day as standard'
     paragraph='Order before 3pm and get your order the next day as standard'/>
  </div>

  <div className='md:row-span-2'>
    <Feature icon= {<IoCheckmarkCircleOutline/>} 
    heading='Made by true artisans'
     paragraph='Handmade crafted goods made with real passion and craftmanship'/>
  </div>

  <div>
    <Feature icon= {<CiCreditCard1/>} 
    heading='Unbeatable prices'
     paragraph='For our materials and quality you won’t find better prices anywhere'/>
  </div>

  <div>
    <Feature icon= {<LuSprout/>} 
    heading='Recycled packaging'
     paragraph='We use 100% recycled packaging to ensure our footprint is manageable'/>
  </div>

      </div>
    </div>
  )
}

export default Feture
