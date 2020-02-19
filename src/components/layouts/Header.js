/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Header = () => {
  return (
    <div
      css={css`
        background: #f2f5f6;
        background: -moz-linear-gradient(
          top,
          #f2f5f6 0%,
          #e3eaed 37%,
          #c8d7dc 100%
        );
        background: -webkit-linear-gradient(
          top,
          #f2f5f6 0%,
          #e3eaed 37%,
          #c8d7dc 100%
        );
        background: linear-gradient(
          to bottom,
          #f2f5f6 0%,
          #e3eaed 37%,
          #c8d7dc 100%
        );
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f2f5f6', endColorstr='#c8d7dc',GradientType=0 );

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
