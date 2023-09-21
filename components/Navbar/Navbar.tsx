import React, { FC } from "react";
import HamBurger from "./HamBurger";
import Logo from "./Logo";

export const Navbar: FC = () => {
  return (
    <div className="px-1.5 flex border-white border">
      <Logo />
      <HamBurger />
    </div>
  );
};