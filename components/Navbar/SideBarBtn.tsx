import { FC } from "react";
interface Props {
  title: string;
  changeFunc: (nmae: string) => void;
  url: string;
}

const SideBarBtn: FC<Props> = ({ title, changeFunc, url }) => {

  let timeout: any;
  const eventFunc = async () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const hash = window.location.hash === "" ? "#" : window.location.hash;
      changeFunc(hash);
    }, 100);
  };

  const bool = url === `#${title === "home" ? "" : title}`;

  return (
    <a
      href={title === "home" ? "#" : "#" + title}
      className="md:px-1 flex items-center relative"
      onClick={eventFunc}
    >
      {bool && (
        <span className="rounded-full left-[-20px] absolute block h-[5px] w-[5px] bg-yellow md:bottom-[0] md:left-[50%] md:translate-x-[-50%]"></span>
      )}
      <span
        className={`hover:text-yellow text-[1.25rem] md:text-[1.125rem] ${
          bool ? "text-yellow" : "text-white"
        }  font-[500] capitalize`}
      >
        {title}
      </span>
    </a>
  );
};
export default SideBarBtn;
