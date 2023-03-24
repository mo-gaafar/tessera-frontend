/**
 * @file MainContainer.jsx
 * @author @seif-kishtah
 * @description This file contains the MainContainer component and its logic
 * @exports MainContainer
 * @requires ./leftContainer/leftContainer
 * @requires ./rightContainer/RightContainer
 * 
 */
import { MainContainerStyled } from './MainContainer.styled';
import RightContainer from './rightContainer/RightContainer';
import LeftContainer from './leftContainer/leftContainer';

/**
 * @module MainContainer
 * @returns {JSX.Element} MainContainer component
 * @description This function is a component that renders the main container
 * @returns {JSX.Element} MainContainer component
 */
export default function Maincontainer() {
  return (
    <MainContainerStyled>
      <LeftContainer />
      <RightContainer></RightContainer>
    </MainContainerStyled>
  );
}
