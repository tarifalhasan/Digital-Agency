import React from "react";
import icon1 from "../../assets/images/app.svg";
import icon2 from "../../assets/images/branding.svg";
import icon3 from "../../assets/images/development.svg";
import ServicesCard from "./ServicesCard";
const Services = () => {
  const servicesData = [
    {
      id: 1,
      title: "Web Development",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: icon3,
    },
    {
      id: 2,
      title: "Grapics Design",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: icon2,
    },
    {
      id: 3,
      title: "Mobile App",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: icon1,
    },
    {
      id: 4,
      title: "SEO",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: icon1,
    },
    {
      id: 5,
      title: "WORDPRESS",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: icon3,
    },
    {
      id: 6,
      title: "Web Application",
      subTitle:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      icon: icon1,
    },
  ];
  return (
    <section className="px-5">
      <div className="text-left md:text-center py-10 pt-20">
        <h1 className="heading">We help Brands with</h1>
        <p className="sub_heading w-full md:w-[80%] lg:w-[60%] py-6 mx-auto">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>

      <div className="grid items-center justify-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 card_wrapper">
        {servicesData.map((data) => (
          <ServicesCard
            key={data.id}
            icon={data.icon}
            title={data.title}
            subTitle={data.subTitle}
          />
        ))}
      </div>
      <div className=" md:flex xl:w-[70%] mx-auto font-normal items-center py-20">
        <h2 className="heading text-xl lg:text-[30px]">
          Want to kick start your project right now?
        </h2>
        <button
          type="button"
          className=" my-3 rounded-full text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 py-2.5 text-center  mb-2 block mx-auto"
        >
          Request a proposal
        </button>
      </div>
    </section>
  );
};

export default Services;
