import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
const ServicesCard = ({ title, icon, subTitle }) => {
  return (
    <div className="bg-[#191919] rounded-md transition-transform  card_item ">
      <div className="py-10 px-2 text-center ">
        <img src={icon} className="block mx-auto h-24 w-24" alt={title} />
        <h2 className="heading text-[22px]">{title}</h2>
        <p className="sub_heading">{subTitle}</p>
        <div className="flex items-center hover:text-white justify-center gap-1 pt-4">
          <Link to="/:id">Learn More</Link> <BiRightArrowAlt />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
