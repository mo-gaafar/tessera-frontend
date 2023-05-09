export const StyleDiv = styled.div`
  display: flex;

  .publish {
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
    padding-left: 20px;
    margin-right: 20px;
  }

  .publish h2 {
    /* font-size: 2rem; */
  }

  .h1 {
    /* font-size: 1.875rem; */
    line-height: 2.5rem;
    letter-spacing: 0.5px;
    margin-right: -0.5px;
  }
  .previewBox {
    border: 1px solid #eeedf2;
    margin-top: 24px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 8px 0 rgba(40, 44, 53, 0.06),
      0 2px 2px 0 rgba(40, 44, 53, 0.06);
  }

  .price {
    display: flex;
    line-height: 24px;
    margin-top: 16px;
  }

  .previewBox img {
    /* height: 100%; */
    width: 42%;
    justify-content: center;
    align-items: center;
    background-color: #f8f7fa;
    display: flex;
  }

  .publishDetails svg {
    height: 18px;
    border-radius: 2px;
    color: #3659e3;
  }

  .previewLink {
    text-align: center;
    color: #007791;
    border-top: 1px solid #eeedf2;
    margin-top: 20px;
    padding: 12px;
  }

  .priceAmount {
    display: flex;
    margin: 16px;
    line-height: 24px;
    margin-top: 16px;
    margin-left: 24px;
  }

  .priceAmount svg {
    margin-right: 8px;
  }
  .publishDetails a {
    line-height: 24px;
    text-align: center;
    color: #3659e3;
  }

  .privacy {
    /* font-size: .75rem; */
    line-height: 1rem;
    margin-bottom: 50px;
  }

  .privacy h2 {
    display: block;
    /* font-size: 1.5rem; */
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .privacyOption {
    display: flex;
  }

  .privacyRadio {
    position: relative;
    min-width: 22px;
    min-height: 22px;
    margin-top: 20px;
  }
  .PublishTime {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }

  .privacyOption label {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }

  .publishDate {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .dateAndZone {
    width: 100%;
  }

  .date,
  .time {
    display: flex;
    border: 1px solid #ccc;
    background: #f8f7fa;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    border-radius: 2px;
    padding: 1px;
    width: 50%;
    align-items: center;
    color: #333;
    /* text-align: center; */
    input {
      border: none;
      background: #f8f7fa;
    }
    svg {
      margin-left: 10px;
      margin-right: 10px;
    }
    p {
      font-size: 12px;
      line-height: 22px;
    }

    &.disabled {
      background: #f8f7fa;
      color: #333;
      border: 1px solid #ccc;
      cursor: not-allowed;
    }
  }

  .date svg {
    width: 24px;
    height: 24px;
  }

  .startDate {
    font-size: 14px;
    line-height: 22px;
    min-height: 22px;
  }

  .time {
    padding-left: 8px;
    margin-left: 5px;
  }

  .timeAndZone {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .TipsIcon {
    display: flex;
  }

  .TipsIcon i {
    /* padding: 5px; */
    margin-right: 10px;
    border-radius: 50%;
    background-color: #fff58c;
    /* center vertical */
    display: flex;
    align-items: center;
    width: 40px;
    height: 40px;
    justify-content: center;
  }

  .TipsIcon svg {
    width: 24px;
    height: 24px;
  }

  .Tips {
    background-color: var(--eds-ui-100, var(--eds-ui-100, #f8f7fa));
    padding-left: 40px;
    padding-top: 13px;
    padding-bottom: 20px;
    margin-top: 20px;
  }

  .Links svg {
    width: 16px;
    height: 16px;
    fill: #3d64ff !important;
    margin-left: 5px;
    /* move to right when hover */
    transition: margin-left 0.24s cubic-bezier(0.4, 0, 0.3, 1);
    &:hover {
      margin-left: 12px;
    }
  }

  .Links {
    display: flex;
    margin-top: 16px;
    margin-bottom: 8px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }

  .Links span {
    color: #3659e3;
    color: var(--eds-control, #3659e3);
    font-weight: 500;
  }

  .otherDetails {
    display: flex;
    margin-top: 32px;
    margin-bottom: 80px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .privacyAndTime {
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    height: 100%;
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .privacyAndTime h2 {
    display: block;
    /* font-size: 1.5rem; */
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .PublishTips {
    width: 50%;
    margin-bottom: 32px;

    @media (max-width: 768px) {
      width: 100%;
      margin-top: 20px;
    }
  }

  .publishDetails hr {
    /* width: 90%; */
  }

  .publishDetails {
    width: 50%;
    margin-left: 30px;
    margin-top: 15px;
  }

  .PublishTimeRadio {
    div {
      display: flex;
      align-items: center;
      label {
        margin-left: 8px;
        align-items: center;
      }
    }
  }

  .public,
  .private {
    font-size: 0.875rem;
    margin-left: 8px;
  }

  .PublishButton {
    /* background-color: #d1410c; */
    color: white;
    float: right;
    height: 40px;
    padding: 10px;
    width: 100px;
    /* margin-bottom: 20px; */
    font-size: 16px;
    color: #fff;
    border: none;
    border-radius: 4px;
    outline: none;
    background: #d94618;
    margin-right: 15px;
    cursor: pointer;
    &:hover {
      background: #ef5436;
    }
    &:disabled {
      background: #d0cfd9;
      cursor: not-allowed;
      input {
        cursor: not-allowed;
      }
    }
  }

  .bottomBar {
    position: fixed;
    bottom: 0;
    padding: 10px;
    background: white;
    width: 100%;
    border-top: 1px solid #eeedf2;
    left: 0;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 20px; */
  width: 100%;
  border: 1.5px solid #d0cfd9;
  border-radius: 3px;

  margin: 10px;
  margin-left: 0px;
  padding-left: 12px;
  padding-top: 5px;
  @media (max-width: 960px) {
    width: 100%;
  }

  /* hover animation */
  &:hover {
    border: 1.5px solid #a4a3aa;
  }

  &:focus-within {
    border: 1.5px solid #1e4fff;
  }

  .inputLabel {
    display: flex;
    justify-content: left;
    font-size: 12px;
    color: #6f7287;
    &:focus-within {
      border: 1px solid #1e4fff;
    }
  }

  .inputLabel span {
    color: #ff0000;
    margin-left: 5px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  height: 30px;

  /* padding: 10px; */
  /* margin-bottom: 20px; */
  font-size: 16px;
  color: #000;
  /* border: 1px solid #ebebeb; */
  /* border-radius: 1px; */
  outline: none;
  border: none;
  @media (max-width: 960px) {
    width: 100%;
  }
  /* set active state */
`;

export const SelectBox = styled.select`
  width: 100%;
  height: 30px;

  /* padding: 10px; */
  /* margin-bottom: 20px; */
  font-size: 16px;
  color: #000;
  /* border: 1px solid #ebebeb; */
  /* border-radius: 1px; */
  outline: none;
  border: none;
  @media (max-width: 960px) {
    width: 100%;
  }
  /* set active state */
`;
