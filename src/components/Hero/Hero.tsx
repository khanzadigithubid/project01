

import Image from "next/image";
import imag from "../../../public/assets/Banner.png";

const Hero = () => {
  return (
    <div>
      <section
        className="flex flex-col w-full px-4 py-20 md:px-28 md:py-32 items-center justify-around md:flex-row gap-10 md:gap-10"
        id="hero"
      >
        <div className="flex flex-col space-y-4 max-w-lg text-left md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl leading-[1.8] sm:leading-[1.9] font-normal text-black">
            Hello I am <span className="text-black font-bold">Evren Shah.</span>
            <br />
            <span className="text-black font-bold mt-4 mb-2 mr-2 text-3xl sm:text-6xl md:text-6xl lg:text-5xl xl:text-5xl">
              Frontend
            </span>
            <span
              className="text-white font-extrabold text-3xl text-shadow-lg text-stroke 
  sm:text-6xl md:text-6xl lg:text-5xl xl:text-5xl"
            >
              Developer
            </span>
            <br />
            Based in <span className="text-black font-bold">India.</span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base pb-10 pt-5">
            I&#x27;m Evren Shah. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry&#x27;s standard dummy text ever since the 1500s.
          </p>
          <div className="flex space-x-4 justify-start md:justify-start">
            {/* Social Media Links (No changes here) */}
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:w-1/2">
          <Image
            src={imag} // Use imported image
            alt="Hero"
            className="w-full h-auto max-w-sm md:max-w-none"
            style={{ maxHeight: "60vh" }} // Prevents image from becoming too large
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;