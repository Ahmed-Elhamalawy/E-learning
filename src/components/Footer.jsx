import { BsLinkedin } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { MdComputer } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div id="footerImage" className="px-20">
        <section className="grid lg:grid-cols-4 md:grid-cols-2 maxsm:grid-cols-1  lg:px-[200px] lg:gap-56 pt-[50px] pb-[100px]">
          <div className="w-[236px] h-[250px] text-2xl flex flex-col items-start justify-center font-bold gap-5">
            <span className="flex justify-start">
              <p>
                <MdComputer className="text-3xl text-secondary mx-2" />
              </p>
              <p>E-Tutor</p>
            </span>
            <span className="flex flex-col">
              <p className="text-sm font-basic opacity-60">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                placeat quaerat doloribus odit perferendis autem blanditiis,
                nihil pariatur iusto accusamus.
              </p>
            </span>
            <h3 className="flex gap-5 mt-2 text-3xl">
              <AiFillFacebook />
              <AiOutlineInstagram />
              <ImLocation />
              <BsLinkedin />
            </h3>
          </div>
          <div className="w-[236px] h-[250px] text-2xl flex flex-col mt-6  font-bold ">
            <h3 className="text-2xl mb-4"> Important Links </h3>
            <h3 className="text-[18px] font-sans font-[300]">Home</h3>
            <h3 className="text-[18px] font-sans font-[300]">About</h3>
            <h3 className="text-[18px] font-sans font-[300]">Services</h3>
            <h3 className="text-[18px] font-sans font-[300]">Login</h3>
          </div>
          <div className="w-[236px] h-[250px] text-2xl flex flex-col mt-6  font-bold ">
            <h3 className="text-2xl mb-4"> Company Links </h3>
            <h3 className="text-[18px] font-sans font-[300]">Our Servies</h3>
            <h3 className="text-[18px] font-sans font-[300]">Contact</h3>
            <h3 className="text-[18px] font-sans font-[300]">Privacy Policy</h3>
          </div>
          <div className="w-[236px] h-[250px] text-2xl flex flex-col mt-6  font-bold ">
            <h3 className="text-2xl mb-4"> Resources</h3>
            <h3 className="text-[18px] font-sans font-[300]">Home</h3>
            <h3 className="text-[18px] font-sans font-[300]">About</h3>
            <h3 className="text-[18px] font-sans font-[300]">Services</h3>
            <h3 className="text-[18px] font-sans font-[300]">Login</h3>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
