// import BannerBg from "../../assets/students.jpg";
import { Button } from "keep-react";
import { motion } from "motion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <div
      data-aos="zoom-in-up"
      className={`py-60 lg:py-80 banner-background flex flex-col lg:flex-row justify-between items-center z-20`}
    >
      <div className="w-full text-center space-y-4 p-2 lg:p-6 py-8">
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="400"
          className="text-3xl lg:text-4xl font-extrabold text-white leading-relaxed"
        >
          Modern Solutions for Employee and Payroll Management
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="600"
          className="w-full lg:w-4/6 mx-auto text-metal-200 font-Noto"
        >
          Manage your team and payments smarter with one powerful platform. From
          assigning daily tasks to tracking employee performance and handling
          monthly salary disbursements—everything is now easier, faster, and
          more organized. Say goodbye to scattered tools and manual processes.
        </p>
        <div className="flex justify-center items-center gap-8">
          <div className="border-2 border-white p-2 bg-warning-25">
            4.2K+ Employees Managed
          </div>
          <div className="border-2 border-white p-2 bg-warning-25">
            1M+ Salary Processed
          </div>
          <div className="border-2 border-white p-2 bg-warning-25">
            99.9% Uptime
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
