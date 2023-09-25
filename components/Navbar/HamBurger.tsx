import { FC, useState, MouseEventHandler } from "react";
import SideBar from "./SideBar";

const HamBurger: FC = () => {
  const [clicked, setClicked] = useState(false);
  const clickHandler: MouseEventHandler<
    HTMLButtonElement | HTMLDivElement | void
  > = () => {
    setClicked((prev) => !prev);
  };

  return (
    <>
      <button
        onClick={clickHandler}
        className="md:hidden ml-auto py-[1] space-y-[0.3125rem]"
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

      <SideBar clicked={clicked} toggleClicked={clickHandler} />
      {clicked && (
        <div
          onClick={clickHandler}
          aria-label="modal overlay"
          className="bg-transparent h-[100vh] absolute w-[100%] left-[0] top-[0] z-[2] md:hidden"
        ></div>
      )}
    </>
  );
};
export default HamBurger;
