import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBarBtn: FC<{ title: string }> = ({ title }) => {
  const { pathname } = useRouter();

  const btnpath = title === "home" ? "/" : `/${title}`;

  return (
    <Link href={btnpath} className="pl-1 md:px-1 flex items-center relative">
      {pathname === btnpath && (
        <span className="rounded-full left-[-5px] absolute block h-[5px] w-[5px] bg-yellow md:bottom-[0] md:left-[50%] md:translate-x-[-50%]"></span>
      )}
      <span
        className={`text-[1.25rem] md:text-[1.125rem] ${
          btnpath === pathname ? "text-yellow" : "text-white"
        }  font-[500] capitalize`}
      >
        {title}
      </span>
    </Link>
  );
};
export default SideBarBtn;
