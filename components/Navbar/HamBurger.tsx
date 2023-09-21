import { FC, useState, MouseEventHandler } from "react";
import SideBar from "./SideBar";

const HamBurger: FC = () => {
  const [clicked, setClicked] = useState(false);
  const clickHandler: MouseEventHandler<HTMLButtonElement> = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={clickHandler}
        className="md:hidden ml-auto border-white py-[1] px-1 space-y-[0.3125rem]"
        aria-label="hamburger navigation"
      >
        <div
          className={`${
            clicked ? "box1" : "no_box1"
          } h-[4px] w-[32px] bg-white`}
        ></div>
        <div
          className={`${
            clicked ? "box2" : "no_box2"
          } h-[4px] bg-white w-[32px] ml-auto`}
        ></div>
        <div
          className={`${
            clicked ? "box3" : "no_box3"
          } h-[4px] w-[32px] bg-white`}
        ></div>
      </button>

      <SideBar clicked={clicked} />
    </>
  );
};
export default HamBurger;
