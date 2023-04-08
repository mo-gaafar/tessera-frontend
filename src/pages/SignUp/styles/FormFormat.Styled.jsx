import styled from 'styled-components';

export const StyledSignup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: stretch;
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  min-height: 100%;
  flex: 1 1;
  align-items: stretch;
  min-height: 100vh;
`;

export const StyledLoginRef = styled.div`
  flex: 0 0 auto;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
`;
export const StyledHead = styled.h1`
  font-size: 3rem;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  margin-right: -1px;
  font-weight: 900;
  color: #1e0a3c;
  @media (min-width: 960px) {
    width: 30rem;
    font-size: 5rem;
    line-height: 6rem;
  }
`;
export const StyledHeaderInfo = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-end;
  flex: 0 0 auto;
  margin: 3rem 0px 3rem;
  text-align: left;
`;

export const StyledReference = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  text-decoration: none;
  color: #3659e3;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 960px) {
    display: none;
  }
`;
export const StyledSubmitbutton = styled.button`
  background-color: #d1410f;
  border: none;
  color: white;
  height: 4.8rem;
  margin: 0.7rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  transition: 0.7s;
  cursor: pointer;
  &:hover {
    background: #d1510f;
  }
`;
export const StyledEmailInput = styled.input`
  pointer-events: none;
  color: #39364f;
  font-size: 16px;
  line-height: 23px;
  min-height: 23px;
  white-space: nowrap;
  outline: none;
  padding: 12px;
  flex: 1;
  min-width: 0;
  height: 4.8rem;
  border: none;
  background-color: #efefef;
`;
export const StyledSignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-top: 0em;
`;
export const StyledSignupFormInput = styled.input`
  color: #39364f;
  font-size: 16px;
  line-height: 23px;
  min-height: 23px;
  white-space: nowrap;
  outline: none;
  padding-top: 1.2rem;
  padding-left: 1.2rem;
  flex: 1;
  min-width: 0;

  border: none;

  &:focus {
    border-style: solid;
    border-color: ${props => props.inputColor || 'blue'};
    border-width: 0.1rem;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 5px;
  font-weight: 300;
`;
export const Message = styled.div`
  font-size: 13px;
  height: 10px;
  position: absolute;
  bottom: -10px;
`;

export const StyledEditButton = styled.button`
  border: none;
  height: 4.8rem;
  padding: 0rem;
  width: 4rem;
  cursor: pointer;
`;
export const StyledInputDiv = styled.div`
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  color: gray;
  font-size: 1.1rem;
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
`;

export const StyledEditImg = styled.img`
  width: 1.5rem;
`;

export const StyledEmailDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  border: solid 0.1rem #d3d3d3;
  border-radius: 0.3rem;
  margin: 0.5rem;
  margin-right: 0;
`;

export const StyledNameDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledInputContainerDiv = styled.div`
  position: relative;
  display: flex;
  border: solid 0.1rem #d3d3d3;
  margin: 0.7rem;
  margin-right: 0;
  height: 4.8rem;
  border-radius: 0.3rem;
`;
export const LogoImg = styled.img`
  width: 13rem;
  cursor: pointer;
  margin-bottom: 4rem;
`;
export const LoginA = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  text-decoration: none;
  color: #3659e3;
  margin: 1rem;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 960px) {
    display: none;
  }
`;
export const ImgComatiner = styled.div`
  display: block;
  -webkit-box-flex: 1;
  flex: 1 1 100%;
  background-color: #f8f7fa;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: stretch;
  position: relative;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const PageImgDiv = styled.div`
  background-image: url(https://cdn.evbstatic.com/s3-build/perm_001/530d34/django/images/login/lateral-image-2.jpg);
  background-color: #f8f7fa;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: stretch;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
export const ImgDescriptionDiv = styled.div`
  position: absolute;
  right: 50px;
  bottom: 150px;
`;
export const FirstRowImgDiv = styled.div`
  font-weight: 800;
  color: #fff;
  text-align: right;
`;

export const SecRowImgDiv = styled.div`
  color: #fff;
  text-align: right;
`;
