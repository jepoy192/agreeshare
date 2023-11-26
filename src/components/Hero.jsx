import React from "react";

const Hero = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <div className="flex justify-center">LOGO</div>

        <div className="">Share to care, Trade to aid</div>

        <div className="text-center">
          <button>Trade now</button>
        </div>
      </div>
      {/* <div className="relative z-20 flex flex-auto flex-col xl:w-1/2">
        <Image src="../Images/IMG_7300.JPG" alt="IMG" width={24} height={24} />
      </div> */}
    </section>
  );
};

export default Hero;
