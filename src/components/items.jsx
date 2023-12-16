import React from "react";

const Items = () => {
  return (
    <div className="h-screen w-full flex flex-col items-start justify-center text-[28px] pl-20 bg-black">
      <div className="mb-[20px] text-white text-6xl font-bold text-white">Mission</div>

      <div className="flex items-center">
        <p className="text-white pr-10 flex-1">
          From preschool to pre-tertiary, <br /> our students enjoy fun, interactive
          and relevant lessons and are empowered <br /> to think beyond the confines of
          the classroom.
        </p>
        <div className="mr-20">
          <img src="/undraw_environment_iaus.svg" className="w-[500px] h-[300px]" alt="Next" />
        </div>    
      </div>
    </div>
  );
};

export default Items;