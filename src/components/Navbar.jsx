import Link from "next/link";
import React from "react";
import Navlinks from "./Navlinks";
import manImg from "@/assets/user.png";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between ">
      <div></div>
      <ul className="flex gap-3 font-semibold text-neutral-600">
        <li>
          <Navlinks href="/">Home</Navlinks>
        </li>
        <li>
          <Navlinks href="/about">About</Navlinks>
        </li>
        <li>
          <Navlinks href="/contact">Contact</Navlinks>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <FaUserCircle className="text-5xl" />
        <Link href="/auth/login">
          <button className="btn btn-neutral px-10 font-bold">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
