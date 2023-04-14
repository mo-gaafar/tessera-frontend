import styled from 'styled-components';

export const UpperPage = styled.div`
  height: 100%;
  width: 36rem;
  .google {
    margin-top: 2rem;
    width: 36rem;
  }
  @media (max-width: 960px) {
    padding-top: 7rem;
  }
`;

export const SignUpPage = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const OtherSignUp = styled.p`
  color: #39364f;
  display: block;
  font-size: 1.55rem;
  font-weight: 400;
  margin-top: 3.5rem;
  @media (max-width: 960px) {
    display: none;
  }
`;
export const OtherSignUpButton = styled.button`
  display: flex;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
  -webkit-box-pack: justify;
  position: relative;
  width: 24.8rem;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  color: var(--eds-ui-800, #39364f);
  -webkit-appearance: button;
  overflow: visible;
  letter-spacing: normal;
  word-spacing: normal;
  text-indent: 0px;
  text-shadow: none;
  box-sizing: border-box;
  margin-top: 3.5rem;
  display: none;
  @media (max-width: 960px) {
    display: flex;
  }
`;

export const OtherSignUpButtonDiv1 = styled.div`
  width: 19.2rem;
`;
export const OtherSignUpButtonDiv2 = styled.div`
  width: 5.6rem;
  max-width: 5.6rem;
  height: 2.4rem;
  padding-left: 1.5rem;
`;
export const Pother = styled.p`
  padding: 8px 16px;
  font-size: 1.5rem;
  font-weight: 400;
  display: block;
  width: 19.2rem;
`;
export const OtherArrow = styled.i`
  display: inline-block;
  margin: 0 auto;
  vertical-align: middle;
  background-size: contain;
  line-height: 0;
  width: 24px;
  height: 24px;
  box-sizing: initial;
  font-style: italic;
`;
export const Arrowsvg = styled.svg`
  :not(:root) {
    overflow: hidden;
    overflow-clip-margin: content-box;
  }
`;
export const Arrowspan = styled.span`
  position: absolute;
  left: -999999px;
`;

export const ArrowpathUp = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  d: path('M 17 13.8 l -5 -5 l -5 5 l 1.4 1.4 l 3.6 -3.6 l 3.6 3.6 Z');
`;

export const ArrowpathDown = styled.path`
  fill-rule: evenodd;
  clip-rule: evenodd;
  d: path('M 7 10.2 l 5 5 l 5 -5 l -1.4 -1.4 l -3.6 3.6 l -3.6 -3.6 Z');
`;

export const InputEmail = styled.input`
  width: 360px;
  height: 47px;
  border: solid 1px #dbdae3;
  margin-top: 4rem;
  transition-duration: 0.5s;
  display: block;
  padding-top: 1.2rem;
  padding-left: 1.4rem;
  font-size: 1.3rem;
  border-radius: 0.2rem;
  outline: none;
  :hover {
    border: solid 1px rgb(149, 147, 147);
    transition-duration: 1s;
  }
  :focus {
    border: 0.1rem solid blue;
    transition-duration: 0.5s;
  }
`;

export const Googlelogo = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  margin-left: 1rem;
  display: inline-block;
  margin: 0 auto;
  vertical-align: middle;
  background-size: contain;
  margin-right: 2rem;
  margin-left: 1rem;
`;

export const GoogleButton = styled.button`
  width: 360px;
  height: 47px;
  margin-top: 4rem;
  color: #39364f;
  background-color: white;
  font-size: 14px;
  font-weight: 500;
  border: solid 1px #dbdae3;
  border-radius: 4px;
  :hover {
    background-color: #f4f4ff;
    transition-duration: 0.5s;
    cursor: pointer;
  }
  :active {
    background-color: #e7e7f4;
    transition-duration: 0.5s;
  }
`;
// 1877F2
export const FacebookButton = styled.button`
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
  @media (max-width: 960px) {
    margin-top: 3rem;
    margin-left: 8.3rem;
  }
`;

