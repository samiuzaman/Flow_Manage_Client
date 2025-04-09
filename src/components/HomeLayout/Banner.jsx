// import BannerBg from "../../assets/students.jpg";
import { Button } from "keep-react";
import GirlImg from "../../assets/girl.png";
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
      className={`bg-[#EAE1BA] flex flex-col lg:flex-row justify-between items-center px-[7%] z-20`}
    >
      <div className="w-full lg:w-1/2 space-y-4 p-2 lg:p-6 py-8">
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="400"
          className="text-3xl lg:text-4xl font-bold text-[#e056fd] leading-relaxed"
        >
          Your Journey to Mastery Starts Here, Find the Perfect
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="600"
          className="text-metal-800 font-Noto italic pb-5"
        >
          Welcome to Tutor World, your ultimate platform for connecting with
          expert tutors across the globe. Whether you're looking to master a new
          language, excel in academics, or explore a skill, we've got the
          perfect tutor for you
        </p>
        <Link to={`/findTutors`}>
          <Button
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="800"
            color="success"
          >
            Check Our Tutors
          </Button>
        </Link>
      </div>
      <div className="w-full lg:w-1/2 pt-8 z-10">
        <motion.img
          animate={{ x: 40 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="w-5/6"
          src={GirlImg}
        />
      </div>
    </div>
  );
};

export default Banner;
