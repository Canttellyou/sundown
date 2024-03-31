import React from "react";
import styled from "styled-components";

const BurgerIcon = () => {
  return (
    <StyledBurgerIcon>
      <input
        type="checkbox"
        id="checkbox3"
        className="checkbox3 visuallyHidden"
      />
      <label>
        <div className="hamburger hamburger3">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
      </label>
    </StyledBurgerIcon>
  );
};

const StyledBurgerIcon = styled.div`
  .visuallyHidden {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
  }

  h1 {
    text-align: center;
  }

  .container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .hamburger {
    margin: 0 auto;
    margin-top: 30px;
    width: 30px;
    height: 30px;
    position: relative;
  }

  .hamburger .bar {
    padding: 0;
    width: 30px;
    height: 4px;
    background-color: maroon;
    display: block;
    border-radius: 4px;
    transition: all 0.4s ease-in-out;
    position: absolute;
  }

  .bar1 {
    top: 0;
  }

  .bar2,
  .bar3 {
    top: 13.5px;
  }

  .bar3 {
    right: 0;
  }

  .bar4 {
    bottom: 0;
  }
`;

export default BurgerIcon;