export const EventLogo = styled.img`
  height: 4rem;
  margin-bottom: 0.4rem;
`;

export const TopHeader = styled.div`
  display: flexbox;
  width: 36rem;
  max-width: 36rem;
`;

export const DivLeft = styled.div`
  width: 28.961rem;
`;

export const CreateAccount = styled.h1`
  color: #1e0a3c;
  font-size: 5.2rem;
  font-weight: 800;
  display: flexbox;
  margin-top: 1.8rem;
  @media (max-width: 960px) {
    color: #1e0a3c;
    font-size: 3.2rem;
    line-height: 2.5rem;
    font-weight: 800;
    margin-top: 2rem;
    display: flexbox;
    letter-spacing: 0.1rem;
    width: 28.961rem;
  }
`;
export const LogInDiv = styled.div`
  width: 3.68rem;
  height: 2.64rem;
  margin-top: 6.7rem;
  margin-left: 3.2rem;
  margin-right: 0rem;
  width: 100%;
  max-width: 3.6rem;
  letter-spacing: -0.1rem;
  display: none;
  @media (max-width: 960px) {
    display: block;
  }
`;

export const LogIn = styled.span`
  font-size: 1.37rem;
  color: #3659e3;
  display: flexbox;
  font-weight: 550;
  margin-left: 0rem;
  text-size-adjust: 100%;
  padding-bottom: 1rem;
  width: 100%;
  display: none;
  :hover {
    text-decoration-line: underline;
  }
  :active {
    color: #1740e2;
  }
  @media (max-width: 960px) {
    display: block;
  }
`;
export const LogInDiv2 = styled.div`
  width: 5.68rem;
  height: 2.64rem;
  margin-top: 7.2rem;
  margin-left: 0.9rem;
  width: 100%;
  max-width: 7rem;
  @media (max-width: 960px) {
    display: none;
  }
`;

export const LogIn2 = styled.span`
  font-size: 1.37rem;
  color: #3659e3;
  display: flexbox;
  font-weight: 550;
  margin-left: -1rem;
  text-size-adjust: 100%;
  padding-bottom: 1rem;
  width: 100%;

  :hover {
    text-decoration-line: underline;
  }
  :active {
    color: #1740e2;
  }
  @media (max-width: 960px) {
    display: none;
  }
`;
export const Divider = styled.div`
  border-top: 1px solid #a9a8b3;
  width: 360px;
  margin-left: 0px;
  margin-top: 5.1rem;
  display: flex;
  position: relative;
  font-size: 15px;
  font-weight: 600;
  color: #6f7287;
`;

export const ContinueButton = styled.button`
  background-color: #d1410c;
  color: white;
  font-weight: 500;
  border: none;
  width: 360px;
  height: 44px;
  margin-top: 2.6rem;
  font-size: 14px;
  border-radius: 4px;
  :hover {
    background-color: #f3551b;
    cursor: pointer;
    transition-duration: 1s;
  }
  :active {
    background-color: #d1410c;
  }
`;

export const CircleDivider = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 45px;
  height: 25px;
  background-color: white;
  border: solid 1px #a9a8b3;
  border-radius: 20px;
  position: absolute;
  top: -13px;
  left: 157.5px;
  padding: 3px 14px;
  font-weight: 500;
  font-size: 1.35rem;
`;
export const RightSide = styled.div`
  isplay: block;
  -webkit-box-flex: 1;
  flex: 1 1 100%;
  background-color: #f8f7fa;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: stretch;
  position: relative;
  max-width: 50%;
  @media (max-width: 960px) {
    display: none;
  }
`;
export const ImageRight = styled.div`
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
export const Upper2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 960px) {
    width: 100%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-top: 0rem;
`;
export const FormDiv = styled.div``;
export const Label = styled.label`
  font-size: 1.2rem;
  text-align: left;
  line-height: 22px;
  color: #6f7287;
  position: absolute;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  padding-left: 1.49rem;
  padding-top: 4.5rem;
`;
