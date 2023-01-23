import React from "react";
import { FaLaptopCode, FaSteam } from "react-icons/fa";
import teamwork from "../../assets/images/team.jpg";
import styles from "../../styles/About.module.css";
const About = () => {
  return (
    <section className="px-5">
      <div className="grid grid-cols-1 items-center lg:grid-cols-2 pt-10">
        <div className="">
          <h1 className="heading">About Agency</h1>
          <p className="sub_heading pt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <div className="pt-16">
            <div className="flex gap-6">
              <div className="mt-[5px] relative h-[50%] rounded-lg drop-shadow-xl bg-white">
                <div className="p-1">
                  <FaLaptopCode className="text-5xl text-black" />
                </div>
              </div>
              <div>
                <h2 className="heading text-[22px] leading-[32px]">
                  Streamlined Project Management
                </h2>
                <p className="sub_heading my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  aliquet ligula nec leo elementum semper.
                </p>
              </div>
            </div>
            <div className="flex gap-6 py-7">
              <div className=" mt-[5px] relative h-[50%] rounded-lg drop-shadow-xl bg-white">
                <div className="p-1">
                  <FaSteam className="text-5xl text-black" />
                </div>
              </div>
              <div>
                <h2 className="heading text-[22px] leading-[32px]">
                  A Dedicated Team of Experts
                </h2>
                <p className="sub_heading my-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  aliquet ligula nec leo elementum semper.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <img src={teamwork} className={styles.teamImage} alt="team" />
        </div>
      </div>
    </section>
  );
};

export default About;
