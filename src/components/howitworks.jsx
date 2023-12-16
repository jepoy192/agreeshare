import React from "react";

const Howitworks = () => {
  return (
    <div className="h-screen w-full flex flex-col items-start justify-center text-[28px] pl-20 bg-black">
      <div className="mb-[20px] text-white text-6xl font-bold text-white mb-20">How It Works?</div>

      <div className="flex items-start">
        <div>
          <p className="text-white pr-10 flex-1 mb-10">
            From preschool to pre-tertiary, our students enjoy fun, interactive
            and relevant lessons and are empowered to think beyond the confines of
            the classroom.
          </p>
          <div className="flex items-center mt-2 mb-4">
            <img src="/check-symbol-4794.svg" className="w-4 h-4 mr-2" alt="Check Icon" />
            <p className="text-white"> Trading</p>
          </div>
          <div className="flex items-center mt-2 mb-4">
            <img src="/check-symbol-4794.svg" className="w-4 h-4 mr-2" alt="Check Icon" />
            <p className="text-white"> Donation</p>
          </div>
          <div className="flex items-center mt-2 mb-4">
            <img src="/check-symbol-4794.svg" className="w-4 h-4 mr-2" alt="Check Icon" />
            <p className="text-white"> Points</p>
          </div>
          {/* Your button here */}
          <button class="relative group overflow-hidden mt-10 px-12 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-green-500 to-yellow-500 hover:to-yellow-600">
          <span class="relative text-sm text-white">Start Now</span>
          <div class="flex items-center -space-x-3 translate-x-3">
            <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
        </div>
        <div className="mr-20">
          <img src="/undraw_heartbroken_cble.svg" className="w-[900px] h-[300px]" alt="Next" />
        </div>    
      </div>
    </div>
  );
};

export default Howitworks;