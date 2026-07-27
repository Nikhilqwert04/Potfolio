import React from 'react'
import HeroSection from './body/herosection'
import Work from "./body/work"
import Expertise from "./body/expertise"
import Carrer from "./body/carrer"
import Projects from "./body/projects"
import Pointer from './body/pointer'
import Aboutme from './body/aboutme'
import Quotes from './body/qutes'

const body = () => {
  return (
    <div>
      <HeroSection/>
      <Work/>
      <Expertise/>
      <Carrer/>
      <Projects/>
      <Aboutme/>
      <Pointer/>
      <Quotes/>
    </div>
  )
}

export default body
