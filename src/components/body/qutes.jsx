import React, { useState, useEffect } from "react";

const developerQuotes = [
  {
    quote:
      "Talk is cheap. Show me the code",
    author: "Harold Abelson",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  { quote: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { quote: "Clean code always looks like it was written by someone who cares.", author: "Austin Freeman" },
];

const Quotes = () => {
  const [quoteData, setQuoteData] = useState({ quote: "", author: "" });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * developerQuotes.length);
    setQuoteData(developerQuotes[randomIndex]);
  }, []);

  return (
    <div className="py-12 px-6">
      <div className="text-[#cfff45] text-2xl h-fit w-fit my-7 font-['Brotesk']">
        --Quote Of the Day
      </div>
      <div className="w-auto h-auto flex justify-center gap-10 flex-wrap text-2xl ">
        <div className="bg-[#1a1a1a]/20 border-dashed border-[#6f6d6d] border-2 pb-20 px-4 pt-5 rounded-2xl text-stone-50 relative font-jakarta text-center">
          <p className="QuoteDay">
            {quoteData.quote ||
              "Mind your money and mood. Both can be ruined if not utilised wisely at the same time."}
          </p>
          <div className="QuoteAuther absolute bottom-5 right-3 text-xl text-[#e1e1e1]">
            -{quoteData.author || "Ali ibn Abi Talib (R.A)"}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Quotes;
