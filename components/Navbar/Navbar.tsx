import React, { FC } from "react";
import HamBurger from "./HamBurger";
import Logo from "./Logo";

export const Navbar: FC = () => {
  return (
    <div className="border-1 px-[2.5rem] md:py-[0.1875rem] flex border-green-200 md:px-64">
      <Logo />
      <HamBurger />
    </div>
  );
};