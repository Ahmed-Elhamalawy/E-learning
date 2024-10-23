import React from "react";
import { motion } from "framer-motion";

const NavBarBanner = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="relative w-full h-auto
           bg-primary flex  items-center justify-center"
        >
          <p className="text-center font-bold md:text-base text-sm w-3/4 my-3">
            Are you a university or school student for an online tutoring
            partnership ?
            <a href="/" className="pl-3 text-secondary font-bold">
              Talk to us
            </a>{" "}
            <span
              onClick={() => setIsOpen(!isOpen)}
              className=" absolute right-10 cursor-pointer h-[50%] "
            >
              X
            </span>
          </p>
        </motion.div>
      )}
    </>
  );
};

export default NavBarBanner;
