import { FC, useEffect, useState, MouseEventHandler } from "react";
import Logo from "./Logo";
import SideBarBtn from "./SideBarBtn";

interface Props {
  toggleClicked: Function;
  clicked: boolean;
}

const SideBar: FC<Props> = ({ clicked, toggleClicked }) => {
  const [url, setUrl] = useState("#");

  const chnageState = (name: any): void => {
    setUrl(name);
    toggleClicked();
  };

  useEffect(() => {
    const value = window.location.hash === "" ? "#" : window.location.hash;
    setUrl(value);
  }, []);

  return (
    <div
      className={`z-[3] ${
        clicked ? "translate-x-[0]" : "translate-x-[-100%]"
      } transition-all duration-500 ease-linear space-y-1.5 px-[2.5rem] py-1 w-[200px] h-[100vh] absolute bg-otherBlack top-[0] left-[0] md:relative md:flex md:ml-auto md:space-x-2  md:w-auto md:h-auto md:translate-x-[0] md:transition-none md:py-[0] md:space-y-[0] md:px-[0] `}
    >
      <div className="mb-[3rem] md:hidden">
        <Logo />
      </div>

      <SideBarBtn title={"home"} changeFunc={chnageState} url={url} />
      <SideBarBtn title={"works"} changeFunc={chnageState} url={url} />
      <SideBarBtn title={"contact"} changeFunc={chnageState} url={url} />
    </div>
  );
};
export default SideBar;
