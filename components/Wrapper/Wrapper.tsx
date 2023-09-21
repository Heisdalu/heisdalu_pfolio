import React, { FC, ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className="relative bg-spb py-1 border-1">{children}</div>;
};
export default Wrapper;
