import { GiGymBag } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import BenefitsCard from "./BenefitsCard";
import { MdSportsGymnastics } from "react-icons/md";
import { motion } from "framer-motion";

const ChooseUs = () => {
  return (
    <>
      {/* head text  */}
      <div className="w-full flex flex-col overflow-hidden max-lg:overflow-hidden  items-center justify-center mt-[100px] gap-5 ">
        <h3 className="text-xl text-orange-600  font-semibold uppercase max-sm:text-[20px]">
          Why Choose us
        </h3>
        <p className="text-3xl text-gray-900 font-semibold  text-center max-sm:text-[25px]  ">
          Benefits of online tutoring <br />
          services with us
        </p>
      </div>
      {/* cards Section */}

      <div className="mt-[44px] lg:m-[80px] place-items-center grid lg:grid-cols-4 gap-5 md:grid-cols-2 max-md:grid-cols-1 max-md:p-5 ">
        <motion.span
          className="m-0 p-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <BenefitsCard
            color={"bg-secondary"}
            icon={<MdSportsGymnastics />}
            title="One-on-one Teaching"
            text="All of our special education experts have a degree in special education."
          />
        </motion.span>
        <motion.span
          className="m-0 p-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <BenefitsCard
            color={"bg-green-500"}
            icon={<IoIosFitness />}
            title="24/7 Tutor Availability"
            text="Our tutors are always available to respond as quick as possible for you"
          />
        </motion.span>
        <motion.span
          className="m-0 p-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <BenefitsCard
            color={"bg-orange-500"}
            icon={<GiGymBag />}
            title="Interactive Whiteboard"
            text="Our digital whiteboard equipped with audio and video chat fetures."
          />{" "}
        </motion.span>
        <motion.span
          className="m-0 p-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <BenefitsCard
            color={"bg-pink-500"}
            icon={<MdSportsGymnastics />}
            title="Affordable Prices"
            text="Choose an expert tutor based on your budget and per hour."
          />
        </motion.span>
      </div>
    </>
  );
};

export default ChooseUs;
