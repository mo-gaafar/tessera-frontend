import styled from "styled-components";

export const DropSt = styled.div`
  margin: 10px 100px;
  height: 100px;
  background-color: white;
  width: 200px;

  button {
    width: 200px;
    font-size: 16px;
    color: #39364f;
    font weight:400;
    cursor: pointer;
    border-width:0px;
    background-color:white;
    border-color:white;
    border-radius: 15px;
    .uparrow{
        display:none;
    }
    .downarrow{
        transform:translate(0,4px);
    }
    .Droplogos{
        display:none;
     }
  }


  button:focus{
    width: 200px;
    font-size: 16px;
    color: #39364f;
    font weight:400;
    cursor: pointer;
    border-width:0px;
    background-color:white;
    border-color:white;
    border-radius: 15px;
    .downarrow{
        display:none;
    }
    .uparrow{
        display:inline-block;
        transform:translate(0,4px);
    }


    .Droplogos{
        display:inline-block;
        margin-top:10px;
        .apple{
            transform:translate(10px);
        }
     }
  }
  
  @media (min-width: 950px) {
    display: none;
  }
`;
