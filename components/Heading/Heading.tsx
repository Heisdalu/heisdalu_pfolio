import { FC } from "react";

interface HeadingProps {
  title: string;
  style?: string;
}

const Heading: FC<HeadingProps> = ({ title, style }) => {
  return (
    <h1
      className={`border-white text-white flex space-x-1.5 items-center tracking-[0.03rem] font-medium md:self-start md:tracking-[0.0375rem] capitalize`}
    >
      <span className="rounded-full block h-[8px] w-[8px] bg-yellow"></span>
      <span className={`${style}`}>{title}</span>
    </h1>
  );
};
export default Heading;
