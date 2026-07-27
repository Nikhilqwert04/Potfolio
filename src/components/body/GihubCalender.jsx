import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GihubCalender = () => {
  return (
    <div>
      <section className="py-12 px-6">
        <div className="h-auto w-auto">
          <div
            className="text-[#cfff45] text-2xl h-fit w-fit my-7 font-['Brotesk']"
          >
            -- Github Calender
          </div>
          <div className="text-white text-3xl h-fit w-auto font-bold flex justify-center">
            <div className="bg-neutral-800/60 border border-neutral-700 p-8 rounded-2xl shadow-lg shadow-black/50 overflow-x-auto max-w-full">
               <GitHubCalendar username="Nikhilqwert04" blockSize={15} blockMargin={5} fontSize={16} colorScheme="dark" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GihubCalender;
