import React from 'react'

const herosection = () => {
  return (
    <div>
      <section id="UP">
        <div class="flex flex-wrap h-auto mt-22">
            <div class="h-auto w-auto mx-auto min-[1364px]:w-[40vw] relative">
                <div
                    class="h-14 w-15 bg-[#1a1a1a] border border-[#9b979772] rounded-2xl flex justify-center items-center absolute p-3 ml-2 bottom-50 animate-[float_7s_ease-in-out_infinite] max-[530px]:h-[10vw] max-[530px]:w-[10vw] max-[500px]:p-[2vw]">
                    <img src="/diamond.png" alt="diamond" class=""></img>
                </div>
                <div
                    class="h-14 w-15 bg-[#1a1a1a] border border-[#9b979772] rounded-2xl flex justify-center items-center absolute p-3 ml-2 right-16 top-16 animate-[float_4s_ease-in-out_infinite] max-[530px]:h-[10vw] max-[530px]:w-[10vw] max-[500px]:p-[2vw]">
                    <img src="/lightning.png" alt="lightning icon" class=""></img>
                </div>
                <div
                    class="h-14 w-15 bg-[#1a1a1a] border border-[#9b979772] rounded-2xl flex justify-center items-center absolute p-3 ml-2 right-11 bottom-30 animate-[float_3s_ease-in-out_infinite] max-[530px]:h-[10vw] max-[530px]:w-[10vw] max-[500px]:p-[2vw]">
                    <img src="/web-development.png" alt="web development icon" class=""></img>
                </div>
                <div
                    class="h-16 w-55 bg-[#1a1a1a]/20 backdrop-blur-xl gap-3 border border-[#9b979772] rounded-2xl flex justify-center items-center absolute p-3 ml-2 left-0 bottom-0 animate-[float_8s_ease-in-out_infinite] max-[530px]:h-[15vw] max-[530px]:w-[55vw] max-[500px]:p-[2vw]">
                    <i class="fa-solid fa-circle text-green-500 animate-[live_1s_ease-in-out_infinite]"></i>
                    <p class="text-[#908181]">Developing Frontend</p>
                </div>
                <img src="/PixelNikhil.png" alt="Profile" class="bg-cover w-auto"></img>
            </div>

            <div class="border-b-3 border-[#151515] w-auto h-[50vh] self-center">
                <div class="max-w-[90vw] overflow-hidden h-[90vh]">
  
                    <h2
                        class=" w-40 h-7.5 flex justify-center bg-green-400/25 text-sm font-bold gap-2 ml-4 mt-6 pt-1 text-[#9ebe3f] rounded-full border-[0.5px] border-[#9ebe3f]">
                        <i
                            class="fa-solid fa-circle text-[10px] mt-1.5 text-[#9ebe3f81] animate-[live_1s_ease-in-out_infinite]"></i>
                        Working on Skills
                    </h2>

                    <div
                        class="ml-5 mt-7 text-[87px] text-[#f0f0f0] leading-[75px] max-[813px]:text-[10vw] max-[813px]:leading-[10vw] ">
                        <h1 class="font-[Brotesk]">Code.</h1>
                        <h1 class="font-[Brotesk] text-[#cfff45]">
                            Design.</h1>
                        <h1 class="font-[Brotesk]">Innovation.</h1>
                    </div>

                    <div class=" m-6 text-[#778888] text-wrap">
                        <p>UI/UX Designer & Frontend Developer. I turn complex problems into elegant, intuitive
                            products.</p>
                    </div>
                    <div class="flex mt-10 ml-5 w-auto">
                        <button
                            class=" dark:bg-[#cfff45] flex w-fit gap-2 justify-center items-center cursor-pointer rounded-lg bg-neutral-100 p-3 text-neutral-500 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all duration-200 hover:translate-y-[2px] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none sm:p-[10px]  dark:text-[#131313] dark:shadow-[0_4px_0_0_#a1c13d] dark:hover:shadow-[0_2px_0_0_#a1c13d] dark:active:shadow-none">
                            <h2>View My Work</h2>
                            <i class="fa-solid fa-arrow-down-long pt-1"></i>
                        </button>
                        <a href="#Contact"
                            class="my-4 mx-3 underline text-[#f0f0f0] hover:text-[#cfff45] active:text-[#cfff45] active:scale-95 transition-all duration-150 flex items-center gap-1.5 cursor-pointer">
                            Let's Talk
                            <i class="fa-solid fa-arrow-right pt-0.5"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default herosection
