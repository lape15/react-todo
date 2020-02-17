/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Header = () => {
  return (
    <div
      css={css`
        background-image: linear-gradient(
          to right,
          rgba(255, 0, 0, 0),
          rgba(255, 0, 0, 1)
        );
        /* border: 2px solid red; */
        width: 100%;
        /* max-width: 50%; */
        padding: 2%;
        height: 10vh;
        text-align: center;
      `}
    >
      <h6
        css={css`
          color: #424242;
          padding: 5px;
          font-size: 20px;
          margin-bottom: 10px;
        `}
      >
        TODO LIST
      </h6>
    </div>
  );
};

export default Header;
