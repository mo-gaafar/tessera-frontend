import { MainContainerStyled } from './MainContainer.styled';
import RightContainer from './rightContainer/RightContainer';
import LeftContainer from './leftContainer/leftContainer';
export default function Maincontainer() {
  return (
    <MainContainerStyled>
      <LeftContainer />
      <RightContainer></RightContainer>
    </MainContainerStyled>
  );
}
