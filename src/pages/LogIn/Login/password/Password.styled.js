import styled from 'styled-components';

export const StyledPassword = styled.div`
  position: relative;
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
    width: 348px;
    border-style: hidden;
    padding: 6px 5px 6px;
  }

  label {
    margin-left: 10px;
    display: inline-block;
    font-size: 13px;
    color: #999999;
  }
  &:hover {
    border: 1px solid blue;
    label {
      display: inline-block;
      font-size: 13px;
      color: blue;
    }
  }

  &: {
    background-color: green;
  }
`;
