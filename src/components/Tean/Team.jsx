import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Team.module.css";
import { teamData } from "./index";
// Import Swiper React components
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Autoplay, Pagination } from "swiper";
import office1 from "../../assets/images/team/office-1.jpg";
import office2 from "../../assets/images/team/office-2.jpg";
import office3 from "../../assets/images/team/office-3.jpg";
import office4 from "../../assets/images/team/office-4.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Team = () => {
  const socialIcon = [
    { id: 1, icon: BsFacebook },
    { id: 2, icon: BsGithub },
    { id: 3, icon: BsLinkedin },
    { id: 4, icon: AiFillTwitterCircle },
  ];

  return (
    <section className="px-5">
      <div className="text-center">
        <h2 className="heading">Our Team</h2>
        <p className="sub_heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          maxime aliquam magni.
        </p>
      </div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper  "
        >
          {teamData.map((item) => (
            <SwiperSlide key={item.id} className="my-10 bg-black ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16  lg:px-28">
                <div className="px-0 md:px-10 lg:px-24  ">
                  <div className="cursor-pointer sliderImage rounded-2xl transform transition duration-500 hover:scale-90">
                    <img className="rounded-lg " src={item.image} />
                  </div>
                </div>
                <div className="sliderText lg:py-10 px-0 md:px-10 lg:lg-px-1">
                  <h1 className="heading text-lg lg:text-4xl">{item.name}</h1>
                  <h3 className="py-4 md:py-0">{item.role}</h3>
                  <div className="grid grid-cols-4 w-[50%]">
                    {socialIcon.map((icon) => (
                      <Link to="/" key={icon.id}>
                        <icon.icon className="text-xl " />
                      </Link>
                    ))}
                  </div>
                  <p className="sub_heading pt-3 lg:pt-0">{item.about}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className={`${styles.teamImagesGrid1} py-24 gap-6 md:flex flex-wrap`}
        >
          <div className="max-h-[22rem] mt-5 lg:mt-0">
            <img
              className="rounded-lg transform transition duration-500 hover:scale-90 "
              src={office2}
              alt="team a"
            />
          </div>
          <div className="max-h-[22rem] mt-5">
            <img
              className="rounded-lg transform transition duration-500 hover:scale-90"
              src={office1}
              alt="team a"
            />
          </div>
          <div className="max-h-[22rem] mt-5">
            <img
              className="rounded-lg transform transition duration-500 hover:scale-90"
              src={office4}
              alt="team a"
            />
          </div>
          <div className="max-h-[22rem] mt-5">
            <img
              className="rounded-lg transform transition duration-500 hover:scale-90"
              src={office3}
              alt="team a"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
