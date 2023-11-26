import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-[28px]">
      <div className="mb-[120px]">About Us</div>

      <div className="flex items-center text-center w-gap-[100px]">
        <p>
          From preschool to pre-tertiary, our students enjoy fun, interactive
          <br />
          and relevant lessons and are empowered to think beyond the confines of
          the classroomsss.
        </p>
      </div>
      <div className="rounded-md bg-green-500 mt-8 px-8 py-3">
        <button>See More</button>
      </div>
    </div>
  );
};

export default About;
