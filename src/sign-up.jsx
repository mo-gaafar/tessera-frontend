import React from "react"
import {ContinueButton, FormDiv, Googlelogo, ImageRight} from './styles/styles.styled'
import {GoogleButton} from './styles/styles.styled'
import {InputEmail} from './styles/styles.styled'
import {EventLogo} from './styles/styles.styled' 
import {CreateAccount} from "./styles/styles.styled"
import { LogIn, LogIn2 } from "./styles/styles.styled"
import { LogInDiv, LogInDiv2, Label } from "./styles/styles.styled"
import { UpperPage, OtherArrow } from "./styles/styles.styled"
import { SignUpPage } from './styles/styles.styled';
import { TopHeader } from "./styles/styles.styled"
import { FacebookButton } from "./styles/styles.styled"
import { Divider, Arrowsvg, ArrowpathUp, ArrowpathDown , Arrowspan } from "./styles/styles.styled"
import { CircleDivider } from "./styles/styles.styled"
import { DivLeft, Pother, Form } from "./styles/styles.styled"
import { OtherSignUp, RightSide, OtherSignUpButton, OtherSignUpButtonDiv1, OtherSignUpButtonDiv2 } from "./styles/styles.styled"
import { Upper2 } from "./styles/styles.styled"

export default function SignUp(){
const [focused,setFocused] = React.useState(false, {flag:false})
  const [email, setEmail] = React.useState("")
  const [emailerror, setEmailError] = React.useState("")
  function saveEmail(event){
    const {name,value} = event.target
    setEmail(value);
  }
  function handleValidation(event){
    console.log()
    if(!email){
       setEmailError('Field required')
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError('Invalid email')
    }
    else{
      setEmailError("")
    }
   
  }

  React.useEffect(() => {
    if(emailerror){
      handleValidation()
    }
  }, [email])

  return(
    <SignUpPage>
      <Upper2>
        <UpperPage>
          <TopHeader>
            <DivLeft>
              <EventLogo src="./src/assets/logo.jpg" />
              <CreateAccount>
                 Create an account 
              </CreateAccount>
            </DivLeft>
            <LogInDiv>
              <LogIn href = "https://www.eventbrite.com/signin/">
                Log in
              </LogIn> 
            </LogInDiv>
          </TopHeader>
          <Form >
            <FormDiv >
              <Label style={emailerror ?{color:"red"}: focused ? {color:'blue'}:{color:"#6f7287"}}> 
                <span style={{WebkitBoxDirection: "normal"}}>Email address</span>
              </Label>
          <InputEmail data-testid="email" style={emailerror ?{borderColor:"red"}: focused ? {borderColor:'blue'}:{borderColor:"gray"}}
                 type="email" 
                 name="enter-email" 
                 id="email-input"
                value={email}
                onChange={saveEmail}
                onFocus={() => setFocused(true)}
                />
              {emailerror && (
              <span style={{color:"red"}}>{emailerror}</span>
              )}
              <ContinueButton onClick={handleValidation}>
                Continue
              </ContinueButton>

            </FormDiv>
          </Form>
          <Divider>
            <CircleDivider>or</CircleDivider>
          </Divider>
          <GoogleButton onClick="location.href=https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.eventbrite.com%3Fid%3Dauth64961&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=126160502265-8i61veaglos3qqdc73t5b9gdp7uumclg.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.eventbrite.com&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow" target={"_blank"}>
            <Googlelogo src="./src/assets/google-logo.png" />
            Sign in with Google
          </GoogleButton>
          <OtherSignUp>
            Other sign up methods
          </OtherSignUp>
          <OtherSignUpButton type="button" data-automation="eds-expandable-card-content-button">
            <OtherSignUpButtonDiv1>
              <Pother>Other sign up methods</Pother>
            </OtherSignUpButtonDiv1>
            <OtherSignUpButtonDiv2>
              <OtherArrow >
                <Arrowsvg x="0" y="0" viewBox="0 0 24 24" xml:space="preserve">
                  <ArrowpathUp fill-rule="evenodd" clip-rule="evenodd" d="M17 13.8l-5-5-5 5 1.4 1.4 3.6-3.6 3.6 3.6z">
                  </ArrowpathUp>
                  <Arrowspan class="eds-is-hidden-accessible">Toggle Content</Arrowspan>
                </Arrowsvg>
              </OtherArrow>
            </OtherSignUpButtonDiv2>
          </OtherSignUpButton>
          <FacebookButton>  </FacebookButton>
            <LogInDiv2>
              <LogIn2 href = "https://www.eventbrite.com/signin/">
                Log in
              </LogIn2>
            </LogInDiv2>
        </UpperPage>
      </Upper2>
      <RightSide>
       <ImageRight >
       </ImageRight>
      </RightSide>
    </SignUpPage>
  )
}
