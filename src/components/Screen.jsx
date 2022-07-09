import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <button className="screen" max={70} mode="single">
      {calc.num ? calc.num : calc.res}
    </button>
  );
};

export default Screen;
