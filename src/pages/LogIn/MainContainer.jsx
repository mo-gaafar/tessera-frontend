import { MainContainerStyled } from './styles/MainContainer.styled';
import RightContainer from './RightContainer';
import LeftContainer from './leftContainer';
/**
 * @file MainContainer.jsx
 * @author @seif-kishtah
 * @description This file contains the MainContainer component and its logic
 * @exports MainContainer
 * @requires ./leftContainer/leftContainer
 * @requires ./rightContainer/RightContainer
 *
 */

/**
 * @module MainContainer
 * @returns {JSX.Element} MainContainer component
 * @description This function is a component that renders the main container for the login page
 * @returns {JSX.Element} MainContainer component
 */

export default function Maincontainer() {
  return (
    <MainContainerStyled>
      <LeftContainer />
      <RightContainer />
    </MainContainerStyled>
  );
}
