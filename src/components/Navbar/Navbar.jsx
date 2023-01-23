import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { FiPhoneCall, FiPlusCircle } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { SiFiverr } from "react-icons/si";

import { Link } from "react-router-dom";
import styles from "../../styles/Navbar.module.css";
import MessageMe from "./messageMe";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMessageMenu, setShowMessageMenu] = useState(false);
  //   toggle show mobile menu
  const showMobileHandler = () => {
    setShowMenu(!showMenu);
  };

  // toggle show message me handler
  const showMessageMeHandler = () => {
    setShowMessageMenu(!showMessageMenu);
  };
  const navLink = [
    {
      id: 1,
      href: "/",
      name: "Home",
    },
    {
      id: 2,
      href: "/about",
      name: "About",
    },
    {
      id: 3,
      href: "/services",
      name: "Services",
    },
    {
      id: 4,
      href: "/portfolio",
      name: "Portfolio",
    },
    {
      id: 5,
      href: "/contact",
      name: "Contact",
    },
  ];
  return (
    <header className="relative bg-transparent mx-auto border-b-1">
      <nav className=" mx-auto items-center justify-between w-full px-10 flex py-5 ">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className=" relative nav-link flex items-center gap-3">
          {/* ---Dekstop of large screen navbar--- */}
          <ul className=" flex items-center gap-4">
            {navLink.map((nav) => (
              <Link
                to={nav.href}
                className={`${styles.nav_link} hidden lg:flex items-center gap-2`}
                key={nav.id}
              >
                <li>{nav.name}</li> <FiPlusCircle />
              </Link>
            ))}
            <div className="btn gap-5 flex focus:ring-4 focus:outline-none  focus:ring-purple-800">
              <div className={`${styles.call_btn}`}>
                <FiPhoneCall onClick={showMessageMeHandler} />
              </div>
              <button className="relative hidden md:flex   items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Connect With Us
                </span>
              </button>
              <div className={`${styles.toggle_light} `}>
                <button className="dark:focus:ring-purple-800 focus:ring-purple-200 ">
                  <MdDarkMode />
                </button>
              </div>
            </div>
          </ul>
          {/* ===== Moblile Menubar ==== */}
          <div className="lg:hidden transgation1 ">
            {!showMenu ? (
              <BiMenu className="text-4xl" onClick={showMobileHandler} />
            ) : (
              <RxCross2 className="text-4xl " onClick={showMobileHandler} />
            )}
          </div>
        </div>
      </nav>
      <div
        className={` ${
          showMenu ? "right-[31%] md:right-[50%] " : "right-[100%]"
        } lg:hidden overflow-hidden absolute z-50 transgation1 h-[100vh] w-[70%] md:w-[50%] top-0 bg-gray-900`}
      >
        <div className="flex transgation1 items-center justify-between px-4 py-4 bg-white">
          <p className="text-4xl text-slate-900 ">Tarif Menu</p>
          <RxCross2
            className="text-4xl text-slate-900"
            onClick={showMobileHandler}
          />
        </div>
        <ul className="px-4">
          {navLink.map((link) => (
            <Link
              to={link.href}
              className="text-2xl flex items-center py-4 justify-between text-slate-50"
              key={link.id}
            >
              <li>{link.name}</li> <BiChevronDown className="text-4xl" />
            </Link>
          ))}
        </ul>
        <div className=" absolute top-[80%] py-11 flex w-full text-white justify-around items-center">
          <FiPhoneCall />
          <BsFacebook />
          <SiFiverr />
        </div>
      </div>

      <div
        className={`  ${
          !showMessageMenu ? "top-[-2000%]" : "top-[0%]"
        }  absolute block h-[100vh] md:left-[48%] lg:left-[68%] transgation1 overflow-y-scroll w-[510px] max-w-[450px]  bg-slate-900 top-0 z-50`}
      >
        <MessageMe />
      </div>
      <div className="realtive">
        <div
          className={` ${
            showMessageMenu ? "top-[15%] md:top-[0%] " : "top-[-100%]"
          } absolute block left-[80%] md:left-[43%] lg:left-[65%] z-50 transgation1`}
        >
          <AiFillCloseCircle
            onClick={showMessageMeHandler}
            className="text-5xl cursor-pointer text-slate-400"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
