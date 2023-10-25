import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  classText?: string;
}

const Container: FC<Props> = ({ children, classText }) => {
  return (
    <div className={`${classText} max-w-[1500px] mx-auto`}>{children}</div>
  );
};
export default Container;
