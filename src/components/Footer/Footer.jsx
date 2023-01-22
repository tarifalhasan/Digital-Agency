import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaCode, FaReact } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { Link } from "react-router-dom";
import styles from "../../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className="grid px-5 justify-center gap-8 md:grid-cols-2 py-4 lg:grid-cols-4 grid-cols-1">
      <div>
        <div className="brand">
          <Link to="/">TARIF</Link>
        </div>
        <p className={`${styles.footer_links} py-10`}>
          News letter dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt. Enter your email
        </p>
        <div className="icon flex w-[90%] gap-5 items-center  ">
          <Link to="/facebook">
            <BsFacebook className="text-[18px] transition ease-in-out delay-150	cursor-pointer hover:text-[#ff1f8e] text-slate-600" />
          </Link>
          <Link to="/instagram">
            <BsInstagram className="text-[18px] transition ease-in-out delay-150  hover:text-[#ff1f8e] cursor-pointer text-slate-600" />
          </Link>
          <Link to="/linkdein">
            <BsLinkedin className="text-[18px] transition ease-in-out delay-150 hover:text-[#ff1f8e] cursor-pointer text-slate-600" />
          </Link>
          <Link to="/twitter">
            <AiFillTwitterCircle className="text-[18px] transition ease-in-out delay-150 hover:text-[#ff1f8e] cursor-pointer text-slate-600" />
          </Link>
        </div>
      </div>
      <div>
        <h2 className={`${styles.heading}`}>Contact Us</h2>
        <ul className="py-8">
          <li>
            <div className="flex items-center gap-3">
              <MdEmail /> <h2 className={styles.item_title}>Email</h2>
            </div>
            <span className={`${styles.footer_links} ml-8`}>
              tarifhasan674@gmail.com
            </span>
          </li>
          <li className="py-4">
            <div className="flex items-center gap-3">
              <FiPhoneCall /> <h2 className={styles.item_title}>Email</h2>
            </div>
            <span className={`${styles.footer_links} ml-8`}>+801779158124</span>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <MdLocationOn /> <h2 className={styles.item_title}>Email</h2>
            </div>
            <span className={`${styles.footer_links} ml-8`}>
              Rangpur,Bangladesh
            </span>
          </li>
        </ul>
      </div>
      <div className="services">
        <h2 className={`${styles.heading}`}>Services</h2>
        <ul className="py-8">
          <li>
            <div className="flex items-center gap-3">
              <FaCode /> <h2 className={styles.item_title}>Web Development</h2>
            </div>
          </li>
          <li className="py-4">
            <div className="flex items-center gap-3">
              <FaReact />{" "}
              <h2 className={styles.item_title}>React.js Web App</h2>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <SiMaterialdesignicons />{" "}
              <h2 className={styles.item_title}>Grapics Design</h2>
            </div>
          </li>
        </ul>
      </div>
      <div className="pages">
        <h2 className={`${styles.heading}`}>Conpany</h2>
        <ul className="py-8">
          <li>
            <div className="flex items-center gap-3">
              <Link to="/contact">Contact</Link>
            </div>
          </li>
          <li className="py-4">
            <div className="flex items-center gap-3">
              <Link to="/privecy_policy" className={styles.item_title}>
                Privecy Policy
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center gap-3">
              <Link to="/support" className={styles.item_title}>
                Support Us
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
