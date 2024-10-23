import CountUp from "react-countup";

const NumberCounter = () => {
  return (
    <div className="gap-y-5 py-[48px] bg-secondary text-white grid grid-cols-2 lg:grid-cols-4  place-content-center text-center">
      <span className="place-self-center">
        <CountUp
          className="text-3xl font-bold"
          start={0}
          end={872}
          duration={4}
        />
        <h3 className="text-xl ">Expert Tutors</h3>
      </span>{" "}
      <span className="place-self-center">
        <CountUp
          className="text-3xl font-bold"
          start={0}
          end={20000}
          duration={4}
        />
        <span className="text-3xl font-bold">+</span>
        <h3 className="text-xl ">Hours content</h3>
      </span>{" "}
      <span className="place-self-center">
        <CountUp
          className="text-3xl font-bold"
          start={0}
          end={298}
          duration={4}
        />
        <h3 className="text-xl ">Subject and courses</h3>
      </span>{" "}
      <span className="place-self-center">
        <CountUp
          className="text-3xl font-bold"
          start={0}
          end={72878}
          duration={4}
        />
        <span className="text-3xl font-bold">+</span>
        <h3 className="text-xl ">Active students</h3>
      </span>
    </div>
  );
};

export default NumberCounter;
