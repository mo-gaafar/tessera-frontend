import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  margin: 0px 5rem 5rem 5rem;

  p {
    font-size: 28px;
    line-height: 30px;
    margin-top: 2rem;
    letter-spacing: 0.5px;
    color: #1e0a3c;
    font-weight: 900;

    @media (min-width: 959px) {
      font-size: 55px;
    }
  }
  .other-options {
    border: none;
    border-radius: 50%;
    background: none;
    transition: 0.3s;
    &:hover {
      background: rgba(0, 1, 0, 0.05);
    }
    #vertical-dots {
      color: #4b4d63;
      fill: #4b4d63;
      width: 24px;
      height: 24px;
    }
  }

  .export-div {
    margin-top: 3rem;
    svg {
      width: 24px;
      height: 24px;
      overflow: hidden;
    }
    a {
      color: #3659e3;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .event-details {
    cursor: pointer;
    @media (min-width: 480px) and (max-width: 659px) {
      margin-top: 3rem;
    }
    .opt {
      position: relative;
      @media screen and (max-width: 959px) {
        //display:inline;
        position: absolute;
        right: 20px;
      }
    }
    .dropdown-content {
      position: absolute;
      top: 0px;
      right: 10px;
      //left:0px;
      width: 20rem;
      background-color: white;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
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
        font-size: 1.4rem;
        text-decoration: none;
        padding: 1.4rem;
        span {
          height: 20px;
          margin-right: 5px;
        }
        &:hover {
          cursor: pointer;
          background-color: #eeedf2;
        }
      }
    }
    display: flex;
    //justify-content: stretch;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #dbdae3;
    @media screen and (max-width: 959px) {
      flex-direction: column;
      align-items: start;
    }
    &:hover {
      box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06),
        0 2px 2px 0 rgba(40, 44, 53, 0.08);
    }

    .event-price-status {
      flex: 2;
      padding-left: 8rem;
      display: flex;
      flex-direction: row;
      text-align: left;
      @media screen and (max-width: 959px) {
        flex-direction: column;
        padding-left: 0rem;
      }
      .rate-div {
        color: #6f7287;
        font-size: 14px;
        @media screen and (max-width: 959px) {
          display: none;
        }
      }
      .status {
        flex: 1;
        //padding-left:5rem;
        color: #6f7287;
        @media screen and (max-width: 959px) {
          text-align: left;
          margin: 0;
        }
        #status-dot {
          width: 3rem;
          height: 3rem;
          fill: #16a85a;
          margin-top: 0.5rem;
        }
        #status-name {
          margin-top: 1rem;
          @media screen and (max-width: 959px) {
            font-size: 1.3rem;
            color: #1e0a3c;
          }
        }
        display: flex;
      }

      .gross {
        color: #6f7287;
        //padding-left:9rem;
        font-size: 14px;
        a {
          display: none;
          @media screen and (max-width: 959px) {
            display: inline;
          }
        }
        //margin-left:6.5rem;
        text-align: center;
        flex: 2;
        @media screen and (max-width: 959px) {
          color: #1e0a3c;
          text-align: left;
          margin: 0;
        }
      }
    }
    .charProgress {
      margin-top: 20px;
      width: 180px;
      background-color: #c2c3c0;
      @media screen and (max-width: 959px) {
        display: none;
      }
    }
    .event-data {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      .data-date {
        padding: 16px;
        text-align: center;
        @media screen and (max-width: 959px) {
          display: none;
        }
      }

      img {
        width: 56px;
        height: 56px;
        margin-right: 25px;
        @media screen and (max-width: 959px) {
          display: none;
        }
      }

      .month {
        color: #d1410c;
        font-size: 12px;
      }

      .data-name {
        flex: 1 1 auto;
        .date {
          margin-top: 1rem;
          margin-bottom: 0.5rem;
          color: #6f7287;
          font-size: 12px;
        }
        .name {
          color: #1e0a3c;
          margin-bottom: 4px;
          font-size: 1.275rem;
          line-height: 1.25rem;
        }
      }
    }
  }
  .event-header {
    display: flex;
    margin-top: 3rem;
    align-items: left;
    background-color: #f8f7fa;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 16px;
    padding-bottom: 16px;
    @media (min-width: 480px) and (max-width: 659px) {
      display: none;
    }
    .event-info {
      flex: 2;
    }
    .event-sold {
      flex: 1.5;

      //padding-left:9.5rem;
      @media screen and (max-width: 959px) {
        display: none;
      }
    }
    .event-status {
      flex: 1;
      //padding-left:1.5rem;
      @media screen and (max-width: 959px) {
        display: none;
      }
    }
    .event-gross {
      flex: 1;
      //padding-left:3.5rem;
      @media screen and (max-width: 959px) {
        display: none;
      }
    }
  }

  .event-body {
    padding-top: 5rem;
    .noEvents-center {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      margin: auto;
      vertical-align: top;
      .status-description {
        padding-top: 2rem;
        font-size: 1.75rem;
        line-height: 1.75rem;
        letter-spacing: 0.25px;
        font-weight: 500;
        color: #6f7287;
      }
    }
    .graphic-img-div {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 110px;
      height: 110px;
      border-radius: 100%;
      background: #f5f5f5;
      img {
        width: 80px;
      }
    }
  }

  .events-bar {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    .bullet-button {
      border: none;
      background-color: #3d64ff;
      margin: 0rem 2rem;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      @media (min-width: 959px) {
        width: 100px;
        align-items: left;
        border-radius: 20px;
      }
      span {
        @media (max-width: 959px) {
          display: none;
        }
      }
      img {
        background: transperent;
        height: 25px;
      }
    }
    .first-part-eventbar {
      display: flex;
      justify-content: space-around;
    }

    .search-field {
      border: 1px solid #dbdae3;
      height: 50px;
      min-width: 200px;
      transition: 0.3s;
      margin-right: 2rem;
      &:hover {
        border: 1px solid #b9b8bd;
      }
      .search-button {
        border: none;
        background: none;
        cursor: pointer;
        border-radius: 50%;
        background: none;
        transition: 0.3s;
        &:hover {
          background: rgba(0, 1, 0, 0.05);
        }
      }
      img {
      }
      input {
        border: none;
        height: 48px;
        &:focus {
          border: none;
          outline: none;
        }
      }
    }
    .create-button {
      background-color: #d1410c;
      color: white;
      font-size: 14px;
      border: none;
      width: 17rem;
      height: 5rem;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.3, 1);
      border-radius: 4px;
      line-height: 22px;
      font-weight: 400;
      @media screen and (max-width: 959px) {
        display: none;
      }
      &:hover {
        background-color: #f05537;
      }
    }
    .plus-button {
      border: none;
      background-color: #d1410c;
      box-shadow: 0 1px 20px 0 rgba(209, 65, 12, 0.5),
        0 2px 5px 0 rgba(209, 65, 12, 0.5);
      border-radius: 100%;
      width: 55px;
      height: 55px;
      padding: 0;
      cursor: pointer;
      transition: 0.15s;
      @media screen and (min-width: 959px) {
        display: none;
      }
      img {
        background: transperent;
        height: 20px;
      }
      &:hover {
        background-color: #f05537;
      }
    }
    img {
      display: inline-block;
      margin: 0 auto;
      vertical-align: middle;
      background-size: contain;
      line-height: 0;
      background: transperent;
      height: 1.2rem;
      color: white;
    }
    span {
      color: white;
      padding: 0.7rem;
      font-size: 12px;
    }
    .all-events {
      background: #3d64ff;
      border-radius: 20px;
      width: 100%;
      height: 40px;
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 2rem;
      @media screen and (min-width: 959px) {
        width: 100%;
      }

      .dropdown-content {
        position: absolute;
        top: 45px;
        left: 0px;
        width: 25rem;
        background-color: white;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
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
          font-size: 1.4rem;
          text-decoration: none;
          padding: 1.4rem;
          img {
            height: 20px;
            margin-right: 5px;
          }
          span {
            height: 20px;
            margin-right: 5px;
          }
          &:hover {
            cursor: pointer;
            background-color: #eeedf2;
          }
        }
      }
      &:hover {
        border: 1px double white;
        outline: 2px solid #3d64ff;
      }

      img {
        padding-top: 10px;
        width: 15px;
        height: 20px;
      }
    }
    .vertical-divider {
      width: 1px;
      height: 40px;
      margin-right: 2rem;
      border-left: 1px solid #eeedf2;
    }
  }
  .cat-option {
    display: flex;
    margin-top: 4rem;
    button {
      border: none;
      background: none;
      color: #6f7287;
      text-decoration: none;
      padding-top: 30px;
      padding-bottom: 12px;
      font-weight: 300;
      color: #3d64ff;
      border-bottom: 2px solid #3d64ff;
    }
  }
`;
