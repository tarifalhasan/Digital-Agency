import React from "react";
import {
    BsDiscord,
    BsFacebook,
    BsInstagram,
    BsLinkedin,
    BsPinterest,
    BsTwitter
} from "react-icons/bs";
import { Link } from "react-router-dom";
import callSvg from "../../assets/images/call.svg";
import mailSvg from "../../assets/images/mail.svg";
import whatsappSvg from "../../assets/images/whatsapp.svg";
const MessageMe = () => {
  return (
    <>
      <div className="p-4">
        <h2 className="heading text-[22px]">Request A Quote</h2>
        <form className="py-4">
          <input
            type="text"
            id="email"
            className="bg-slate-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            required
          />

          <input
            type="email"
            id="email"
            className="my-5 bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email"
            required
          />

          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Requerment
          </label>
          <select
            id="countries"
            className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select Your Requerment</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Grapics Design">Grapics Design</option>
            <option value="React App">React App</option>
            <option value="Video">Video</option>
            <option value="Marketing">Marketing</option>
          </select>

          <label
            htmlFor="message"
            className="block mt-1 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="4"
            className="block mt-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
          <button
            type="submit"
            className="my-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Send Message
          </button>
          <div className="my-2">
            <h2 className="heading text-[22px] leading-6">Get In Touch</h2>
            <p className="my-2 sub_heading">
              Please fill out the form below if you have a plan or project in
              mind that you'd like to share with us.
            </p>
          </div>
        </form>
        <div>
          <Link to="/" className="cal gap-6 flex items-center">
            <img src={callSvg} alt="" className="block w-10" />
            <div>
              <h2 className="heading text-[17px] leading-4 ">
                ++8801779158124
              </h2>
              <p className=" mt-1 text-slate-500">Mon-Fri 9am-10pm</p>
            </div>
          </Link>
          <Link to="/" className="cal gap-6 my-5 flex items-center">
            <img src={whatsappSvg} alt="" className="block w-10" />
            <div>
              <h2 className="heading text-[17px] leading-4 ">
                ++8801779158124
              </h2>
              <p className=" mt-1 text-slate-500">Mon-Fri 9am-10pm</p>
            </div>
          </Link>
          <Link to="" className="cal gap-6 flex items-center">
            <img src={mailSvg} alt="" className="block w-10" />
            <div>
              <h2 className="heading text-[17px] leading-4 ">
                tarifalhasan@hotmail.com
              </h2>
              <p className=" mt-1 text-slate-500">online support</p>
            </div>
          </Link>
          <Link to="/" className="cal gap-6 flex my-5 items-center">
            <img src={callSvg} alt="" className="block w-10" />
            <div>
              <h2 className="heading text-[17px] leading-4 ">
                Dhaka, Bangladesh
              </h2>
              <p className=" mt-1 text-slate-500">visit our office</p>
            </div>
          </Link>
        </div>
        <div className="py-16">
          <h2 className="heading text-[18px]">Follow Us On:</h2>
          <div className="socialIcon flex gap-5 items-center ">
            <Link
              to="/"
              className="text-xl transform transition duration-500 hover:text-white"
            >
              <BsFacebook className="text-xl transform transition duration-500 hover:text-white" />
            </Link>
            <Link>
              <BsTwitter className="text-xl transform transition duration-500 hover:text-white" />
            </Link>
            <Link to="/">
              <BsLinkedin className="text-xl transform transition duration-500 hover:text-white" />
            </Link>
            <Link>
              <BsDiscord className="text-xl transform transition duration-500 hover:text-white" />
            </Link>
            <Link to="/">
              <BsPinterest className="text-xl transform transition duration-500 hover:text-white" />
            </Link>
            <Link to="/">
              <BsInstagram className="text-xl transform transition duration-500 hover:text-white" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageMe;
