/**
 * @fileoverview This file contains the RightContainer component
 * @name RightContainer.jsx
 * @author @seif-kishtah
 * @requires ./right.styled
 * @exports RightContainer
 * @description This file contains the RightContainer component and its logic
 */
import { RightStyled } from "./right.styled";

/**
 * @module RightContainer
 * @returns {JSX.Element} RightContainer component
 * @description This function is a component that renders the right container
 * @returns {JSX.Element} RightContainer component
 */
export default function RightContainer() {
  return (
    <RightStyled>
      <img src="https://cdn.evbstatic.com/s3-build/perm_001/0fff4c/django/images/login/lateral-image-2-hd.jpg" />
    </RightStyled>
  );
}
