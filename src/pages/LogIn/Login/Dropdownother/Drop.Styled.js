import styled from 'styled-components';

export const DropSt = styled.div`
  margin: 10px 70px;
  height: 100px;
  background-color: white;
  width: 200px;
  #facebook {
    height: 4.8rem;
    width: 4.8rem;
    border-radius: 24px;
    background-image: url('/images/Facebook-logo.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #1877f2;
    border: none;
    margin-top: 3rem;
    margin-left: 3rem;
    :hover {
      cursor: pointer;
    }
  }
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
        a{
          background-colour:blue;
        }
     }
  }
  
  @media (min-width: 950px) {
    display: none;
  }
`;
