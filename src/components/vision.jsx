import React from "react";

const Vision = () => {
  return (
    <div className="h-screen w-full flex flex-col items-end justify-start text-[28px] pr-20 pt-20 bg-[#F5F5F5]">
      <div>
        <img src="/undraw_nature_m5ll.svg" className="absolute left-20 w-[600px] h-[450px]" alt="Your SVG" />
      </div>
      <div className="mb-[20px] mr-[200px] underline decoration-green-500 text-6xl font-bold text-black">Vision</div>
      <div className="w-1/2 pl-10">
        <p className="text-black mb-10">
          From preschool to pre-tertiary, our students enjoy fun, interactive
          and relevant lessons and are empowered to think beyond the confines of
          the classroom.
        </p>
      </div>
      <div className="mb-[20px] mr-[120px]">
        <div className="flex items-center ml-4">
          <div className="rounded-full bg-green-200 p-2 inline-flex">
            <img src="/undraw_environment_iaus.svg" className="w-6 h-6" alt="Icon" />
          </div>
          <p className="text-black ml-2">100% Organic food</p>
        </div>
        <div className="text-sm mt-1 text-gray-900 opacity-50 ml-20"> - 100% Fresh and healthy</div>

        <div className="flex items-center ml-4">
          <div className="rounded-full bg-green-200 p-2 inline-flex">
            <img src="/undraw_nature_m5ll.svg" className="w-6 h-6" alt="Icon" />
          </div>
          <p className="text-black ml-2">Agritizens Feedback</p>
        </div>
        <div className="text-sm mt-1 text-gray-900 opacity-50 ml-20"> - Positive reviews</div>

        <div className="flex items-center ml-4">
          <div className="rounded-full bg-green-200 p-2 inline-flex">
            <img src="/undraw_the_world_is_mine_re_j5cr.svg" className="w-6 h-6" alt="Icon" />
          </div>
          <p className="text-black ml-2">Great Support 24/7</p>
        </div>
        <div className="text-sm mt-1 text-gray-900 opacity-50 ml-20"> - Instant Access to Contact</div>
      </div>
    </div>
  );
};

export default Vision;