import React, { FC } from "react";
import HamBurger from "./HamBurger";
import Logo from "./Logo";

export const Navbar: FC = () => {
  return (
    <div className="flex border-white border-1">
      <Logo />
      <HamBurger />
    </div>
  );
};
