import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";

import { ButtonGroup, Input, InputIcon, Button } from "keep-react";
import { Envelope } from "phosphor-react";

const Footer = () => {
  return (
    <div className={` bg-[#F4F5FA] dark:bg-metal-900 shadow-small `}>
      <div className="w-full lg:w-5/6 mx-auto px-6 lg:px-20 py-10 2xl:px-0">
        <div className="flex flex-col justify-center items-center space-y-5">
          <footer
            className={`flex justify-center gap-1 items-center text-2xl  font-semibold`}
          >
            <img className="w-18 h-8" src={Logo} />
            <span className="text-[#F4AA25]">Flow</span>{" "}
            <span className="text-[#4bb8e7]">Manage</span>
          </footer>

          <footer>
            <ul className="flex gap-6 text-body-3 font-normal text-metal-600 dark:text-metal-300">
              <li>Home</li>
              <li>Dashboard</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </footer>
          <footer className="text-[#A4A4A6] text-center space-y-2">
            <p>Collins Street West, Victoria 8007, Australia.</p>
            <p>+1 246-345-0695</p>
            <p>info@flowmanage.com</p>
          </footer>
        </div>
      </div>
      <div
        className={`bg-[#0B89CA] border-t border-t-metal-400 py-5 text-cente `}
      >
        <p className="text-body-4 font-normal text-center text-white dark:text-metal-300">
          &copy;{new Date().getFullYear()} All Rights Reserved by &nbsp;
          <Link href="/" target="_blank" className="font-medium">
            Flow Manage ltd
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
