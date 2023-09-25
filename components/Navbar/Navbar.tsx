import React, { FC } from "react";
import HamBurger from "./HamBurger";
import Logo from "./Logo";

export const Navbar: FC = () => {
  return (
    <div className="px-[2.5rem] md:py-[0.1875rem] flex md:px-64 vlg:pl-80">
      <Logo />
      <HamBurger />
    </div>
  );
};