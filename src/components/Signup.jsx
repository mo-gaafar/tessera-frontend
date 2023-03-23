
import { StyledSignup } from './styles/FormFormat.Styled'
import { StyledLoginRef } from './styles/FormFormat.Styled'
import { StyledHead } from './styles/FormFormat.Styled'
import { LogoImg } from './styles/FormFormat.Styled'
import {StyledHeaderInfo} from "./styles/FormFormat.Styled"
import {StyledReference} from "./styles/FormFormat.Styled"
import {StyledSubmitbutton} from  "./styles/FormFormat.Styled"
import {StyledEmailInput} from "./styles/FormFormat.Styled"
import {StyledSignupForm} from "./styles/FormFormat.Styled"
import {StyledSignupFormInput} from "./styles/FormFormat.Styled"
import {StyledEditButton} from "./styles/FormFormat.Styled"
import {StyledEditImg} from "./styles/FormFormat.Styled.jsx"
import {StyledEmailDiv} from "./styles/FormFormat.Styled.jsx"
import {StyledNameDiv} from "./styles/FormFormat.Styled.jsx"
import {StyledInputDiv} from "./styles/FormFormat.Styled"
import {StyledInputContainerDiv} from "./styles/FormFormat.Styled.jsx"
import {Label} from "./styles/FormFormat.Styled"
import {Message} from "./styles/FormFormat.Styled"
import {PageContainer} from "./styles/FormFormat.Styled"
import {LoginA} from "./styles/FormFormat.Styled"
import {ImgDescriptionDiv} from "./styles/FormFormat.Styled"
import {FirstRowImgDiv} from "./styles/FormFormat.Styled"
import {SecRowImgDiv} from "./styles/FormFormat.Styled"

import edit from "../assets/edit.png"
import logo from "../assets/LogoFullTextSmall.png"
import pwdhide from "../assets/eye.png"
import pwdShow from "../assets/icon-visibility.jpg"
import {PasswordShowButton} from "./styles/Password.Styled"
import {PasswordShowImg} from "./styles/Password.Styled"
import React from "react"

import PasswordChecker from "./PasswordChecker"
import {PasswordStrenghP} from "./styles/Password.Styled"

