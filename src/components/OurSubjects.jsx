import { ImBook } from "react-icons/im";
import { motion } from "framer-motion";

const OurSubjects = () => {
  return (
    <>
      {/* text section */}
      <div className="w-full flex flex-col overflow-hidden max-lg:overflow-hidden  items-center justify-center mt-[100px] gap-5 ">
        <h3 className="text-xl text-orange-600  font-semibold uppercase max-sm:text-[20px]">
          Our tutor subjects
        </h3>
        <p className="text-3xl text-gray-900 font-semibold  text-center max-sm:text-[25px]  ">
          Find Online Tutor in Any Subject
        </p>
      </div>

      {/* cards Section */}
      <div className="w-full px-[180px] max-sm:px-10 gap-[24px] my-10 grid maxsm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  place-items-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            stiffness: 50,
            type: "spring",
          }}
          className="bg-white max-h-[74px] w-[262px] p-5 rounded-lg  border-2 border-blue-200"
        >
          <div className="flex gap-5 items-center">
            <span>
              <ImBook className="text-4xl text-blue-900 bg-blue-200 p-[8px] rounded-lg" />
            </span>
            <h3 className="text-[16px] text-[#000000]  font-[500] uppercase max-sm:text-[20px]">
              spanish
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            stiffness: 50,
            type: "spring",
            delay: 0.2,
          }}
          className="bg-white max-h-[74px] w-[262px] p-5 rounded-lg   border-2 border-blue-200"
        >
          <div className="flex gap-5 items-center">
            <span>
              <ImBook className="text-4xl text-green-900 bg-green-200 p-[8px] rounded-lg" />
            </span>
            <h3 className="text-[16px] text-[#000000]  font-[500] uppercase max-sm:text-[20px]">
              italian
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            stiffness: 50,
            type: "spring",
            delay: 0.4,
          }}
          className="bg-white max-h-[74px] w-[262px] p-5 rounded-lg   border-2 border-blue-200"
        >
          <div className="flex gap-5 items-center">
            <span>
              <ImBook className="text-4xl text-gray-900 bg-gray-200 p-[8px] rounded-lg" />
            </span>
            <h3 className="text-[16px] text-[#000000]  font-[500] uppercase max-sm:text-[20px]">
              English
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            stiffness: 50,
            type: "spring",
            delay: 0.6,
          }}
          className="bg-white max-h-[74px] w-[262px] p-5 rounded-lg   border-2 border-blue-200"
        >
          <div className="flex gap-5 items-center">
            <span>
              <ImBook className="text-4xl text-purple-900 bg-purple-200 p-[8px] rounded-lg" />
            </span>
            <h3 className="text-[16px] text-[#000000]  font-[500] uppercase max-sm:text-[20px]">
              Science
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            stiffness: 50,
            type: "spring",
            delay: 0.8,
          }}
          className="bg-white max-h-[74px] w-[262px] p-5 rounded-lg   border-2 border-blue-200"
        >
          <div className="flex gap-5 items-center">
            <span>
              <ImBook className="text-4xl text-orange-900 bg-orange-200 p-[8px] rounded-lg" />
            </span>
            <h3 className="text-[16px] text-[#000000]  font-[500] uppercase max-sm:text-[20px]">
              History
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            stiffness: 50,
            type: "spring",
            delay: 1,
          }}
          className="bg-white max-h-[74px] w-[262px] p-5 rounded-lg   border-2 border-blue-200"
        >
          <div className="flex gap-5 items-center">
            <span>
              <ImBook className="text-4xl text-fuchsia-900 bg-fuchsia-200 p-[8px] rounded-lg" />
            </span>
            <h3 className="text-[16px] text-[#000000]  font-[500] uppercase max-sm:text-[20px]">
              arabic
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            stiffness: 50,
            type: "spring",
            delay: 1.2,
          }}
          className="bg-white max-h-[74px] w-[262px] p-5 rounded-lg   border-2 border-blue-200"
        >
          <div className="flex gap-5 items-center">
            <span>
              <ImBook className="text-4xl text-amber-900 bg-amber-200 p-[8px] rounded-lg" />
            </span>
            <h3 className="text-[16px] text-[#000000]  font-[500] uppercase max-sm:text-[20px]">
              french
            </h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            stiffness: 50,
            type: "spring",
            delay: 1.4,
          }}
          className="bg-white max-h-[74px] w-[262px] p-5 rounded-lg   border-2 border-blue-200"
        >
          <div className="flex gap-5 items-center w-full">
            <span>
              <ImBook className="text-4xl text-red-900 bg-red-200 p-[8px] rounded-lg" />
            </span>
            <h3 className="text-[16px]  text-[#000000]  font-[500] uppercase max-sm:text-[20px] inline">
              german
            </h3>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default OurSubjects;
