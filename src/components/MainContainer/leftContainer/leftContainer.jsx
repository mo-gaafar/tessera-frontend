/**
 * @file leftContainer.jsx
 * @author @seif-kishtah
 * @description This file contains the LeftContainer component and its logic
 * @exports LeftContainer
 * @requires ./Login/login
 * @requires ./leftContainer.styled
 */
import { LeftStyled } from "./leftContainer.styled";
import Login from "./Login/login";

/**
 * @module LeftContainer
 * @returns {JSX.Element} LeftContainer component
 * @description This function is a component that renders the left container
 * @returns {JSX.Element} LeftContainer component
 */
export default function LeftContainer() {
  return (
    <LeftStyled>
      <div id="blankleft" />
      <Login />
      <div id="blankright" />
    </LeftStyled>
  );
}
