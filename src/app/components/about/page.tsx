import React from 'react'
import Image from 'next/image'
import Feature from '../landing_page/feature'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { LuSprout } from "react-icons/lu";


const About = () => {
  return (
    <div>
        {/* first section */}
    <div className='w-screen h-[385px] md:h-[227px] flex justify-center items-center'>
      <div className='w-[342px] h-[321px] md:w-full md:h-4/5 flex flex-col md:flex-row justify-between md:justify-around md:items-center'>
        <h2 className='text-[32px] md:text-[36px] md:w-[704px] '>A brand built on the love of craftmanship, quality and <br className='md:hidden' /> outstanding customer service</h2>
        <button className='w-full md:w-[192px] bg-[#F9F9F9] h-[56px]'>View our products</button>
      </div>
    </div>


{/* Second Section */}
<div className='h-[628px] w-screen flex flex-col md:flex-row  justify-center items-center gap-6'>

{/* first div */}
<div className='w-[342px] h-[281px] md:h-[478px] md:w-[634px] bg-Dark text-white flex flex-col   justify-around items-center'>

<div className='w-[278px] h-[103px] md:h-[99px] md:w-[495px] md:flex flex-col justify-between'>
    <h1 className='text-xl md:text-[32px]'>It started with a small idea</h1>
    <p className='text-sm md:text-lg'>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
</div>

<div className='w-[278px] md:w-[170px] h-[56px] md:self-start md:mx-16 '>
<button className='w-full h-full bg-[#F9F9F926] '>View collection</button>
</div>

</div>

{/* Second div */}
<div className='w-[342px] h-[259px] md:h-[478px] md:w-[634px]'>
<Image src={'/Image Block.svg'} alt="Yellow Chair" height={259} width={342} className='md:h-full md:w-full' />
</div>

</div>


{/* third section */}

<div className='md:h-[603px] h-[806px] bg-[#F9F9F9] w-screen md:flex'>

<div className=''>
<Image src={'/Image (1).svg'} alt='' height={500} width={390} className='h-[358px] md:h-full md:w-full'/>
</div>

<div className='w-[342px] h-[470px] mx-auto flex flex-col justify-evenly md:h-full md:w-[720px]'>


<div className='w-[274px] h-[84px] md:w-[536px] text-xl md:text-2xl md:font-medium '>
<h4 className='md:w-[461px]'>
Our service isn’t just <br className='md:hidden'/> personal, it’s actually <br className='md:hidden' />
hyper personally exquisite</h4>
</div>

<div className='h-[168px] md:w-[536px] text-sm md:text-[16px] flex flex-col justify-between md:justify-around mx-auto md:-mt-16 md:mb-20 '>
<p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
<p> Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
</div>

<button className='bg-white h-[56px] w-full md:w-[170px]  mx-auto md:mx-20 rounded-md  '>
Get in touch
     </button>

</div>
</div>



{/* Fourth Section */}
<div className='w-screen md:h-[476px] h-[1052px] flex justify-center items-center '>
      
      <div className=" h-full w-[342px] md:h-full md:w-full lg:h-[260px] lg:w-[1280px] grid grid-cols-1  md:grid-cols-2 md:grid-rows-5 lg:grid-cols-4 lg:grid-rows-2 gap-6 md:items-center ">

<div className='w-[274px] text-[20px] md:w-[336px] mx-auto md:col-span-2 md:row-span-2 lg:col-span-4  my-auto md:-mt-4 '>
    <h4 className='md:text-[24px]'>What makes our brand different</h4>

  </div>


  <div className=' bg-[#F9F9F9] h-[196px] md:h-[244px] md:w-[305px] flex justify-center items-center'>
    <Feature icon= {<LiaShippingFastSolid/>} 
    heading='Next day as standard'
     paragraph='Order before 3pm and get your order the next day as standard'/>
  </div>

  <div className=' bg-[#F9F9F9]  h-[196px] md:h-[244px] md:w-[305px] flex justify-center items-center'>
    <Feature icon= {<IoCheckmarkCircleOutline/>} 
    heading='Made by true artisans'
     paragraph='Handmade crafted goods made with real passion and craftmanship'/>
  </div>

  <div className='bg-[#F9F9F9] h-[196px] md:h-[244px] md:w-[305px] flex justify-center items-center'>
    <Feature icon= {<CiCreditCard1/>} 
    heading='Unbeatable prices'
     paragraph='For our materials and quality you won’t find better prices anywhere'/>
  </div>

  <div className='bg-[#F9F9F9] h-[196px] md:h-[244px] md:w-[305px] flex justify-center items-center'>
    <Feature icon= {<LuSprout/>} 
    heading='Recycled packaging'
     paragraph='We use 100% recycled packaging to ensure our footprint is manageable'/>
  </div>

      </div>
    </div>

{/* 5th section */}
<div className=' md:bg-[#F9F9F9]  h-[292px]  md:h-[481px] w-screen flex justify-center items-center'>

<div className='bg-white lg:w-[1273px] lg:h-[362px] flex flex-col justify-around items-center h-full' >

<div className='w-[329px] h-[86px] md:w-[571px] md:h-[114px] flex flex-col justify-between'>
<h4 className='text-xl md:font-medium md:text-[36px]'>Join the club and get the benefits</h4>
<p className='text-sm md:text-[16px] md:w-[470px] text-center'>Sign up for our newsletter and receive exclusive offers on new ranges,pop up stores and more</p>

</div>

<div className='lg:w-[472px] h-14'>

<input type='text' placeholder='your@email.com' className='bg-[#F9F9F9] h-full w-[244px] md:w-[354px] text-center'/>

<button className='bg-Dark h-full w-[118px] text-white'>Sign up</button>

</div>

</div>

 </div>


    </div>
  )
}

export default About
