import React from "react";

const Footer = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-[28px]">
      <div className="mb-[120px]">Footer</div>

      <div className="flex items-center text-center w-gap-[100px]">
        <p>
          From preschool to pre-tertiary, our students enjoy fun, interactive
        </p>
      </div>
      <div className="rounded-md bg-green-500 mt-8 px-8 py-3">
        <button>See More</button>
      </div>
    </div>
  );
};

export default Footer;
