"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultColors } from "@/utils/colors";
import { fonts } from "@/utils/styling";
import { navLinks } from "@/utils/constants";
import Link from "next/link";

const BurgerMenu = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <StyledBurgerMenu>
      <BurgerIcon setIsActive={setIsActive} isActive={isActive} />
      <div
        className="dropdown"
        style={{
          transform: !isActive ? "translateY(-160%)" : "translateY(-1px)",
          transitionDelay: "0.25s",
        }}
      >
        {navLinks.map((navLink) => (
          <div key={navLink.title}>
            <Link href={navLink.link}>{navLink.title}</Link>
          </div>
        ))}
      </div>
    </StyledBurgerMenu>
  );
};

const StyledBurgerMenu = styled.div`
  width: 100%;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .dropdown {
    width: 100%;
    background-color: ${defaultColors.primaryBlack};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem 1.5rem;
    color: ${defaultColors.primaryWhite};
    transition: all 0.5s ease-in-out;
  }
`;

const BurgerIcon = ({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <StyledBurgerIcon
      style={{
        backgroundColor: isActive
          ? defaultColors.primaryBlack
          : defaultColors.primaryWhite,
        width: isActive ? "100%" : "99%",
      }}
    >
      <div
        className="cursor-pointer flex gap-2 items-center"
        onClick={() => setIsActive(!isActive)}
      >
        <div>
          <motion.div
            className="lines first-line"
            initial={{
              rotate: "0deg",
              marginBottom: "0.5rem",
              border: `2px solid ${defaultColors.primaryBlack}`,
            }}
            animate={
              isActive
                ? {
                    rotate: "40deg",
                    marginBottom: "0",
                    border: `2px solid ${defaultColors.primaryWhite}`,
                  }
                : {
                    rotate: "0deg",
                    marginBottom: "0.5rem",
                    border: `2px solid ${defaultColors.primaryBlack}`,
                  }
            }
          />
          <motion.div
            className="lines second-line"
            initial={{
              rotate: "0deg",
              marginTop: "0",
              border: `2px solid ${defaultColors.primaryBlack}`,
            }}
            animate={
              isActive
                ? {
                    rotate: "-40deg",
                    marginTop: "-3px",
                    border: `2px solid ${defaultColors.primaryWhite}`,
                  }
                : {
                    rotate: "0deg",
                    marginTop: "0",
                    border: `2px solid ${defaultColors.primaryBlack}`,
                  }
            }
          />
        </div>

        {/* <div className="menu">Menu</div> */}
      </div>
    </StyledBurgerIcon>
  );
};

const StyledBurgerIcon = styled.div`
  padding-right: 1.5rem;
  padding-bottom: 1rem;
  padding-top: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .lines {
    width: 2rem;
  }

  .menu {
    font-family: ${fonts.secondary}, sans-serif;
  }
`;

export default BurgerMenu;
