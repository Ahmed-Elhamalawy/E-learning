import { VscStarEmpty } from "react-icons/vsc";
import PropTypes from "prop-types";

const Cards = ({ name, image }) => {
  return (
    <div className="w-[342px] h-[340px] bg-[#e5efff] rounded-2xl shadow-md my-12">
      <div className="flex items-center justify-start gap-5 p-5">
        <img className="w-[80px] h-[80px] rounded-full" src={image} alt="" />
        <span>
          <h3 className="text-[#000000] font-semibold text-2xl">
            {name || "Name"}
          </h3>
          <h3 className="text-[#000000] font-basic text-xl opacity-60">
            {name || "Name"}
          </h3>
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 p-5">
        <p className="opacity-55">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          reiciendis inventore iste ratione ex alias quis magni at optio
        </p>
        <div className="flex gap-2 self-start text-yellow-400 text-xl">
          <VscStarEmpty />
          <VscStarEmpty />
          <VscStarEmpty />
          <VscStarEmpty />
          <VscStarEmpty />
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Cards;
