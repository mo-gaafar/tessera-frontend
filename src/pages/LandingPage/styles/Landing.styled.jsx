import styled from 'styled-components';

export const StyledNav = styled.div`
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 5rem;
    position: relative;
    padding-right: 2rem;
    .menu {
      width: 20rem;
      position: absolute;
      top: 7rem;
      right: 0;
      background-color: white;
      z-index: 5;
      ul {
        display: flex;
        flex-direction: column;
        padding-left: 0;
        text-align: left;
        justify-content: start;
      }

      li {
        padding-left: 2rem;
        color: #6f7287;
      }
    }
    img {
      width: 10rem;
      height: 2.7rem;
    }

    .logged__nav__list {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-block: 0;
      li {
        height: 7rem;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: 500;
        color: rgb(57, 54, 79);
        display: flex;
        align-items: center;
        gap: 1rem;
        span {
          border: solid 5px #f8f7fa;
          border-radius: 50%;
        }
        .user__svg {
          width: 2.5rem;
          height: 2.5rem;
        }
        :hover {
          background-color: #f8f7fa;
        }
      }
      .logged__nav__list__create {
        color: rgb(61, 100, 255);
        padding-top: 1rem;

        flex-direction: column;
        svg {
          width: 2rem;
          height: 2rem;
          path {
            fill: rgb(61, 100, 255);
          }
        }
      }
    }
  }
`;

export const StyledLandingEvents = styled.section`
  input {
    color: #3659e3;
    border: none;
    outline: none;
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: 0.5px;
    line-height: 40px;
    border-bottom: 2px solid #eeedf2;
    :focus {
      color: #6f7287;
    }
    :active {
      color: #6f7287;
    }
    ::placeholder {
      color: #3659e3;
    }
  }
  .location__dropdown {
    top: 3.5rem;
    left: 15rem;
    color: #39364f;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: absolute;
    font-size: 1.4rem;
    font-weight: 400;
    z-index: 5;
    box-shadow: 0 1px 17px 0 rgba(40, 44, 53, 0.1),
      0 2px 4px 0 rgba(40, 44, 53, 0.1);
    border-bottom: 1px solid #eeedf2;
    padding-bottom: 0;
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: 5rem;
      padding-left: 1rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
      width: 40rem;
      :hover {
        background-color: #f8f7fa;
      }
      svg {
        width: 3rem;
        height: 3rem;
      }
    }
  }

  padding-inline: 5vw;
  h3 {
    position: relative;
    margin-top: 2rem;
    font-size: 3rem;
    display: flex;
    align-items: center;
    z-index: 5;
    svg {
      width: 4rem;
      height: 4rem;
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
  .date-dropdown {
    .remove-button {
      background: none;
      border: none;
      text-align: left;
      cursor: pointer;
    }

    .dropdown-content {
      position: absolute;
      background-color: white;
      width: 35rem;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;

      .grid.grid-cols-7.p-3.gap-2 {
        button {
          padding-left: 1.8rem;
          padding-right: 1.4rem;
          &:focus {
            border-radius: 95%;
            border: 0.5px solid blue;
            padding-left: 1.4rem;
            padding-right: 1.4rem;
          }
        }
      }

      .flex.justify-between.items-center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
      }
      .flex {
        /* .drop-shadow-sm.shadow-sm.min-w-[10rem].p-3.rounded-lg.border.flex.flex-col {
          background-color: red;
        } */
      }

      .grid.grid-cols-7.p-3.gap-2.mt-3 {
        display: flex;

        .text-center.w-12 {
          margin-right: 1rem;
          margin-left: 1rem;
        }
      }
      button {
        border: none;
        background: none;
        svg {
          width: 2rem;
        }
      }
    }

    ul {
      display: block;
      margin: 8px 0;
      padding: 0;
      list-style-type: none;
    }
    .drop-button {
      width: 100%;
      background: none;
      border: none;
      text-align: left;
      color: #39364f;
      font-size: 1.5rem;
      text-decoration: none;
      padding: 1.4rem;
      &:hover {
        cursor: pointer;
        background-color: #eeedf2;
      }
    }
  }

  .you--options {
    border-radius: 24px;
    background-color: #fff;
    box-shadow: inset 0 0 0 2px #eeedf2;
    padding-left: 2px;
    height: 44px;
    cursor: pointer;
    transition: all 0.24s cubic-bezier(0.4, 0, 0.3, 1);
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    outline: none;
    padding: 2rem;
    img {
      display: inline-block;
      margin: 0 auto;
      vertical-align: middle;
      background-size: contain;
      line-height: 0;
      background: transperent;
      height: 1.2rem;
    }
    span {
      color: #39364f;
      padding-right: 0.7rem;
    }
    &:hover {
      box-shadow: inset 0 0 0 2px blue;
    }
  }

  ul {
    overflow: auto;
    display: flex;
    position: relative;
    margin-bottom: 0;
    padding-bottom: 1.6rem;
    padding-left: 0;

    .nav--filter {
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
    li {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 1.6rem;
    }
    .first-Filter {
      padding-left: 0;
    }
  }
`;

export const StyledEventsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  .error-img {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin: auto;
    vertical-align: top;
  }
  .event__box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transition: all 0.1s ease-out;
    box-shadow: 0 16px 64px -16px rgba(46, 55, 77, 0.1);
    padding-bottom: 2rem;
    margin-top: 2rem;
    @media (min-width: 70em) {
      max-width: 33rem;
    }
    & > * {
      padding-inline: 2rem;
    }
    img:first-child {
      padding-inline: 0rem;
      max-height: 21rem;
      @media (min-width: 70em) {
        max-height: 14rem;
      }
    }
    .followers {
      justify-self: flex-end;
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
