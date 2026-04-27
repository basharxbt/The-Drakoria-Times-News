import React from "react";
import { format } from "date-fns";

import headImg from "@/assets/logo.png";
import Image from "next/image";
import { UnifrakturCook } from "next/font/google";

const Unifraktur = UnifrakturCook({
  variable: "--font-unifraktur-cook",
  subsets: ["latin"],
  weight: ["700"],
});
const Header = () => {
  return (
    <div className="mx-auto my-10 text-center space-y-2">
      <h1 className={`${Unifraktur.className} text-7xl text-neutral-700`}>
        The Drakoria Times
      </h1>
      <h2 className="text-neutral-600">Journalism Without Fear or Favour</h2>
      <h2>{format(new Date(), "EEEE, MMM dd, yyyy")}</h2>
    </div>
  );
};

export default Header;
