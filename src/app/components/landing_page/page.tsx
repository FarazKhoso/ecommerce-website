import React from 'react'
import Hero from '../Hero'
import Feture from './feture'
import Ceramics from './Products/Ceramics';
import Signup from './Signup'

const LandingPage = () => {
  return (
    <div>
      <Hero/>
    <Feture/>
    <Ceramics/>
    <Signup/>
    </div>
  )
}

export default LandingPage