import {ImgComatiner} from "./styles/FormFormat.Styled.jsx"
import {PageImgDiv} from "./styles/FormFormat.Styled.jsx"
export default function Signup(props) { 
  
  
  const [pwdInput, initValue] = React.useState({
    password: "",
  })
  const [passwordType, setPasswordType] = React.useState("password");

  const [passwordButtonType, setPasswordButtonType] = React.useState("none");

  const [isError, setError] = React.useState("Your password must be at least 8 characters");
  
  const onChange = (e) => {
    let password = e.target.value;
    setPasswordButtonType("inline")
    initValue({
      ...pwdInput,
      password: e.target.value,
    });
    setError(null);
    
    if(password.length===0){
      setPasswordButtonType("none")
    }
    if (password.length < 8) {
      setError(
        "Your password must be at least 8 characters"
      );
      return;
    } 
    else{setPassError(false)}
    //momken ne3mel else hena for further verification (special cases)
  };
  const [isStrong, initRobustPassword] = React.useState(null);
  const initPwdInput = async (childData) => {
    initRobustPassword(childData);
  };

  
  
  const [formData, setFormData] = React.useState(
    {firstName: "", lastName: "", 
    emailConfirm: ""}
  )
  //const [count,setCount] = React.useState(0)
  const [firstnameError,setFirstnameError] = React.useState(null)
  const [lastnameError,setLastnameError] = React.useState(null)
  const [emptyPassError,setEmptyPassError] = React.useState(null)
  const [emailConfirmError,setEmailConfirmError] = React.useState(null)
  const [passError,setPassError] = React.useState(false)
  const [errorFound,setErrorFound] = React.useState(false)
  const [focused,setFocused] = React.useState(
    {
      firstName: false, lastName: false, 
    emailConfirm: false, password:false
    }
  )

    function handleValidation() {
    if (!formData.firstName ) {

      setFirstnameError('First name is required')
      setErrorFound(true)
        
    }

    if (!formData.lastName ) {
      
      setLastnameError('Last name is required')
      setErrorFound(true)
    }

    if (pwdInput.password.length < 8) {
      setEmptyPassError(
        "Your password must be at least 8 characters"
      );
      setPassError(true)
      setErrorFound(true)

      
    } 

    if (!pwdInput.password) {
      
      setEmptyPassError('Field required')
      setPassError(true)
      setErrorFound(true)
        
    }
    

    if (formData.emailConfirm !== props.email){
      setEmailConfirmError("Email address doesn't match. Please try again")
      setErrorFound(true)
    }

    
    if (pwdInput.password.indexOf(" ") >= 0){
      setEmptyPassError(
        "Your password cannot be spaces"
      );
      setPassError(true)
      setErrorFound(true)
    }
    
   
  }


  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        if (name==="firstName"&&firstnameError ){
          setFirstnameError(null)
        }
        if(value===" "&&name==="firstName"){
          setFirstnameError("First name cannot be spaces")
        }
        if (name==="lastName"&&lastnameError){
          setLastnameError(null)
        }
        if(value===" "&&name==="lastName"){
          setLastnameError("Last name cannot be spaces")
        }
        if (name=="emailConfirm"&&value==props.email){
            setEmailConfirmError(null)
        }
        
        return {
            ...prevFormData,
            [name]:name==="emailConfirm" ? value : value.replace(/[^a-z]/gi, '')}})
  }

  function handleFocus(event) {
    const {name} = event.target
    setFocused(prevFocus => {
        return {
            
            [name]:true}})
  }
  
  const togglePassword =(event)=>{
    event.preventDefault() 
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }
  
  function handleSubmit(event) {

    
    handleValidation()
     if (!errorFound && (!formData.firstName || !formData.lastName || !formData.emailConfirm || pwdInput.password.length<8||formData.emailConfirm !==props.email || pwdInput.password.indexOf(" ") >= 0) )
      {
      //console.log("catch")
      //setCount(prevCount => prevCount + 1)
      event.preventDefault()// this will be prevent the page from refresh
      return
  }
      
   
  }
  const styles = {
    display:`${passwordButtonType}`
}

React.useEffect(() => {
  
  if(passError ||firstnameError||lastnameError||emailConfirmError)
  {setErrorFound(true)}
  else if (formData.firstName && formData.lastName && formData.emailConfirm && pwdInput.password){
    setErrorFound(false)
  }
  else if (!passError ||!firstnameError||!lastnameError||!emailConfirmError){
    setErrorFound(false)
  }
}, [passError, firstnameError,lastnameError,emailConfirmError,formData.firstName , formData.lastName ,formData.emailConfirm ,pwdInput.password])


