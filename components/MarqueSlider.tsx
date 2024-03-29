import { defaultColors } from "@/utils/colors";
import React from "react";
import Marquee from "react-fast-marquee";
interface MarqueSliderProps {
  list: Array<string>;
}
const MarqueSlider = ({ list }: MarqueSliderProps) => {
  return (
    <Marquee speed={180} className=" mt-16">
      {list.map((item, index) => (
        <div key={index} className="flex items-center">
          <h2
            style={{
              fontSize: "8.5vw",
              padding: "0 1rem",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            {item}
          </h2>
          <div
            style={{
              width: "3vw",
              height: "3vw",
              background: defaultColors.primaryBlue,
              borderRadius: "50%",
            }}
          ></div>
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueSlider;
