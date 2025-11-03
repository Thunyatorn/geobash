"use client"

import { useState } from "react";
import Navboard from "./navboard";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Navboard toggle={toggle} />
    </>
  )
};

export default Navbar;