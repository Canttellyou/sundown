"use client";
import { createGlobalStyle } from "styled-components";

export const defaultStyles = {
  paddingHorizontal: "3.45%",
  paddingHorizontalBig: "6.5%",
  boxBorderRadius: "1.25em",
};

export const fonts = {
  primary: "NeueHaasDisplay-Mediu",
  secondary: "NeueHaasDisplay-Roman",
};

export const GlobalStyle = createGlobalStyle`
body{
width: 100%;
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  background-color: #efeae3;
  font-family: ${fonts.secondary}, sans-serif;
  color: #0b0500;
  position: relative;
}
`;
