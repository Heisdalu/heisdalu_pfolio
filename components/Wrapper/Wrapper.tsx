import React, { FC, ReactNode } from "react";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: [
    {
      path: "../../fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className={`relative bg-spb py-1 ${clashDisplay.className}`}>
      {children}
    </div>
  );
};
export default Wrapper;
