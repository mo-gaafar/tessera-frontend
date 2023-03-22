import React from "react"
import {ContinueButton, Googlelogo, ImageRight} from './styles/styles.styled'
import {GoogleButton} from './styles/styles.styled'
import {InputEmail} from './styles/styles.styled'
import {EventLogo} from './styles/styles.styled' 
import {CreateAccount} from "./styles/styles.styled"
import { LogIn, LogIn2 } from "./styles/styles.styled"
import { LogInDiv, LogInDiv2 } from "./styles/styles.styled"
import { UpperPage, OtherArrow } from "./styles/styles.styled"
import { SignUpPage } from './styles/styles.styled';
import { TopHeader } from "./styles/styles.styled"
import { FacebookButton } from "./styles/styles.styled"
import { Divider, Arrowsvg, ArrowpathUp, ArrowpathDown , Arrowspan } from "./styles/styles.styled"
import { CircleDivider } from "./styles/styles.styled"
import { DivLeft, Pother } from "./styles/styles.styled"
import { OtherSignUp, RightSide, OtherSignUpButton, OtherSignUpButtonDiv1, OtherSignUpButtonDiv2 } from "./styles/styles.styled"
import { Upper2 } from "./styles/styles.styled"
import { useFormik } from 'formik'

const errorFound = false;
const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Field required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email'

  }

  return errors
}
export default function SignUp(){
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return(
    <SignUpPage>
      <Upper2>
        <UpperPage>
          <TopHeader>
            <DivLeft>
              <EventLogo src="./src/assets/logo.jpg" />
              <CreateAccount> Create an account </CreateAccount>
            </DivLeft>
            <LogInDiv> <LogIn href = "https://www.eventbrite.com/signin/">Log in</LogIn> </LogInDiv>
          </TopHeader>
          <form onSubmit={formik.handleSubmit}>
              <InputEmail placeholder="Email address" type="email" name="email" id="email"
                onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
              {formik.touched.email && formik.errors.email && (
                <span>{formik.errors.email}</span>
              )}
              <ContinueButton type = "submit">Continue</ContinueButton>
          </form>
          <Divider>
            <CircleDivider>or</CircleDivider>
          </Divider>
          <GoogleButton onClick="location.href=https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.eventbrite.com%3Fid%3Dauth64961&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=126160502265-8i61veaglos3qqdc73t5b9gdp7uumclg.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.eventbrite.com&fetch_basic_profile=true&gsiwebsdk=2&service=lso&o2v=1&flowName=GeneralOAuthFlow" target={"_blank"}>
            <Googlelogo src="./src/assets/google-logo.png" />
            Sign in with Google
          </GoogleButton>
          <OtherSignUp>Other sign up methods</OtherSignUp>
          <OtherSignUpButton type="button" data-automation="eds-expandable-card-content-button">
            <OtherSignUpButtonDiv1><Pother>Other sign up methods</Pother></OtherSignUpButtonDiv1>
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
            <LogInDiv2> <LogIn2 href = "https://www.eventbrite.com/signin/">Log in</LogIn2> </LogInDiv2>
        </UpperPage>
      </Upper2>
      <RightSide>
       <ImageRight >
       </ImageRight>
      </RightSide>
    </SignUpPage>
  )
}