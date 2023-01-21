import React from "react";
// import video from "../../assets/heroBackground.mp4";
import { AiFillCheckCircle } from "react-icons/ai";
import heroLeft from "../../assets/images/hero.png";
import styles from "../../styles/Hero.module.css";
const Hero = () => {
  return (
    <section className="px-5 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
        {/* <video autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
      </video> */}
        <div>
          <h1
            className={`${styles.hero_title} lg:text-left text-center leading-[62px] text-[32px] md:text-[46px]`}
          >
            Creative Digital Agency
            <span className="text-[#0d6efd]">Focused</span> on
            <span className="text-[#0d6efd]">Growing</span>
            Brands Online
          </h1>
          <p className={`${styles.short_title} py-5 text-center lg:text-left`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            faucibus, risus sit amet auctor sodales, justo erat tempor eros.
          </p>
          <div className="flex justify-center relative lg:block">
            <span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-400 left-[121px]"></span>

            <button
              type="button"
              className="  text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              GET STARTED
            </button>
          </div>
        </div>
        <div className="relative pt-16 lg:py-2">
          <img src={heroLeft} className="h-full md:h-80%" />
          <div className="absolute top-[66%] rounded-lg">
            <button
              type="button"
              className="flex gap-2 items-center py-3 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5  text-center mr-2 mb-2 animate-bounce"
            >
              <AiFillCheckCircle className="text-green-600" />
              The best on the net!
            </button>
          </div>
          <div className="absolute top-[28%] rounded-lg">
            <button
              type="button"
              className="hidden md:flex gap-2 items-center py-3 text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5  text-center mr-2 mb-2"
            >
              <AiFillCheckCircle className="text-green-600" />
              I'd be lost without Affirm.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
