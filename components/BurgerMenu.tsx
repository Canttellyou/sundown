"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultColors } from "@/utils/colors";
import { fonts } from "@/utils/styling";

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <div>
      <BurgerIcon setIsActive={setIsActive} isActive={isActive} />
    </div>
  );
};

const BurgerIcon = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <StyledBurgerIcon>
      <div
        className="cursor-pointer flex gap-2 items-center"
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <motion.div
            className="lines first-line"
            initial={{ rotate: "0deg", marginBottom: "0.5rem" }}
            animate={
              isActive
                ? { rotate: "40deg", marginBottom: "0" }
                : { rotate: "0deg", marginBottom: "0.5rem" }
            }
          />
          <motion.div
            className="lines second-line"
            initial={{ rotate: "0deg", marginTop: "0" }}
            animate={
              isActive
                ? { rotate: "-40deg", marginTop: "-3px" }
                : { rotate: "0deg", marginTop: "0" }
            }
          />
        </div>

        <div className="menu">Menu</div>
      </div>
    </StyledBurgerIcon>
  );
};

const StyledBurgerIcon = styled.div`
  .lines {
    width: 2rem;
    border: 2px solid ${defaultColors.primaryBlack};
  }

  .menu {
    font-family: ${fonts.secondary}, sans-serif;
  }
`;

export default BurgerMenu;
