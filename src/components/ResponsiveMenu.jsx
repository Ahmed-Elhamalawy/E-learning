import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden  top-0 left-0 w- z-50"
        >
          <div className="text-xl font-semibold bg-primary text-white m-6  py-4 rounded-3xl">
            <ul className="uppercase flex flex-col gap-10 items-center justify-center">
              <li>Home</li>
              <li>about</li>
              <li>services</li>
              <li>contact</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
