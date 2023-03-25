/**
 * @fileoverview This file contains the RightContainer component
 * @name RightContainer.jsx
 * @author @seif-kishtah
 * @requires ./right.styled
 * @exports RightContainer
 * @description This file contains the RightContainer component and its logic
 */
import { RightStyled } from './styles/right.styled';
import { ImageRight } from './styles/SignUpEmail.styled';
/**
 * @module RightContainer
 * @returns {JSX.Element} RightContainer component
 * @description This function is a component that renders the right container
 * @returns {JSX.Element} RightContainer component
 */
export default function RightContainer() {
  return (
    <RightStyled>
      {/* <img src="https://cdn.evbstatic.com/s3-build/perm_001/0fff4c/django/images/login/lateral-image-2-hd.jpg" /> */}
      <picture>
        <source
          media="(min-width: 1608px)"
          srcSet="https://cdn.evbstatic.com/s3-build/perm_001/0fff4c/django/images/login/lateral-image-2-hd.jpg"
        />
        <source
          media="(min-width: 960px)"
          srcSet="https://cdn.evbstatic.com/s3-build/perm_001/530d34/django/images/login/lateral-image-2.jpg"
        />
        <img
          src="https://cdn.evbstatic.com/s3-build/perm_001/530d34/django/images/login/lateral-image-2.jpg"
          alt="Chris standing up holding his daughter Elva"
        />
      </picture>
    </RightStyled>
  );
}
