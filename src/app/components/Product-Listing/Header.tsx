import Image from 'next/image'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'

const ProductHeader = () => {
  return (
   <div className=''>
         <div className='h-[146px] md:h-[209px] w-screen '>
   <Image src={'/Frame 143.svg'} alt='' height={209} width={1444} className='hidden md:block'/>
   <Image src={'/Page Headers.svg'} alt='' height={209} width={1444} className='md:hidden'/>
         </div>
   
         <div className='h-[96px] md:h-[64px] w-screen flex justify-between items-center px-6 '>
   
   <div className='hidden md:block'>
   
       <div id='left' className='h-full w-[557px] flex justify-around'>
   
            <div className='flex gap-3 items-center'><p>Category</p> <button><FaCaretDown/></button></div>
            <div className='flex gap-3 items-center'><p>Product type</p> <button><FaCaretDown/></button></div>
            <div className='flex gap-3 items-center'><p>Price</p> <button><FaCaretDown/></button></div>
            <div className='flex gap-3 items-center'><p>Brand</p> <button><FaCaretDown/></button></div>
           
           </div>
            </div>
   
   
           <div id='right' className='md:h-12 md:w-[273px]  w-full flex justify-between'>
   <div className='flex justify-center items-center md:h-full h-[56px] w-[163px] md:w-[83px] rounded-md bg-[#F9F9F9]'>
       <p className='text-sm'>Sorting by:</p>
   </div>
   <div className='md:w-[154px] h-[56px] w-[163px] flex justify-center items-center bg-[#F9F9F9] rounded-md'>
   <div className='flex gap-3 items-center'><p>Date added</p> <button><FaCaretDown/></button></div>
   
   </div>
   
   
           </div>
         </div>
       </div>
  )
}

export default ProductHeader
