import React, { useState } from 'react'

const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setHasToggled(true);
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      setHasToggled(true);
    }
  };

  return (
    
    <nav className="relative w-full">
        <div 
            className="z-20 w-[90vw] mt-auto my-3 rounded-full h-16 bg-[#1a1a1a]/20 backdrop-blur-md  border border-[#676363] flex flex-col items-center  fixed left-1/2 -translate-x-1/2 top-5 md:shadow-[0_4px_0_0_rgba(166,209,47,0.4)]" 
            id="manv"
            style={hasToggled ? { animation: isOpen ? "mobileMenuOpen .6s ease forwards" : "mobileMenuClose .6s ease forwards" } : {}}
        >
            <div className=" h-16 flex items-center justify-between pl-3 w-full  top-0 rounded-full px-5">

                <div className=" w-auto flex items-center ">
                    <a href="#UP" className="text-2xl text-[#f0f0f0] font-[Brotesk] ">Nikhil</a>
                    <span className="text-5xl text-[#cfff45] mb-7 sm:blur-[1px] hover:blur-[0]">.</span>
                </div>

                <div className="flex items-center gap-10 text-md max-[623px]:gap-2 ">
                    <a href="#About"
                        className=" sample1 cursor-pointer text-[#776e6e] transition-all duration-150 active:text-sm active:text-[#f0f0f0] active:border-[#cfff45] active:border-b-2">ABOUT</a>
                    <a href="#Work"
                        className="sample1 cursor-pointer text-[#776e6e]  transition-all duration-150   active:text-[#f0f0f0] active:border-[#cfff45] active:border-b-2">WORK</a>
                    <a href="#Expertise"
                        className="sample1 cursor-pointer text-[#776e6e] transition-all duration-150  active:text-sm max-[553px]:hidden  active:text-[#f0f0f0] active:border-[#cfff45] active:border-b-2">EXPERTISE</a>
                    <a href="#Contact"
                        className="sample1 cursor-pointer text-[#776e6e] transition-all duration-150  active:text-sm  max-[700px]:hidden active:text-[#f0f0f0] active:border-[#cfff45] active:border-b-2">CONTACT
                    </a>
                    <i
                        onClick={toggleMenu}
                        className="fa-solid fa-bars nav text-[#776e6e] text-2xl pl-4 hidden! max-[702px]:block! active:text-[#cfff45] transition-all duration-100 cursor-pointer"></i>
                </div>

                <button
                    className="group discoverbtn font-bold w-29 hover:w-32 h-8  cursor-pointer rounded-lg bg-neutral-100 p-3 text-neutral-500 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none sm:p-[10px] dark:bg-[#cfff45] dark:text-[#131313] dark:shadow-[0_4px_0_0_#a1c13d] dark:hover:shadow-[0_2px_0_0_#a1c13d] dark:active:shadow-none hidden md:block relative">
                    <span className="absolute left-2 top-1.5">Discover</span><span
                        className="discovericon absolute left-20 top-2 hidden group-hover:block"><i
                            className="fa-solid fa-arrow-down"></i></span><span
                        className="absolute right-2 top-1.5">Me</span>
                </button>
            </div>
            <div className="flex flex-col justify-center content-center items-center overflow-hidden" id="main">
                <a href="#About"
                    onClick={closeMenu}
                    className="sample1 cursor-pointer text-[#cfff45] font-extrabold text-2xl py-4 transition-all duration-150 active:text-sm active:text-[#f0f0f0] active:border-[#cfff45] active:border-b-2 ">ABOUT
                </a>

                <a href="#Work"
                    onClick={closeMenu}
                    className="sample1 cursor-pointer text-[#cfff45] font-extrabold text-2xl py-4 transition-all duration-150 active:text-sm active:text-[#f0f0f0] active:border-[#cfff45] active:border-b-2 ">WORK
                </a>

                <a href="#Expertise"
                    onClick={closeMenu}
                    className="sample1 cursor-pointer text-[#cfff45] font-extrabold text-2xl py-4 transition-all duration-150 active:text-sm active:text-[#f0f0f0] active:border-[#cfff45] active:border-b-2 ">EXPERTISE
                </a>

                <a href="#Contact"
                    onClick={closeMenu}
                    className="sample1 cursor-pointer text-[#cfff45] font-extrabold text-2xl py-4 transition-all duration-150 active:text-sm active:text-[#f0f0f0] active:border-[#cfff45] active:border-b-2 ">CONTACT
                </a>
            </div>
        </div>
    </nav>
  )
}

export default navbar
