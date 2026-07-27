import React from "react";

const SubNavbar = () => {
  return (
    <div>
      <section>
        <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
          <div class="flex items-center gap-4 bg-[#111111]/10 backdrop-blur-[5px] border border-[#222] px-5 py-3 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] ">
            <a
              href="#UP"
              class="flex justify-center items-center w-12 h-12 rounded-full bg-white text-black text-lg hover:shadow-[0_4px_0_rgba(255,255,255,0.5)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_0_0_rgba(255,255,255,0.5)] md:active:translate-y-0 transition-all duration-150"
            >
              <i class="fa-solid fa-angle-up"></i>
            </a>

            <a
              href="#About"
              class="flex justify-center items-center w-14 h-14 rounded-full bg-[#cfff45] text-black text-xl  shadow-xl hover:shadow-[0_4px_0_rgba(200,240,77,0.5)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_0_0_rgba(255,255,255,0.5)] md:active:translate-y-0 transition-all duration-150"
            >
              <i class="fa-solid fa-house"></i>
            </a>

            <a
              href="#DOWN"
              class="flex justify-center items-center w-12 h-12 rounded-full bg-white border border-[#2a2a2a] text-black text-lg hover:shadow-[0_4px_0_rgba(255,255,255,0.5)] hover:-translate-y-1 active:translate-y-1 active:shadow-[0_0_0_rgba(255,255,255,0.5)] md:active:translate-y-0 transition-all duration-150"
            >
              <i class="fa-solid fa-angle-down"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubNavbar;
