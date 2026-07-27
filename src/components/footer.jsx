import React from 'react'

const footer = () => {
  return (
    <div id="DOWN" className="relative bg-[#0a0a0a] border-t border-[#6f6d6d]/20 py-16 px-6 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#cfff45]/5 rounded-full blur-[150px]">
        </div>

        <div className="max-w-6xl mx-auto flex flex-col items-center justify-between gap-10 md:flex-row relative z-10">
            <div className="flex flex-col items-center md:items-start gap-3">
                <div className="flex items-center">
                    <a href="#UP"
                        className="text-3xl text-[#f0f0f0] font-[Brotesk] tracking-wider hover:text-[#cfff45] transition-colors duration-200">Nikhil</a>
                    <span className="text-6xl text-[#cfff45] leading-none mb-4">.</span>
                </div>
                <p className="text-[#777] text-sm text-center md:text-left max-w-xs font-medium leading-relaxed">
                    UI/UX Designer & Frontend Developer. Turning complex ideas into functional, interactive digital
                    experiences.
                </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-5">
                <div
                    className="flex flex-wrap justify-center items-center gap-8 text-sm font-semibold tracking-wider uppercase font-sans">
                    <a href="#About"
                        className="cursor-pointer text-[#776e6e] hover:text-[#cfff45] transition-all duration-150">About</a>
                    <a href="#Work"
                        className="cursor-pointer text-[#776e6e] hover:text-[#cfff45] transition-all duration-150">Work</a>
                    <a href="#Expertise"
                        className="cursor-pointer text-[#776e6e] hover:text-[#cfff45] transition-all duration-150">Expertise</a>
                    <a href="#Contact"
                        className="cursor-pointer text-[#776e6e] hover:text-[#cfff45] transition-all duration-150">Contact</a>
                </div>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/Nikhilqwert04" target="_blank"
                        className="group/foot-social w-10 h-10 bg-[#413b3bb8] hover:bg-[#cfff45] active:bg-[#cfff45] border border-[#6f6d6d]/40 hover:border-[#cfff45] active:border-[#cfff45] rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 active:translate-y-0 hover:shadow-[0_0_10px_rgba(207,255,69,0.3)] active:shadow-[0_0_8px_rgba(207,255,69,0.2)] active:scale-95">
                        <img src="github.png" alt="GitHub"
                            className="w-5 h-5 object-contain grayscale group-hover/foot-social:grayscale-0 active:grayscale-0 group-hover/foot-social:scale-110 active:scale-110 transition-all duration-200" />
                    </a>
                    <a href="https://www.linkedin.com/in/nikhilluthra05/" target="_blank"
                        className="group/foot-social w-10 h-10 bg-[#413b3bb8] hover:bg-[#cfff45] active:bg-[#cfff45] border border-[#6f6d6d]/40 hover:border-[#cfff45] active:border-[#cfff45] rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 active:translate-y-0 hover:shadow-[0_0_10px_rgba(207,255,69,0.3)] active:shadow-[0_0_8px_rgba(207,255,69,0.2)] active:scale-95">
                        <img src="linkdin.png" alt="LinkedIn"
                            className="w-5 h-5 object-contain grayscale group-hover/foot-social:grayscale-0 active:grayscale-0 group-hover/foot-social:scale-110 active:scale-110 transition-all duration-200" />
                    </a>
                    <a href="https://x.com/Nikhilqwert04" target="_blank"
                        className="group/foot-social w-10 h-10 bg-[#413b3bb8] hover:bg-[#cfff45] active:bg-[#cfff45] border border-[#6f6d6d]/40 hover:border-[#cfff45] active:border-[#cfff45] rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 active:translate-y-0 hover:shadow-[0_0_10px_rgba(207,255,69,0.3)] active:shadow-[0_0_8px_rgba(207,255,69,0.2)] active:scale-95">
                        <img src="twitter.png" alt="Twitter"
                            className="w-4 h-4 object-contain grayscale group-hover/foot-social:grayscale-0 active:grayscale-0 group-hover/foot-social:scale-110 active:scale-110 transition-all duration-200" />
                    </a>
                    <a href="https://www.instagram.com/the_qwert04/" target="_blank"
                        className="group/foot-social w-10 h-10 bg-[#413b3bb8] hover:bg-[#cfff45] active:bg-[#cfff45] border border-[#6f6d6d]/40 hover:border-[#cfff45] active:border-[#cfff45] rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-1 active:translate-y-0 hover:shadow-[0_0_10px_rgba(207,255,69,0.3)] active:shadow-[0_0_8px_rgba(207,255,69,0.2)] active:scale-95">
                        <img src="instagram.png" alt="Instagram"
                            className="w-5 h-5 object-contain grayscale group-hover/foot-social:grayscale-0 active:grayscale-0 group-hover/foot-social:scale-110 active:scale-110 transition-all duration-200" />
                    </a>
                </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto my-8 border-t border-[#6f6d6d]/10 relative z-10"></div>
        <div
            className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#555] font-semibold tracking-widest uppercase relative z-10 font-sans">
            <div>
                © 2026 Nikhil Luthra. All rights reserved.
            </div>
            <div className="flex items-center gap-2">
                Developed with <i className="fa-solid fa-heart text-[#cfff45] animate-[live_1s_infinite]"></i> By Nikhil
                Luthra
            </div>
        </div>
    </div>
  )
}

export default footer
