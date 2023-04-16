import styled from 'styled-components';

export const RightStyled = styled.div`
  picture {
    img {
      max-height: 100vh;
      width: 50vw;
    }
  }
  @media (max-width: 950px) {
    display: none;
  }
`;
