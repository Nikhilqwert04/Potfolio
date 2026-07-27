import React from 'react'
import HeroSection from './body/herosection'
import Work from "./body/work"
import Expertise from "./body/expertise"
import Carrer from "./body/carrer"
import Projects from "./body/projects"

const body = () => {
  return (
    <div>
      <HeroSection/>
      <Work/>
      <Expertise/>
      <Carrer/>
      <Projects/>
    </div>
  )
}

export default body
