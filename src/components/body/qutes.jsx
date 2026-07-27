import React from "react";

const qutes = () => {
  return (
    <div class="py-12 px-6">
      <div class="text-[#cfff45] text-2xl h-fit w-fit my-7 font-['Brotesk']">
        --Quote Of the Day
      </div>
      <div class="w-auto h-auto flex justify-center gap-10 flex-wrap text-2xl ">
        <div class="bg-[#1a1a1a]/20 border-dashed border-[#6f6d6d] border-2 pb-20 px-4 pt-5 rounded-2xl text-stone-50 relative font-['Mine'] text-center">
          <p class="QuoteDay">
            Mind your money and mood. Both can be ruined if not utilised wisely
            at the same time.
          </p>
          <div class="QuoteAuther absolute bottom-5 right-3 text-xl text-[#e1e1e1]">
            -Ali ibn Abi Talib (R.A)
          </div>
        </div>
      </div>
    </div>
  );
};

export default qutes;
