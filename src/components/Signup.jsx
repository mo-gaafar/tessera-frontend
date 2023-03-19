
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

import edit from "../assets/edit.png"
import logo from "../assets/LogoFullTextSmall.png"
import pwdhide from "../assets/eye.png"
import pwdShow from "../assets/icon-visibility.jpg"
import {PasswordShowButton} from "./styles/Password.Styled"
import {PasswordShowImg} from "./styles/Password.Styled"
import React from "react"

import PasswordChecker from "./PasswordChecker"
import {PasswordStrenghP} from "./styles/Password.Styled"

export default function Signup(props) { 
  
  //code for password checking 
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
      setPassError(false)
      return;
    } 
    //momken ne3mel else hena for further verification (special cases)
  };
  const [isStrong, initRobustPassword] = React.useState(null);
  const initPwdInput = async (childData) => {
    initRobustPassword(childData);
  };

  //
  
  const [formData, setFormData] = React.useState(
    {firstName: "", lastName: "", 
    emailConfirm: ""}
  )
  const [firstnameError,setFirstnameError] = React.useState(null)
  const [lastnameError,setLastnameError] = React.useState(null)
  const [emptyPassError,setEmptyPassError] = React.useState(null)
  const [emailConfirmError,setEmailConfirmError] = React.useState(null)
  const [passError,setPassError] = React.useState(false)
  

    function handleValidation() {
    if (!formData.firstName) {

      setFirstnameError('First name is required')
      
        
    }

    if (!formData.lastName) {
      
      setLastnameError('Last name is required')
        
    }

    if (!pwdInput.password) {
      
      setEmptyPassError('Field required')
      setPassError(true)
        
    }

    if (formData.emailConfirm !== props.email){
      setEmailConfirmError("Email address doesn't match. Please try again")
    }
    
    

    // Rest of validation conditions go here...

   
  }


  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        if (name==="firstName"&&firstnameError){
          setFirstnameError(null)
        }
        if (name==="lastName"&&lastnameError){
          setLastnameError(null)
        }
        if (name=="emailConfirm"&&value==props.email){
            setEmailConfirmError(null)
        }
        return {
            ...prevFormData,
            [name]:  value}})
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
    console.log("innnnn")
    handleValidation()
    if ( setPassError){ //add the email conformation check 
      console.log("in")
      event.preventDefault() // this will be prevent the page from refresh
    }
    // this will be prevent the page from refresh
    // submitToApi(formData) // in case we had Api
  }
  const styles = {
    display:`${passwordButtonType}`
}


  return (
        <StyledSignup>
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

            
            <StyledInputContainerDiv style={emailConfirmError!== null ?{borderColor:"#c5162e"}:{backgroundColor: "white"}}>
              <StyledSignupFormInput 
              type="email" 
              name="emailConfirm"
              value={formData.emailConfirm}
              onChange={handleChange}
              />
              <StyledInputDiv>
                
                <Label style={emailConfirmError!== null ?{color:"#c5162e"}:{backgroundColor: "transperent"}}>
                  Confirm email
                </Label>

              </StyledInputDiv>
              {emailConfirmError  && <Message style={{color: "#c5162e"}}> {emailConfirmError}</Message>}
            </StyledInputContainerDiv>
            

            <StyledNameDiv>
              <StyledInputContainerDiv style={firstnameError!== null ?{borderColor:"#c5162e"}:{backgroundColor: "white"}}>
                <StyledSignupFormInput 
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
                
                <StyledInputDiv>
                
                <Label style={firstnameError!== null ?{color:"#c5162e"}:{backgroundColor: "transperent"}}>
                  First Name
                </Label>

              </StyledInputDiv>
              {firstnameError !== null && <Message><span style={{color: "#c5162e"}}> {firstnameError}</span></Message>}
              </StyledInputContainerDiv>
              
              <StyledInputContainerDiv style={lastnameError!== null ?{borderColor:"#c5162e"}:{backgroundColor: "transperent"}}>
                <StyledSignupFormInput 
                type="text"
                value={formData.lastName} 
                name="lastName"
                onChange={handleChange}
                />
                <StyledInputDiv>
                
                <Label style={lastnameError!== null ?{color:"#c5162e"}:{backgroundColor: "transperent"}}>
                  Last Name
                </Label>

              </StyledInputDiv>
              {lastnameError !== null && <Message style={{color: "#c5162e"}}> {lastnameError}</Message>}
              </StyledInputContainerDiv>
              
              
            </StyledNameDiv>
            
            
            
            
            
              

            <StyledInputContainerDiv style={passError ?{borderColor:"#c5162e"}:{backgroundColor: "transperent"}}>
              <StyledSignupFormInput 
              type={passwordType}
              id="password"
              name="password"
              onChange={onChange}
              />
              <PasswordShowButton 
              onClick={togglePassword}
              style={styles}>
              { passwordType==="password"? <PasswordShowImg src={pwdhide}/> :<PasswordShowImg src={pwdShow}/> }
          
              </PasswordShowButton>
              <StyledInputDiv>
                
                <Label style={passError ?{color:"#c5162e"}:{backgroundColor: "transperent"}}>
                  Password
                </Label>
                
              </StyledInputDiv>
              {passError  && <Message style={{color: "#c5162e"}}> {emptyPassError}</Message>}
            </StyledInputContainerDiv>
            <PasswordChecker password={pwdInput.password} actions={initPwdInput} showStrength={isError} />
            {(isError !== null )&& 
              <PasswordStrenghP 
              className="errors"> 
              {isError}
              </PasswordStrenghP>
              }
            
            <StyledSubmitbutton>Create account</StyledSubmitbutton>
               
              
              
            </StyledSignupForm>
        
        
        </StyledSignup>
      
      
      
  )
}
