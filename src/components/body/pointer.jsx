import React from 'react'

const pointer = () => {
  return (
    <div>
          <div
        class="xl:block hidden cursordelay bg-[#cfff45] h-15 w-15 rounded-full fixed transition-all ease-[cubic-bezier(0.22,1,0.36,1)] duration-300 z-20 blur-xl opacity-60 pointer-events-none">
    </div>
    <div class=" hidden cursordelay2 bg-black h-15 w-50  fixed transition-all  duration-200 z-88 pointer-events-none">
        <img src="Project1.jpg" alt="Hi"></img>
    </div>
    <div class=" hidden cursordelay3 bg-black h-15 w-50  fixed transition-all duration-200 z-88 pointer-events-none">
        <img src="Project2.jpg" alt="Hi"></img>
    </div>
    </div>
  )
}

export default pointer
