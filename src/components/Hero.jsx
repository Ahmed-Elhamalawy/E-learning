import { BiPlay } from "react-icons/bi";
import photo from "../assets/Hero.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div className="w-full gap-5 items-center justify-center container grid grid-cols-1 md:grid-cols-2">
        {/* brand info */}
        <div
          className="flex 
         flex-col h-[650px] max-sm:h-[400px] justify-center items-start w-full max-md:text-center md:w-[550px] xl:w-[700px] "
        >
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="font-bold text-orange-500 uppercase mb-[24px] w-3/4 max-md:w-full max-md:m-0"
          >
            100% Satisfaction Guarantee
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="sm:text-2xl max-md:w-full md:text-3xl lg:text-6xl font-semibold mb-[24motion.px] max-md:m-0 leading-[80px] w-3/4"
          >
            Find Your Perfect
            <span className="sm:text-2xl max-md:w-full md:text-3xl lg:text-6xl font-bold text-primary pl-5 ">
              Tutor
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-[31px] w-3/4 max-md:w-full"
          >
            We help you find perfect tutor for 1-on-1 lessons. It is completely
            free and private
          </motion.p>
          <motion.span
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-8 items-center max-md:justify-center w-full "
          >
            <button className=" bg-primary font-semibold text-center  text-md rounded-full hover:scale-110 duration-300 p-4 h-[48px] w-[140px] flex items-center justify-center">
              Get Started
            </button>
            <button className="flex  gap-2 max-md:gap-0 items-center ">
              <span className="bg-blue-100  rounded-full">
                <BiPlay className="text-4xl text-blue-600" />
              </span>
              <span className="text-lg font-semibold">See how it works</span>
            </button>
          </motion.span>
        </div>
        {/* brand image */}
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            duration: 5,
            delay: 0.5,
          }}
        >
          <img src={photo} alt="hero" className="w-auto " />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
