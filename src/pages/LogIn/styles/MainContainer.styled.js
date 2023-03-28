import styled from 'styled-components';

export const MainContainerStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-x: none;
  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;
