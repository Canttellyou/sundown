"use client";
import { logo } from "@/images";
import { defaultStyles } from "@/utils/styling";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { BurgerMenu, CustomButton } from ".";
import Link from "next/link";
import { navLinks } from "@/utils/constants";

const Navbar = () => {
  return (
    <StyledNav>
      <div className="img-container">
        <Image
          className="logo-img"
          src={logo}
          alt="Beyond Design Logo"
          priority={true}
        />
      </div>

      <div className="desktop-links">
        {navLinks.map((item, index) => (
          <Link key={index} href={item.link}>
            <CustomButton title={item.title} />
          </Link>
        ))}
      </div>
      <div className="mobile-nav w-[68%] absolute top-[0] right-0">
        <BurgerMenu />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  padding: 1.8rem ${defaultStyles.paddingHorizontal};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;

  .img-container {
    width: 12.1%;
    @media screen and (max-width: 500px) {
      width: 18%;
    }
    logo-img {
      width: 100%;
      object-fit: contain;
    }
  }

  .desktop-links {
    display: flex;
    align-items: center;
    gap: 12px;
    @media screen and (max-width: 500px) {
      display: none;
    }
  }

  .mobile-nav {
    display: none;

    @media screen and (max-width: 500px) {
      display: initial;
    }
  }
`;

export default Navbar;
