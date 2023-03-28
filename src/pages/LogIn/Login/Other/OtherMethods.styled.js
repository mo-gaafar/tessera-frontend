import styled from 'styled-components';

export const OtherSt = styled.div`
  width: 350px;
  height: 100px;
  background-color: white;
  margin-top: 2rem;
  div {
    margin-top: 30px;
    .apple {
      margin-left: 30px;
    }
  }

  label {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.2px;
    font-weight: 600;
  }

  @media (max-width: 950px) {
    display: none;
  }
`;
