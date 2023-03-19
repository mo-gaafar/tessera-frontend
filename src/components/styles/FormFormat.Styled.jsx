import styled from 'styled-components';
export const StyledSignup = styled.body`

  padding: 5.4rem;
    
`
export const StyledLoginRef = styled.div`
  flex: 0 0 auto;
  padding-bottom: 0.5rem;
  padding-left: 2rem;

`
export const StyledHead = styled.h1`
  font-family:'Roboto', sans-serif;
  font-size: 3rem;
  line-height: 2.5rem;
  letter-spacing: 0.1rem;
  margin-right: -1px;
  font-weight: 900;
  color:#1e0a3c;

`
export const StyledHeaderInfo = styled.div`
  display:flex;
  flex-direction:row;
  
  align-items: flex-end;
  flex: 0 0 auto;
  margin: 3rem 0px 3rem;
  text-align: left;

`

export const StyledReference = styled.a`
font-weight: 500;
font-size:1.3rem;
text-decoration: none;
color: #3659e3;
&:hover{
  text-decoration: underline;
}

`
export const StyledSubmitbutton = styled.button`
background-color:#d1410f;
border:none;
color:white;
height:4.8rem;
margin:0.7rem;
margin-top:2.5rem;
border-radius:0.5rem;
font-size:1.4rem;
transition:0.7s;
cursor:pointer;
&:hover{
  background:#d1510f;
}
`
export const StyledEmailInput = styled.input`
pointer-events:none;
color: #39364f;
font-size: 16px;
line-height: 23px;
min-height: 23px;
white-space: nowrap;
outline: none;
padding: 12px;
flex: 1;
min-width: 0;
height:4.8rem;
border:none;
background-color: #EFEFEF;
`
export const StyledSignupForm = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  flex:1;
  margin-top: 0em;
`
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
  

  border:none;


  &:focus{
    border-style:solid;
    border-color:blue;
    border-width:0.2rem;
    
  }
  

`

;

export const Label = styled.label`
position:absolute;
top:5px;
font-weight:300;
${StyledSignupFormInput}:focus ~ & {
  background-color:red;
}
  
}
`
;
export const Message = styled.div`
font-size: 13px;
height:10px;
position:absolute;
bottom:-10px;
`

export const StyledEditButton = styled.button`
border:none;
height:4.8rem;
padding: 0rem;
width: 4rem;
cursor:pointer;
`
export const StyledInputDiv = styled.div`
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  color:gray;
  font-size:1.1rem;
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
`

export const StyledEditImg = styled.img`
width:1.5rem;
`

export const StyledEmailDiv = styled.div`
display:flex;
position:relative;
flex-direction:row;
border: solid 0.1rem #D3D3D3;
border-radius:0.3rem;
margin:0.5rem;
margin-right:0;
`

export const StyledNameDiv = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`

export const StyledInputContainerDiv = styled.div`
  position:relative;
  display:flex;
  border: solid 0.1rem #D3D3D3;
  margin:0.7rem;
  margin-right:0;
  height:4.8rem;
  border-radius:0.3rem;
   
`
export const LogoImg = styled.img`
width:13rem;
cursor:pointer;
margin-bottom:4rem;
`
