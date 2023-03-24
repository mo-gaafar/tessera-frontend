import styled from "styled-components";

export const OrStyled = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  background-color: white;
  margin-top: 49px;
  .left {
    width: 100%;
    text-align: left;
    margin-left: 0;
    background-color: black;
    height: 0%;
    display: block;
  }
  .right {
    background-color: black;
    height: 0%;
    width: 100%;
    text-align: left;
    padding: 0px;
    display: block;
  }
  .Orbox {
    display: block;
    border: 1px solid #999999;
    border-radius: 10px;
    height: 20px;
    section {
      color: rgb(111, 114, 135);
      text-align: center;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      font-family: neue plak;
    }
  }
`;
