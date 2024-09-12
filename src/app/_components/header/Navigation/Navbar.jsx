import React from "react";
import DesktopLinks from "./DesktopLinks";

// data
import LinkData from "../../data/Links.json";

const Navbar = () => {
  return (
    <nav className='container px-2 flex justify-between mx-auto items-center h-20'>
      <div>ChrisHogan.io</div>
      <DesktopLinks linkData={LinkData} />
    </nav>
  );
};

export default Navbar;
