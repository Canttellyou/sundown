import React from "react";
import dynamic from "next/dynamic";
import { Navbar } from ".";
// const Navbar = dynamic(() => import("@/components/Navbar"), {
//   ssr: false,
// });

const Homepage = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Homepage;
