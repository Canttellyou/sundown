"use client";
import { logo } from "@/images";
import { defaultStyles } from "@/utils/styling";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { CustomButton } from ".";
import Link from "next/link";

const Navbar = () => {
  const navLinks = [
    { link: "/", title: "Work" },
    { link: "/", title: "Studio" },
    { link: "/", title: "Contact" },
  ];
  return (
    <StyledNav>
      <div className="img-container">
        <Image src={logo} alt="Beyond Design Logo" priority={true} />
      </div>

      <div className="desktop-links">
        {navLinks.map((item, index) => (
          <Link key={index} href={item.link}>
            <CustomButton title={item.title} />
          </Link>
        ))}
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
    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .desktop-links {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export default Navbar;
