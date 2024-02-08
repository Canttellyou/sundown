import React from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./Navbar"), {
  ssr: false,
});

const Homepage = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Homepage;
