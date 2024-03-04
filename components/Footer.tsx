"use client";
import { footerTitle, nextIconHover } from "@/images";
import { defaultColors } from "@/utils/colors";
import { defaultStyles, fonts } from "@/utils/styling";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FooterHeightContext, FooterHeightContextProps } from "./Homepage";
import RotatingBalls from "./RotatingBalls";

const Footer = () => {
  //   const { scrollYProgress } = useScroll({
  //     target: targetRef,
  //     offset: ["end end", "end start"],
  //   });

  const contactLinks = [
    {
      title: "Work",
      link: "/",
    },
    {
      title: "Studio",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  //   const y = useTransform(scrollYProgress, [0, 1], ["-80%", "0%"]);

  const footerContext = useContext(FooterHeightContext);

  const targetRef = useRef<HTMLDivElement>(null);

  const socials = [
    {
      title: "Instagram",
      link: "/",
    },
    {
      title: "LinkedIn",
      link: "/",
    },
  ];

  useEffect(() => {
    if (targetRef.current) {
      footerContext?.setHeight(targetRef.current.offsetHeight);
    }
  }, [targetRef, footerContext]);

  const [linkNumber, setLinkNumber] = useState<number>(0);

  return (
    <StyledFooter
      //   style={{
      //     y,
      //   }}
      ref={targetRef}
    >
      {/* <Image className="hand" src={hand} alt="hand" /> */}
      <div className="top-element">
        <div className="balls-container">
          {/* <RotatingBalls /> */}
          <div className="footer-ball"></div>
        </div>
        <div className="contacts">
          {contactLinks.map((link, index) => (
            <div key={index}>
              <Link href={link.link}>{link.title}</Link>
            </div>
          ))}
        </div>
        <div className="newsletter-box">
          <p>
            Get industry insights and creative inspiration straight to your
            inbox.
          </p>

          <div className="email-container">
            <input type="email" required={true} placeholder="Email Address" />
            <div>
              <svg
                width="33"
                height="10"
                viewBox="0 0 33 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5H31"
                  stroke="#000000dd"
                  stroke-linecap="square"
                ></path>
                <path
                  d="M28.5 1.5L32 5L28.5 8.5"
                  stroke="#000000dd"
                  stroke-linecap="square"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-element">
        <div className="img-container">
          <Image src={footerTitle} alt="sundown" />
        </div>

        <div className=" copyright flex w-full justify-between items-center pt-3 pb-3 ">
          <div>Copyright © Beyond Design</div>
          <div className="flex items-center gap-2">
            {" "}
            <Image
              src="https://assets-global.website-files.com/644bc965881cba09e414cd5b/644f97cff2dc8d847606a082_Globe.svg"
              alt="globe"
              width={10}
              height={10}
            />{" "}
            Brooklyn, NY
          </div>
          {socials.map((social, index) => (
            <div
              onMouseEnter={() => setLinkNumber(index + 1)}
              onMouseLeave={() => setLinkNumber(0)}
              className="link flex w-fit flex-col items-start  relative overflow-x-hidden"
              key={index}
            >
              <Link href={social.link}>{social.title}</Link>

              <AnimatePresence>
                {linkNumber === index + 1 && (
                  <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: 0 }}
                    exit={{ left: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="link-line"
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled(motion.footer)`
  width: 100%;
  background-color: ${defaultColors.primaryBlack};
  max-height: 120vh;
  overflow-y: hidden;
  /* background-image: linear-gradient(
    ${defaultColors.primaryBlue},
    ${defaultColors.primaryBlack} 90%
  ); */
  color: ${defaultColors.primaryWhite};
  margin-top: auto;
  position: relative;
  position: fixed;

  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;

  z-index: -10;
  /* transition: all 0.01s ease; */

  .hand {
    position: absolute;
    bottom: -40%;
    width: 55vw;
    z-index: -2;
    left: 20%;
  }

  .top-element {
    padding: ${defaultStyles.paddingHorizontalBig};
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    color: ${defaultColors.primaryBlack};
    position: relative;
    z-index: 12;

    .balls-container {
      position: absolute;
      width: 100vw;
      z-index: -5;
      /* top: ; */
      transform: translateY(-97%);
      left: 0;
      display: flex;
      justify-content: center;
      .footer-ball {
        width: 80vw;
        height: 80vw;
        background-color: ${defaultColors.primaryBlue};
        background-image: linear-gradient(
          ${defaultColors.primaryBlue} 90%,
          ${defaultColors.primaryBlue},
          ${defaultColors.primaryLemon}
        );
        border-radius: 50%;
        /* filter: blur(10px); */
        transform: scale(2.4);
      }
    }

    .contacts {
      font-size: 2rem;
      & > * {
        transition: opacity 0.2s ease;
        line-height: 1.4;
        font-weight: 500;
        &:hover {
          opacity: 0.7;
        }
      }
    }

    .newsletter-box {
      font-family: ${fonts.secondary};
      font-size: 1.2rem;
      max-width: 20rem;
      .email-container {
        margin-top: 2rem;
        display: flex;
        padding-bottom: 0.5rem;
        width: fit-content;
        border-bottom: 1px solid ${defaultColors.placeholder};
        align-items: center;

        input {
          background-color: transparent;
          &:focus {
            outline: none;
          }

          &::placeholder {
            font-size: 1.1rem;
            color: ${defaultColors.placeholder};
          }
        }
        svg {
          cursor: pointer;
        }
      }
    }
  }

  .bottom-element {
    padding: 0 ${defaultStyles.paddingHorizontal};

    .img-container {
      width: 100%;
      display: flex;
      justify-content: center;
      /* background-color: ${defaultColors.primaryBlack}; */
      img {
        width: 80%;
        height: 50vh;
      }
    }

    .copyright {
      border-top: 1.5px solid rgba(239, 234, 227, 0.3);
      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  .link-line {
    width: 100%;
    border: 1px solid ${defaultColors.primaryWhite};
    position: absolute;
    bottom: 0;
  }
`;

export default Footer;
