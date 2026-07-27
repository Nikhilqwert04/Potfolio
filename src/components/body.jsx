import React from 'react'
import HeroSection from './body/herosection'
import Work from "./body/work"
import Expertise from "./body/expertise"
import Carrer from "./body/carrer"

const body = () => {
  return (
    <div>
      <HeroSection/>
      <Work/>
      <Expertise/>
      <Carrer/>
    </div>
  )
}

export default body
