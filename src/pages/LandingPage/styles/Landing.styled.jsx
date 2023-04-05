import styled from 'styled-components';

export const StyledLandingEvents = styled.section`
  padding-inline: 5vw;

  h3 {
    font-size: 3rem;
    svg {
      width: 3rem;
      height: 3rem;
      fill: var(--clr-blue);
    }
    span {
      color: var(--clr-blue);
    }
  }

  h4 {
    font-size: 3rem;
    margin-top: 4rem;
  }
  @media (min-width: 70em) {
    padding-inline: 13vw;
  }
  ul{
    overflow: auto;
    display: flex;
    position: relative;
    margin-bottom: 0;
    padding-bottom: 1.6rem;
    padding-left: 0;
    
    button{
      background: none;
      border: none;
      text-align: left;
      color: #6f7287;
      text-decoration: none;
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
      &:hover {
        cursor: pointer;
        border-bottom: 2px solid #000;
        padding-bottom: 3px;
        color: black;
      }
    }
    li{
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 1.6rem;
      
    }
    .first-Filter{
      padding-left: 0;
    }
  }
  
  }
`;

export const StyledEventsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  .event__box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all 0.1s ease-out;
    box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
    padding-bottom: 2rem;
    margin-top: 2rem;

    & > * {
      padding-inline: 2rem;
    }
    img {
      padding-inline: 0rem;
    }
    h5 {
      font-size: 2rem;
      font-weight: 700;
    }
    h6 {
      color: #d1410c;
      font-size: 1.6rem;
    }
    p {
      font-weight: 400;
      color: #6f7287;
    }
    span {
      font-size: 1.4rem;
      font-weight: 600;
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    &:hover {
      box-shadow: 0px 25px 75px 1px rgba(29, 34, 46, 0.1);
    }
  }
`;