React.useEffect(() => {

  if(passError ||firstnameError||lastnameError||emailConfirmError)
  {
    handleValidation()
  }
  
}, [formData.firstName , formData.lastName ,formData.emailConfirm ,pwdInput.password])



  return (
    <PageContainer>
      <StyledSignup>
        <div>
          <StyledHeaderInfo>
            <div>
              <LogoImg src={logo}/>

              <StyledHead>
              Create an account
              </StyledHead>
            </div>
            
            

            <StyledLoginRef>
              
              <StyledReference href="">
              Log in
              </StyledReference>
             
            </StyledLoginRef>

          </StyledHeaderInfo>

          <StyledSignupForm onSubmit={handleSubmit}>
                 
              
              
            <StyledEmailDiv>
              <StyledEmailInput
              id="email-input"
              value={props.email} />
              <StyledEditButton>
              <StyledEditImg src={edit}/>
              </StyledEditButton>

              <StyledInputDiv>
                
                <Label>
                  Email address
                </Label>

              </StyledInputDiv>

            </StyledEmailDiv>

            
            <StyledInputContainerDiv style={emailConfirmError ?{borderColor:"#c5162e"}:{backgroundColor: "white"}}>
              <StyledSignupFormInput 
              id="email-input-1"
              type="email" 
              name="emailConfirm"
              value={formData.emailConfirm}
              onChange={handleChange}
              inputColor={emailConfirmError ?"red":"blue"}
              onFocus={handleFocus}
              
              />
              <StyledInputDiv>
                
                <Label style={ emailConfirmError ?{color:"#c5162e"}:  !focused.emailConfirm && !formData.emailConfirm ? {fontSize:'2rem'} : focused.emailConfirm?{color:'blue'}:{color:"gray"}}>
                  Confirm email
                </Label>

              </StyledInputDiv>
              {emailConfirmError  && <Message id="error-message" style={{color: "#c5162e"}}> {emailConfirmError}</Message>}
            </StyledInputContainerDiv>
            

            <StyledNameDiv>
              <StyledInputContainerDiv style={firstnameError ?{borderColor:"#c5162e"}:{backgroundColor: "white"}}>
                <StyledSignupFormInput 
                id="name-input"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                inputColor={firstnameError ?"red":"blue"}
                onFocus={handleFocus}
                />
                
                <StyledInputDiv>
                
                <Label style={firstnameError ?{color:"#c5162e"}:!focused.firstName && !formData.firstName ? {fontSize:'2rem'} : focused.firstName?{color:'blue'}:{color:"gray"}}>
                  First Name
                </Label>

              </StyledInputDiv>
              {firstnameError  && <Message id="error-message"><span style={{color: "#c5162e"}}> {firstnameError}</span></Message>}
              </StyledInputContainerDiv>
              
              <StyledInputContainerDiv style={lastnameError  ?{borderColor:"#c5162e"}:{backgroundColor: "transperent"}}>
                <StyledSignupFormInput 
                id="name-input-2"
                type="text"
                value={formData.lastName} 
                name="lastName"
                onChange={handleChange}
                inputColor={lastnameError ?"red":"blue"}
                onFocus={handleFocus}
                
                
                />
                <StyledInputDiv>
                
                <Label style={lastnameError ?{color:"#c5162e"}:!focused.lastName && !formData.lastName ? {fontSize:'2rem'} : focused.lastName?{color:'blue'}:{color:"gray"}}>
                  Last Name
                </Label>

              </StyledInputDiv>
              {lastnameError  && <Message id="error-message" style={{color: "#c5162e"}}> {lastnameError}</Message>}
              </StyledInputContainerDiv>
              
              
            </StyledNameDiv>
            


            <StyledInputContainerDiv style={passError ?{borderColor:"#c5162e"}:{backgroundColor: "transperent"}}>
              <StyledSignupFormInput 
              type={passwordType}
              id="password"
              name="password"
              onChange={onChange}
              inputColor={passError ?"red":"blue"}
              onFocus={handleFocus}
        
              />
              <PasswordShowButton 
              onClick={togglePassword}
              style={styles}>
              { passwordType==="password"? <PasswordShowImg src={pwdhide}/> :<PasswordShowImg src={pwdShow}/> }
          
              </PasswordShowButton>
              <StyledInputDiv>
                
                <Label style={passError ?{color:"#c5162e"}:!focused.password && !pwdInput.password ? {fontSize:'2rem'} : focused.password?{color:'blue'}:{color:"gray"}}>
                  Password
                </Label>
                
              </StyledInputDiv>
              {passError  && <Message id="error-message" style={{color: "#c5162e"}}> {emptyPassError}</Message>}
            </StyledInputContainerDiv>
            <PasswordChecker password={pwdInput.password} actions={initPwdInput} showStrength={isError} />
            {(isError !== null )&& 
              <PasswordStrenghP 
              className="pass-errors"> 
              {isError}
              </PasswordStrenghP>
              }
            
            <StyledSubmitbutton disabled={errorFound}>Create account</StyledSubmitbutton>
             
            <LoginA href="">
              Log in
            </LoginA>
              
          </StyledSignupForm>
        
        </div>
          
   
      </StyledSignup>
      
      <ImgComatiner>
        <PageImgDiv>

        </PageImgDiv>
        <ImgDescriptionDiv>

          <FirstRowImgDiv>Hungry Pop</FirstRowImgDiv>  
          <SecRowImgDiv>Trap Yoga Brooklyn</SecRowImgDiv>
           <SecRowImgDiv>Brooklyn, NY</SecRowImgDiv> 
            
        </ImgDescriptionDiv>
        </ImgComatiner>
        
        
        
        
    </PageContainer>
        
        
      
      
  )
}
