const BenefitsCard = ({ icon, title, text, color, delay }) => {
  return (
    <>
      <div
        id="card"
        className="rounded-[10px] min-h-[213px] flex flex-col items-start  justify-center text-start w-[262px] h-auto p-[24px] bg-white gap-[16px] max-md:w-full  "
      >
        <span className={`text-white ${color} rounded-md text-[30px] p-[8px]`}>
          {icon}
        </span>
        <h3 className="text-[#000000] font-[600]">{title}</h3>
        <p className="text-[#757575] w-full text-[14px] ">{text}</p>
      </div>
    </>
  );
};

export default BenefitsCard;
