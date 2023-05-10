import styled from 'styled-components';

export const StyledMainSidebar = styled.div`
  padding-inline: 1.5rem;
  background-color: #f8f7fa;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 2rem;
  div:first-child {
    margin-top: 2rem;
  }
  .active {
    background-color: #3659e3;
    padding: 0.5rem;
    border-radius: 8px;
    /* margin-left: rem; */
  }
`;

export const StyledCreateTicketSidebar = styled.div`
  background-color: #f8f7fa;
  border-left: 1px solid #eeedf2;
  display: flex;
  flex-direction: column;

  .events__page {
    color: #3d64ff;
    padding-block: 1.5rem;
    font-size: 1.4rem;
    :hover {
      color: #39364f;
    }

    display: flex;
    align-items: center;

    svg {
      width: 2rem;
      height: 2rem;
      fill: #3d64ff;
    }
  }
  > * {
    padding-inline: 2rem;
    padding-right: 8rem;
  }
  > *:not(:last-child) {
    border-bottom: 1px solid #eeedf2;
  }
  .event__details {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: left;
    padding-block: 1.5rem;
    p {
      color: #4b4d63;
      font-weight: 500;
      font-size: 1.4rem;
    }
    a {
      padding: 0;
      :last-child {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #3659e3;
        font-size: 1.4rem;
        margin-bottom: 1rem;
        font-weight: 600;
        :hover {
          text-decoration: underline;
        }
        svg {
          width: 1.5rem;
          height: 1.5rem;
          fill: #3d64ff;
        }
      }
    }
  }
  .event__name {
    color: rgb(30, 10, 60);
    font-size: 2.4rem;
    font-weight: 700;
    letter-spacing: 0.25px;
    padding: 0;
    :hover {
      text-decoration: underline;
      color: #3d64ff;
    }
  }

  .create__event {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: #4b4d63;
    font-size: 1.4rem;
    font-weight: 500;
    a:first-child {
      padding-top: 1.5rem;
    }
    a:last-child {
      padding-bottom: 1.5rem;
    }
    > * {
      padding-block: 1rem;
      padding-inline: 2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      :hover {
        background-color: #eeedf2;
      }
    }
    .navigation-icon {
      width: 2.5rem;
      height: 2.5rem;
      polygon {
        transform: translate(-10px, -10px);
        fill: #fff;
      }
    }
  }
  .others {
    padding: 0;
    color: #4b4d63;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 500;
    > * {
      padding-block: 1.5rem;
      padding-inline: 2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      :hover {
        background-color: #eeedf2;
      }
    }
  }
  .active {
    background-color: #fff;
  }
`;
