import styled from 'styled-components';

export const LeftStyled = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 1fr;
  justify-self: center;
  align-items: center;
  max-height: 100vh;
  .blankright {
    display: block;
  }

  @media (max-width: 950px) {
    justify-self: center;
  }
`;
