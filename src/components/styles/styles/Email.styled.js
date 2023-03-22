import styled from "styled-components";

export const StyledEmail = styled.div`
  display: flex;
  border: 1px solid #999999;
  width: 320px;
  padding: 0 10px;
  margin: 25px 205px 0px;

  input {
    outline: none;
    display: block;
    line-height: 1.2em;
    font-size: 14px;
    width: 300px;
    border-style: hidden;
    padding: 1px 5px 6px;
  }

  label {
    display: block;
    font-size: 10px;
    color: #999999;
  }
  &:hover {
    border: 1px solid;
  }

  &: {
    background-color: blue;
  }
`;
