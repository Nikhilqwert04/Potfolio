import React from 'react'

const projects = () => {
  return (
    <div>
          <section class="py-12 px-6">
        <div class="text-[#cfff45] text-3xl h-fit w-fit my-10 font-['Brotesk']" id="Work">-- Projects(🎮 Built for Fun)
        </div>
        <div class="max-w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
                onClick={() => window.open("https://github.com/Nikhilqwert04/Monopoly-BMS-Offline-", "_blank")}
                class="board1 bg-[#1a1a1a] border border-[#676363] rounded-2xl flex flex-col justify-between overflow-hidden min-h-[200px] group/project hover:border-[#cfff45] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(207,255,69,0.15)] cursor-pointer">
                <div class="overflow-hidden aspect-video relative">
                    <img src="Project1.jpg" alt="Project1"
                        class="group-hover/project:scale-105 transition-all duration-300 w-full h-full object-cover"></img>
                </div>
                <div class="h-auto w-auto z-1 flex justify-between bg-[#1a1a1a]">
                    <div class="text-white ml-4 mt-4 font-outfit text-xl font-[600]"><span
                            class="text-[#cfff45] text-2xl font-['Pirates']">M</span>onopoly</div>
                    <a href="https://github.com/Nikhilqwert04/Monopoly-BMS-Offline-" target="_blank" onClick={(e) => e.stopPropagation()}
                        class="fa-brands fa-github mx-4 mt-4 text-2xl text-[#cfff45] hover:scale-110 hover:text-white active:scale-95 transition-all duration-150 ease-in"></a>
                </div>
                <div class="m-4 text-xs text-[#a09d9d]">A real-time multiplayer Monopoly-inspired game where players can
                    join from different devices and compete on a shared board. Features include dice rolling, property
                    ownership, rent collection, Chance and Community Chest cards, turn-based gameplay, player
                    management, and live synchronization, creating an engaging and interactive experience for all
                    participants.</div>
                <div class="text-[#494242] group-hover/project:text-[#cfff45] ml-4 text-xs font-bold transition-colors">PROJECTS</div>
                <div
                    class="mt-2 pb-2  flex gap-2 justify-center items-center content-center flex-wrap border-b border-[#5c565672]">
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="html.png" alt="pic1" class="h-3"></img>
                        <p>HTML</p>
                    </div>
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="tailwind.png" alt="pic1" class="h-3"></img>
                        <p>Tailwind</p>
                    </div>
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="java-script.png" alt="pic1" class="h-3"></img>
                        <p>JavaScript</p>
                    </div>
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="socketio.png" alt="pic1" class="h-3"></img>
                        <p>socket.io</p>
                    </div>
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="nodejs.png" alt="pic1" class="h-3"></img>
                        <p>Node.js</p>
                    </div>
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="monogo.png" alt="pic1" class="h-3"></img>
                        <p>MongoDB</p>
                    </div>
                </div>
            </div>
            <div
                onClick={() => window.open("https://github.com/Nikhilqwert04/HireAI", "_blank")}
                class="board2 bg-[#1a1a1a] border border-[#676363] rounded-2xl flex flex-col justify-between overflow-hidden min-h-[200px] group/project hover:border-[#cfff45] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(207,255,69,0.15)] cursor-pointer">
                <div class="overflow-hidden aspect-video relative">
                    <img src="Project2.jpg" alt="Project1"
                        class="group-hover/project:scale-105 transition-all duration-300 w-full h-full object-cover"></img>
                </div>
                <div class="h-auto w-auto z-1 flex justify-between bg-[#1a1a1a]">
                    <div class="text-white ml-4 mt-4 font-outfit text-xl font-[600]"><span
                            class="text-[#cfff45] text-2xl font-['Pirates']">H</span>ire <span
                            class="text-[#cfff45] text-2xl font-['Pirates']">A</span>i (Frontend)</div>
                    <a href="https://github.com/Nikhilqwert04/HireAI" target="_blank" onClick={(e) => e.stopPropagation()}
                        class="fa-brands fa-github mx-4 mt-4 text-2xl text-[#cfff45] hover:scale-110 hover:text-white active:scale-95 transition-all duration-150 ease-in"></a>
                </div>
                <div class="m-4 text-xs text-[#a09d9d]">It is an intelligent recruitment platform designed to streamline
                    the hiring process. It helps employers evaluate candidates efficiently using AI-powered analysis,
                    automated screening, and smart candidate matching. The platform improves recruitment accuracy,
                    reduces manual effort, and helps organizations identify the most suitable talent faster.</div>
                <div class="text-[#494242] group-hover/project:text-[#cfff45] ml-4 text-xs font-bold transition-colors">PROJECTS</div>
                <div
                    class="mt-2 pb-2  flex gap-2 justify-center items-center content-center flex-wrap border-b border-[#5c565672]">
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="html.png" alt="pic1" class="h-3"></img>
                        <p>HTML</p>
                    </div>
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="tailwind.png" alt="pic1" class="h-3"></img>
                        <p>Tailwind</p>
                    </div>
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="java-script.png" alt="pic1" class="h-3"></img>
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>
            <div
                onClick={() => window.open("https://insta.nikhilverse.pro/", "_blank")}
                class="board3 bg-[#1a1a1a] border border-[#676363] rounded-2xl flex flex-col justify-between overflow-hidden min-h-[200px] group/project hover:border-[#cfff45] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_4px_20px_rgba(207,255,69,0.15)] cursor-pointer relative">
                <div class="overflow-hidden aspect-video relative">
                    <img src="miniinsta.jpg" alt="Mini-Instagram"
                        class="group-hover/project:scale-105 transition-all duration-300 w-full h-full object-cover"></img>
                    <div class="absolute top-3 left-3">
                        <span class="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-md">
                            <span class="h-2 w-2 rounded-full bg-green-500 animate-[live_1s_ease-in-out_infinite]"></span>
                            Live
                        </span>
                    </div>
                </div>
                <div class="h-auto w-auto z-1 flex justify-between bg-[#1a1a1a]">
                    <div class="text-white ml-4 mt-4 font-outfit text-xl font-[600]"><span
                            class="text-[#cfff45] text-2xl font-['Pirates']">M</span>ini <span
                            class="text-[#cfff45] text-2xl font-['Pirates']">I</span>nstagram</div>
                    <div class="flex items-center gap-3 mx-4 mt-4">
                        <a href="https://github.com/Nikhilqwert04/Mini-Instagram" target="_blank" onClick={(e) => e.stopPropagation()}
                            class="fa-brands fa-github text-2xl text-[#cfff45] hover:scale-110 hover:text-white active:scale-95 transition-all duration-150 ease-in"></a>
                        <a href="https://insta.nikhilverse.pro/" target="_blank" onClick={(e) => e.stopPropagation()}
                            class="fa-solid fa-up-right-from-square text-lg text-[#cfff45] hover:scale-110 hover:text-white active:scale-95 transition-all duration-150 ease-in"></a>
                    </div>
                </div>
                <div class="m-4 text-xs text-[#a09d9d]">A fully responsive Instagram clone featuring user authentication, photo posting with filters, likes, comments, and search features, designed to match the native Instagram layout and user experience.</div>
                <div class="text-[#494242] group-hover/project:text-[#cfff45] ml-4 text-xs font-bold transition-colors">PROJECTS</div>
                <div
                    class="mt-2 pb-2  flex gap-2 justify-center items-center content-center flex-wrap border-b border-[#5c565672]">
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="html.png" alt="pic1" class="h-3"></img>
                        <p>HTML</p>
                    </div>
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="tailwind.png" alt="pic1" class="h-3"></img>
                        <p>Tailwind</p>
                    </div>
                    <div
                        class=" h-6 border text-xs px-2 rounded-md bg-[#5c565672] border-[#d9d9d960] text-[#d9d9d960] flex justify-center items-center gap-1">
                        <img src="java-script.png" alt="pic1" class="h-3"></img>
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default projects
