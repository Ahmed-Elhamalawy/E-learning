import image from "../assets/scheduleSectionimage2.png";
import { motion } from "framer-motion";

const CustomizeSchedule = () => {
  return (
    <>
      <div className=" p-[111px]  grid grid-cols-1 lg:grid-cols-2 max-md:flex-col max-md:p-0 max-md:text-center  bg-[#f9fafc] place-content-center place-items-center">
        {/* image section */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              stiffness: 100,
            },
          }}
        >
          <img className="h-full w-[400px]" src={image} alt="" />
        </motion.div>
        {/* text section */}
        <div className="flex flex-col gap-[16px]  p-10 justify-center items-start max-md:items-center">
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[15px] text-orange-600  font-semibold uppercase max-md:text-[15px]"
          >
            CUSTOMIZE WITH YOUR SCHEDULE
          </motion.h3>
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[24px] font-semibold max-md:text-[20px]"
          >
            Personalized Professional Online Tutor on Your Schedule
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-[14px] text-slate-500 max-md:text-[13px]"
          >
            Our scheduling system allows you to select based on your free time.
            Lorem ipsum demo text for template. Keep track of your students
            class and tutoring schedules, and never miss your lectures. The best
            online class scheduling system with easy accessibility.Lorem ipsum
            is a placeholder text commonly used to demonstrate the visual form
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="px-[24px] mt-[20px] py-[12px] bg-primary rounded-full hover:scale-110 transition-all duration-300 font-semibold"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default CustomizeSchedule;
