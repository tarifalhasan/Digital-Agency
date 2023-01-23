import React from "react";
import images from "./index";
const Client = () => {
  return (
    <section className="pt-20 px-5">
      <div className="lg:text-center">
        <h2 className="heading">Amazing Clients</h2>
        <p className="sub_heading lg:w-[60%] mx-auto my-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
      </div>
      <div className="mt-20">
        <div className="grid md:grid-cols-6 gap-4 gap-y-10 grid-cols-2">
          {images.map((image) => (
            <div key={image.id} className="flex justify-center">
              <img src={image.avtar} alt="client" />
            </div>
          ))}
        </div>
        <div className=" md:flex xl:w-[70%] mx-auto font-normal items-center py-20">
          <h2 className="heading text-xl lg:text-[30px]">
            Want to <b>kick start</b> your project right now?
          </h2>
          <button
            type="button"
            className=" my-3 rounded-full text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium text-sm px-5 py-2.5 text-center  mb-2 block mx-auto"
          >
            Request a proposal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Client;
