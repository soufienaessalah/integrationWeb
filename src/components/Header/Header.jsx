"use client";
import * as React from "react";
import NavigationLinks from "./NavigationLinks";
import LogoutButton from "./LogoutButton";
import HeaderLogo from "./HeaderLogo";
import RedShape from "./RedShape";

function Header() {
  return (
    <header className="relative w-full h-[155px] max-sm:h-[180px]">
      <div className="w-full bg-cyan-600 h-[110px]" />
      <RedShape />
      <NavigationLinks />
      <LogoutButton />
      <HeaderLogo />
    </header>
  );
}

export default Header;
