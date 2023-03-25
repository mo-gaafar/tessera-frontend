import styled from "styled-components";

export const OrStyled = styled.div`
  display: grid;
  grid-template-columns: auto 30px auto;
  background-color: white;
  margin-top: 49px;
  margin-right: 100px;
  .left {
    width: 170px;
    text-align: left;
    margin-left: 0;
    background-color: black;
    height: 0%;
  }
  .right {
    background-color: black;
    height: 0%;
    width: 150px;
    text-align: left;
    padding: 0px;
    margin-right: 50px;
  }
  .Orbox {
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
