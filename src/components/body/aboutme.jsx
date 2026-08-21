import axios from 'axios'
import React, { useEffect } from 'react'

const aboutme = () => {
  return (
    <div>
          <section class="py-12 px-6">
        <div class="text-[#cfff45] text-2xl h-fit w-fit my-7 font-['Brotesk']" id="About">--About ME</div>
        <div class="w-auto h-auto flex justify-center gap-10 flex-wrap">
            <div class="relative group/name">

                <div class="bg-[#cfff45] h-auto rounded-t-3xl overflow-hidden absolute group-hover/name:-translate-y-10 transition-all duration-300 ease-in p-3 text-center left-17">
                    <p class="text-2xl font-extrabold">Nikhil Luthra</p>
                </div> 
                <div class="bg-[#cfff45] h-auto rounded-t-3xl overflow-hidden absolute group-hover/name:-translate-x-40 rotate-270 transition-all duration-300 ease-in p-3 text-center left-1 top-33">
                    <p class="text-2xl font-extrabold">Frontend Developer</p>
                </div>
                <div class="bg-[#cfff45] h-auto rounded-3xl overflow-hidden relative group-hover/name:scale-102 transition-all duration-400 ease-in ">
                    <a href="https://github.com/Nikhilqwert04" target="_blank"><img src="github.png" alt="lo"
                            class="h-5 absolute right-2 top-3 hover:scale-110 transition-all duration-100 ease-in"></img></a>
                    <a href="https://www.linkedin.com/in/nikhilluthra05/" target="_blank"><img src="linkdin.png"
                            alt="lo"
                            class="h-5 absolute right-2 top-10 hover:scale-110 transition-all duration-100 ease-in"></img></a>
                    <a href="http://leetcode.com/u/y7xYRcggrv/" target="_blank"><img src="leetcode.png" alt="lo"
                            class="h-5 absolute right-2 top-18 hover:scale-110 transition-all duration-100 ease-in"></img></a>
                    <img src="PixelNikhil.png" alt="Photo" class="h-80 group/name:scale-1 z-10"></img>

                </div>
            </div>
            <div class="flex flex-col">
                <p class="text-4xl font-extrabold font-outfit text-white"><span class="text-[#cfff45]">Nikhil</span>
                    Luthra</p>
                <div class="max-w-110">
                    <p class="text-white mt-1">I'm a Frontend Developer focused on building responsive and engaging web
                        experiences. Currently working toward becoming a Full Stack Developer, I'm passionate about
                        learning new technologies and creating projects that solve real-world problems.</p>
                </div>
                <p class="mt-5 text-white font-bold">Skills</p>
                <div class="flex gap-2 flex-wrap">
                    <div class="h-10 w-10 rounded-md p-1  border hover:border-[#cfff45]">
                        <img src="html.png" alt="img1" class="h-auto"></img>
                    </div>
                    <div class="h-10 w-10 rounded-md p-1  border hover:border-[#cfff45]">
                        <img src="tailwind.png" alt="img1" class="h-auto"></img>
                    </div>
                    <div class="h-10 w-10 rounded-md p-1  border hover:border-[#cfff45]">
                        <img src="text.png" alt="img1" class="h-auto"></img>
                    </div>
                    <div class="h-10 w-10 rounded-md p-1  border hover:border-[#cfff45]">
                        <img src="vercel.png" alt="img1" class="h-auto"></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default aboutme
