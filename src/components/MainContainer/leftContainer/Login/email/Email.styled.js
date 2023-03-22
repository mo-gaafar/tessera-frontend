import styled from "styled-components";

export const StyledEmail = styled.div`
  border: 1px solid #999999;
  background-color: white;
  width: 350px;
  height: 50px;
  margin-right: 10px;
  margin-top: 10px;
  padding-right: 20px;

  input {
    outline: none;

    line-height: 1.2em;
    font-size: 14px;
    width: 350px;
    border-style: hidden;
    padding: 6px 5px 6px;
  }

  label {
    display: inline-block;
    font-size: 13px;
    color: #999999;
  }
  &:hover {
    border: 1px solid;
    border-color: blue;

    label {
      display: inline-block;
      font-size: 13px;
      color: blue;
    }
  }
`;
