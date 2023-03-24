import styled from "styled-components";

export const LeftStyled = styled.div`
  background-color: white;
  display: grid;
  grid-template-columns: 25% auto 25%;
  .blankright {
    display: block;
  }

  @media (max-width: 950px) {
    width: 100vw;
    height: 100vh;
  }
`;
