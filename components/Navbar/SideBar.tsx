import { FC } from "react";
import Logo from "./Logo";
import SideBarBtn from "./SideBarBtn";

const SideBar: FC<{ clicked: boolean }> = ({ clicked }) => {
  return (
    <div
      className={`${
        clicked ? "translate-x-[0]" : "translate-x-[-100%]"
      } transition-all duration-500 ease-linear space-y-1.5 px-1.5 py-1 w-[200px] h-[100vh] absolute bg-otherBlack top-[0] left-[0] md:relative md:flex md:ml-auto md:space-x-2 md:w-auto md:h-auto md:translate-x-[0] md:transition-none md:py-[0] md:space-y-[0]`}
    >
      <div className="mb-[3rem] md:hidden">
        <Logo />
      </div>

      <SideBarBtn title={"home"} />
      <SideBarBtn title={"projects"} />
      <SideBarBtn title={"contact"} />
    </div>
  );
};
export default SideBar;
