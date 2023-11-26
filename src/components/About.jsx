import React from "react";

const About = () => { return (
  <section className="h-[360px] w-full flex justify-center items-center bg-[url('/IMG_7271.JPG')] bg-cover bg-center">
    <div className="h-[360px] w-full flex flex-col items-center justify-center text-[28px] bg-white bg-opacity-30">
      <h1 className="mb-[20px] text-white text-6xl font-bold">About Us</h1>
  
      <div className="flex items-center text-center w-gap-[100px] text-white mb-10">
        <p>
          From preschool to pre-tertiary, our students enjoy fun,<br />
          interactive and relevant lessons and are empowered<br />
          to think beyond the confines of the classroom.
        </p>
      </div>
      <button class="group relative flex h-14 items-center space-x-6 overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-yellow-500 pl-6 hover:to-yellow-600">
        <span class="relative text-base uppercase text-white">See More</span>
        <div aria-hidden="true" class="w-14 -translate-y-7 bg-yellow-600 transition duration-300 group-hover:translate-y-7">
          <div class="flex h-14">
            <svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-5 w-5 fill-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="flex h-14">
            <svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-5 w-5 fill-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  </section>
  ); }; export default About;
  