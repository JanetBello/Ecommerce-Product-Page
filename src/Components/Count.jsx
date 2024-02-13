import { useState } from "react";
import minus from "../images/icon-minus.svg";
import plus from "../images/icon-plus.svg";

const Counts = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count >= 10) return;
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return (
    <div className=" py-3 px-5 rounded-xl flex justify-between bg-slate-200 md:p-2 md:w-2/6">
      <button className="" onClick={decreaseCount}>
        <img src={minus} />
      </button>
      <p className=" pt-2">{count}</p>
      <button className="" onClick={increaseCount}>
        <img src={plus} />
      </button>
    </div>
  );
};
export default Counts;
