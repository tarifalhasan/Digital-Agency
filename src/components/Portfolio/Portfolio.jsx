import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import sliderItems from "./data";
import "./Portfolio.css";
// import required modules
import { Autoplay, Pagination } from "swiper";

export default function App() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <section className=" mx-auto px-5">
      <div className="lg:text-center py-6 pb-6">
        <h2 className="heading ">Our Latest Creative Work</h2>
        <p className="sub_heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          perferendis repellendus aspernatur!
        </p>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper  "
        data-swiper-autoplay="4000"
      >
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id} className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:my-16  lg:px-20">
              <div className="px-0 md:px-10 lg:px-24">
                <div className="sliderImage rounded-lg">
                  <img src={item.image} alt="" srcset="" />
                </div>
              </div>
              <div className="sliderText  px-4 md:px-10">
                <h1 className="heading text-lg lg:text-4xl">{item.role}</h1>
                <h3>{item.category}</h3>
                <p className="sub_heading">{item.details}</p>

                <button
                  type="button"
                  className="rounded-xl my-6 lg:w-[40%] text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  {" "}
                  View Case Study
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
