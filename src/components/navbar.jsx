import React from "react";
import { NavbarMenu } from "../mockData/data";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className=" container flex justify-between items-center py-6">
          {/* logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-secondary" />
            <p>E-Tutor</p>
          </div>
          {/* menu section */}
          <div className="hidden lg:block">
            <ul className="flex gap-4">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    className="text-grey-600 text:sm xl:text-base py-1 px-2 hover:text-secondary transition-all duration-300 font-semibold"
                    href={item.path}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* cta button section */}
          <div className="hidden lg:flex gap-6">
            <button className="font-bold">Sign in </button>
            <button className="bg-secondary text-white font-bold rounded-full px-6 py-2">
              Register
            </button>
          </div>
          {/* mobile hamburger menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.nav>
      <div className="absolute z-20 top-32 w-full">
        <ResponsiveMenu isOpen={isOpen} />
      </div>
    </>
  );
};

export default Navbar;
