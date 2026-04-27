import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Navbar from "@/components/Navbar";
import React from "react";

const LayoutPage = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Headline></Headline>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default LayoutPage;
