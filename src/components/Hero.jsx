import React from "react";


const Hero = () => {
  return (
    <section 
      className="h-screen w-full flex justify-center items-center"
      style={{ backgroundImage: `url('/IMG_7300.JPG')` }} // Adjusted path
    >
      <div className="flex flex-col gap-6 text-center">
        <div className="text-white mt-10">Share to care, Trade to aid</div>

        <button class="relative group overflow-hidden px-12 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-green-500 to-yellow-500 hover:to-yellow-600">
          <span class="relative text-sm text-white">Get Started</span>
          <div class="flex items-center -space-x-3 translate-x-3">
            <div class="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;