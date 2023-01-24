import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import user1 from "../../assets/images/team/user1.jpg";
import { default as user2 } from "../../assets/images/team/user2.jpg";
import user3 from "../../assets/images/team/user3.jpg";
import user4 from "../../assets/images/team/user4.jpg";
// Import Swiper React components
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import testmonial from "./data";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <section>
      <div className="grid px-5 grid-cols-1 lg:grid-cols-2 gap-9">
        <div>
          <div>
            <h2 className="heading text-2xl lg:text-4xl">
              What our clients say about our design
            </h2>
          </div>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper bg-transparent py-10"
          >
            {testmonial.map((data) => (
              <SwiperSlide>
                <div>
                  <p className="sub_heading text-base lg:text-xl">
                    {data.review}
                  </p>
                  <div className="grid  grid-cols-2">
                    <div className="mt-4">
                      <h4 className="text-slate-100 font-bold">{data.name}</h4>
                      <p className="text-sm text-[#a2a2a2]">
                        {data.company} ,<small>{data.location}</small>
                      </p>
                    </div>
                    <FaQuoteLeft className="text-5xl leading-0 text-[#00f2a6] mt-5 ml-auto" />
                  </div>
                  <div className="star flex gap-2 text-[#ff711c] flex-wrap">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Right Side */}
        <div className="realtive">
          <div className="flex testiminalImg1 flex-wrap justify-between">
            <div className="bg-[#ffc107] h-[80px] w-[160px] relative rounded-[100px]">
              <img
                className="block absolute left-2 top-2 rounded-full w-16 h-16"
                src={user1}
                alt=""
              />
            </div>
            <div className="bg-[#f44336] relative border-user1 w-[150px] h-[80px]">
              <img
                className="block absolute left-20 top-2 rounded-full w-16 h-16"
                src={user2}
                alt=""
              />
            </div>
          </div>
          <div className="flex items-center testiminalImg2 gap-10 my-16 justify-center ">
            <div className="bg-[#00bcd4] border3 relative border-user1 w-[150px] h-[80px] ">
              {" "}
              <img
                className="block absolute left-2 top-2 rounded-full w-16 h-16"
                src={user4}
                alt=""
              />
            </div>
            <div className="bg-[#ff6c89] border2 relative border-user1 w-[150px] h-[80px]">
              <img
                className="block absolute left-20 top-2 rounded-full w-16 h-16"
                src={user3}
                alt=""
              />
            </div>
          </div>

          <div className="flex testiminalImg2  justify-between gap-5">
            <div className="bg-[#9c27b0] border3 relative border-user1 w-[150px] h-[80px]">
              <img
                className="block absolute left-2 top-2 rounded-full w-16 h-16"
                src={user3}
                alt=""
              />
            </div>
            <div className="bg-[#4caf50] border2 relative border-user1 w-[150px] h-[80px] ">
              {" "}
              <img
                className="block absolute left-20 top-2 rounded-full w-16 h-16"
                src={user4}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
