import styled from 'styled-components';
export const WholePage = styled.div`
  @media (max-width: 792px){
      padding: 0 16px;
  }
  .wholepage{
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 48px;
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
    @media (max-width: 792px){
      max-width: 655px;
    }
    @media (max-width: 959px){
    margin-bottom: 120px;
    }
  }
.dropdownLast{
  width: 100%;
  height: 46px;
  position: relative;
}
.timeboxes{
  overflow: visible;
  padding-right: 8px;
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  @media (min-width: 480px){
  width: 50%;
  }
}
.timeboxesborders{
  background: #a9a8b3;
  border-radius: 2px;
  background: #dbdae3;
  padding: 1px;
  position: relative;
  transition: background .24s cubic-bezier(.4,0,.3,1);
}
`
export const Page = styled.div`
  @media (min-width: 792px){
    margin-left: 5.6rem;
  }
` 
export const Main = styled.main`
  max-width: 960px;
  -webkit-box-flex: 1;
  flex: 1 0 auto;
  position: relative;
  align-self: center;
  width: 100%;
`
export const Div1 = styled.div`
  padding: 0; 
`
export const EventsDiv = styled.div`
  padding-top: 1.6rem;
`
export const EventsButton = styled.button`
  color: #3659e3;
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  -webkit-appearance: button;
  cursor: pointer;
  text-transform: none;
  overflow: visible;
  display: inline-block;
`
export const BackEvents = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 1.4rem;
  align-items: center;
  margin: auto;
`
export const SmallI = styled.i`
  display: inline-block;
  margin: 0 auto;
  vertical-align: middle;
  background-size: contain;
  line-height: 0;
  width: 2.4rem;
  height: 2.4rem;
  box-sizing: initial;
`
export const MediumI = styled.i`
  display: inline-block;
  margin: 0 auto;
  vertical-align: middle;
  background-size: contain;
  line-height: 0;
  width: 4.8rem;
  height: 4.8rem;
  box-sizing: initial;
`
export const SmallSvg = styled.svg`
  overflow: hidden;
  width: 2.4rem;
  height: 2.4rem;
`
export const MediumSvg = styled.svg`
  overflow: hidden;
  width: 4.8rem;
  height: 4.8rem;
`
export const ArrowPath = styled.path`
  fill: #3659e3;
`
export const Path = styled.path`
  fill: #dbdae3;
`

export const EventsWord = styled.div`
  :hover{
    text-decoration: underline;
  }
`
export const LowerDiv = styled.div`
  margin-bottom: 48px;
  margin-top: 20px;    
  padding-bottom: 48px;
  padding-top: 20px;  
  margin-left: auto;
  margin-right: auto;
`
export const BasicInfoDiv = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
`
export const LocationDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
`
export const DateAndTimeDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
`
export const LineDivider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #eeedf2;
  border: 0;
  margin: 0;
  box-sizing: content-box;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  margin-inline-start: auto;
  margin-inline-end: auto;
  overflow: hidden;
`
export const IconsDiv = styled.div`
@media(max-width: 960px){
  display: none;
}
  padding-top: 0.4rem;  
  margin-left: 8.3333333333%;
  width: 8.3333333333%;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`
export const InfoDiv = styled.div`
  overflow: visible;
  @media (min-width: 1152px){
    width: 66.6666666667%;
  }
  @media (min-width: 960px){
    margin-left: 0;
  }
`
export const SectionTitle = styled.h1`
color: #1e0a3c;
`
export const ExplanationDiv = styled.div`
  width: 75%;
`
export const ExplanationDiv2 = styled.div`
  font-size: 1.4rem;
  width: 100%;
  margin-bottom: 1rem;
`
export const ExplanationP = styled.p`
  color: #39364f;
  font-weight: 400;
  font-size: 1.6rem;
  @media (min-width: 960px){
    font-size: 1.3rem;
    line-height: 2rem;
  }
  
  `
export const ExplanationSpan = styled.span`
`
export const ContentsDiv = styled.div`
  margin-top: 1.6rem;
`
export const InputDiv = styled.div`
  margin-bottom: 1.2rem;
  text-decoration: none;
`
export const EventTitleInputDiv = styled.div`
  border-radius: 2px;
  background: #dbdae3;    
  padding: 1px;
  position: relative;
  transition: background .24s cubic-bezier(.4,0,.3,1);
  :active{
    border: 1px solid red;
  }
`
export const EventTInputDiv = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  position: relative;
  border-radius: 1px;
  border: 1px solid #fff;
  background: #fff;
`
export const EventT2InputDiv = styled.div`
  
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  position: relative;
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 0;
`
export const PlaceHolder = styled.div`
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
 
`
export const PlaceHolderLabel = styled.label`
  color: #6f7287;
  font-size: 1.2rem;
  line-height: 2.2rem;
  display: flex;
  position: relative;
  transition: all .16s cubic-bezier(.4,0,.3,1);
  white-space: nowrap;
  overflow: hidden;
  padding: 0.6rem 1.2rem 0;
`
export const PlaceHolderSpan = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 400;
`
export const StarSpan = styled.span`
  @media (min-width: 960px){}
    font-size: .75rem;
    line-height: 1rem;
  }
  color: #c5162e;
  padding-left: 0.2rem;
`
export const SecondStarSpan = styled.span`
  @media (min-width: 960px){}
    font-size: .75rem;
    line-height: 1rem;
  }
  color: #c5162e;
`
export const Input = styled.input`
  padding: 0rem 1.2rem 0.6rem;
  @media (min-width: 660px){
    font-size: 14px;
    min-height: 22px;
  }
  background: none;
  border: none;
  color: #39364f;
  white-space: nowrap;
  outline: none;
  transition: padding .16s cubic-bezier(.4,0,.3,1),color .4s cubic-bezier(.4,0,.3,1);
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 0;
  display: inline-block;
  ::placeholder{
    color: #5a595d6f;
    font-size: 1.3rem;
  }
`
export const FieldSet = styled.fieldset`
  margin-top: 1.6rem;
  display:flex;
  border: none; 
  padding: 0;
  @media(max-width: 790px){
    display: block;
    width: 100%;
  }
`
export const TypeDropDown = styled.div`
    padding-right: 1.6rem;
  @media (min-width: 792px){
    width: 33.3333333333%;
  }
`
export const TypeDropDown1 = styled.div`
  margin-bottom: 1.6rem;
`
export const TypeBorder = styled.div`
  border-radius: 2px;
  //background: #dbdae3;
  border: 2px solid #dbdae3;
  padding: 1px;
  position: relative;
  transition: background .24s cubic-bezier(.4,0,.3,1);
  :focus{
    border-color: blue;
    background-color: red;
  }
  :hover{
    border: 2px solid #a9a9a9;
    transition: 0.25s ease-out;
  }
  :active{
    border: 2px solid blue;
  }
  :focus{
    border-color: blue;
    background-color: red;
  }
  
`
export const TagsDiv = styled.div`
  margin-top: 1.6rem;
`
export const TagsTitleDiv = styled.div`
  @media (min-width: 960px) {
    line-height: 1.5rem;
  }
  font-size: 1.7rem;
  letter-spacing: .25px;
  margin-right: -0.25px;
  font-weight: 600;
  margin-bottom: 16px;
`
export const TagsInputDiv = styled.div`
  margin-bottom: 16px;
  padding-right: 8px;
  width: 83.3333333333%;
`
export const UsedButton = styled.button`
  color: #39364f;
  fill: #39364f;
  background: #fff;
  border-color: #a9a8b3;
  transform: translateZ(0);
  position: relative;
  height: 44px;
  padding: 0 30px 1px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  line-height: 24px;
  font-weight: 600;
  letter-spacing: .2px;
  border: 2px solid #a9a8b3;
  border-radius: 4px;
  cursor: pointer;
  transition: all .4s cubic-bezier(.4,0,.3,1);
  margin-top: 1rem;
  :hover{
    border-color: #39364f;
    transition-duration: 1s;
  }
  :active{
    background-color: #f3eeee;
  }
`
export const TagsSmall = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`
export const NumberOfTags = styled.div`
  -webkit-box-flex: 1;
  flex: 1 1 auto;
`
export const CharactersLimit = styled.div`
  text-align: right;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
`
export const Aside = styled.aside`
  @media (min-width: 960px){
    font-size: 1.2rem;
    line-height: 1rem;
  }
  padding-top: 4px;
`
export const StyledInput = styled.div`
  border: 1px solid #999999;
  background-color: white;
  position: relative; 
  input {
    outline: none;
    position: relative;
    line-height: 1.2em;
    font-size: 14px;
    padding: 18px 12px 6px;
    width: 100%;
    border-style: hidden;
    ::placeholder{
      color: #5a595d6f;
      font-size: 1.3rem;
      margin-top: 0.3rem;
    }
  }

  label {
    margin-left: 10px;
    margin-top: 0.6rem;
    display: inline-block;
    font-size: 13px;
    color: #6f7287;
    position: absolute;
    left: 0;
    z-index: 3;
  }
  &:hover {
    border: 1px solid;
    border-color: blue;

    label {
      display: inline-block;
      font-size: 13px;
      color: blue;
    }
  }
 
`
export const InputDescription = styled.p`
  font-size: .875rem;
  line-height: 1.25rem;
  padding-top: 0.5rem;`

export const Divider1 = styled.div`
  margin-bottom: 0.8rem;
`
export const OrganizerInfoLink = styled.a`
  text-decoration: none;
  color: #3659e3;
  cursor: pointer;
  :hover{
    text-decoration: underline;
  }
`
export const Form = styled.form`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  flex:1;
  margin-top: 0rem;
`
export const FormDiv = styled.div`
`
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
padding-top: 1.2rem;
`
export const OrganizerLabel = styled.label`
font-size: 1.2rem;
text-align: left;
line-height: 22px;
color: #6f7287;
position: absolute;
white-space: nowrap;
overflow: hidden;
display: block;
padding-left: 1.49rem;
padding-top: 1.2rem;
&:focus{
  color: blue;
  transition-duration: 0.5s;
}
`
export const TagsLabel = styled.label`
font-size: 1.2rem;
text-align: left;
line-height: 22px;
color: #6f7287;
position: absolute;
white-space: nowrap;
overflow: hidden;
display: block;
padding-left: 1.49rem;
padding-top: 1.2rem;
&:focused{
  color: blue;
  transition-duration: 0.5s;
}
`
export const TagsDisplayedDiv = styled.div`
  width: 100%
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  max-width: 65.6rem;
`
export const TagsDisplayed = styled.div`
  box-sizing: border-box;
  margin-left: -8px;
  margin-right: -8px;
}`
export const SingleTagDiv = styled.div`
  display: inline-block;
  padding: 0 8px 16px;
`
export const SingleTag = styled.div`
  background-color: #f8f7fa;
  border-radius: 18px;
  color: #4b4d63;
  height: 36px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  outline: none;
`
export const SingleTagSpan = styled.span`
  font-weight: 600;
  text-rendering: optimizeLegibility;
  padding-right: 8px;
  padding: 0 16px;
  transition: color .24s cubic-bezier(.4,0,.3,1);
  display: inline-flex;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  position: relative;
  color: #4b4d63;
  @media (min-width: 960px){
    font-size: .75rem;
    line-height: 1rem;
  }
`
export const CloseButtonDiv = styled.div`
  padding-right: 8px;
  display: inline-flex;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  position: relative;
`
export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  color: #39364f;
  fill: #39364f;
  -webkit-appearance: button;
  cursor: pointer;
`
export const InputData = styled.input`
  width: 100%;
  height: 47px;
  border: 1px solid ${({ invalid }) => invalid ? 'red' : '#5a595d6f'};
  margin-top: 1rem;
  transition-duration: 0.5s;
  display: block;
  padding-top: 1.2rem;
  padding-left: 1.4rem;
  font-size: 1.3rem;
  border-radius: 0.2rem;
  outline: none;
  :hover{
    border:solid 1px rgb(149, 147, 147);
    transition-duration: 1s;
  }
  &:focus{
    border: 0.1rem solid blue;
    transition-duration: 0.5s;
  }
  ::placeholder{
    color: #5a595d6f;
    font-size: 1.3rem;
    margin-top: 0.3rem;
  }
`
export const InputData2 = styled.input`
  width: 100%;
  height: 47px;
  border:solid 1px #5a595d6f;
  margin-top: 1rem;
  transition-duration: 0.5s;
  display: block;
  padding-top: 1.2rem;
  padding-left: 1.4rem;
  font-size: 1.3rem;
  border-radius: 0.2rem;
  outline: none;
  :hover{
    border:solid 1px rgb(149, 147, 147);
    transition-duration: 1s;
  }
  &:focus{
    border: 0.1rem solid blue;
    transition-duration: 0.5s;
  }
  ::placeholder{
    color: #5a595d6f;
    font-size: 1.3rem;
    margin-top: 0.3rem;
  }
`
export const InputTagsData = styled.input`
  width: 100%;
  height: 47px;
  border:solid 1px #5a595d6f;
  margin-top: 1rem;
  transition-duration: 0.5s;
  display: block;
  padding-top: 1.2rem;
  padding-left: 1.4rem;
  font-size: 1.3rem;
  border-radius: 0.2rem;
  outline: none;
  :hover{
    border:solid 1px rgb(149, 147, 147);
    transition-duration: 1s;
  }
  &:focus{
    border: 0.1rem solid blue;
    transition-duration: 0.5s;
  }
  ::placeholder{
    color: #5a595d6f;
    font-size: 1.3rem;
    margin-top: 0.3rem;
  }
`
export const ContinueButton = styled.button`
  background-color: #D1410C;
  color: white;
  font-weight: 500;
  border: none;
  width: 360px;
  height: 44px;;
  margin-top: 2.6rem;
  font-size: 14px;
  border-radius: 4px;
  :hover{
    background-color: #f3551b;
    cursor: pointer;
    transition-duration: 1s;
  }
  :active{
    background-color: #D1410C;
  }
`
export const DropDownDiv = styled.div`
  width: 100%;
  height: 46px;
  position: relative;  
`
export const DropDownSpan = styled.span`
  color: #39364f;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-pack: start;
  justify-content: flex-start;
  line-height: 22px;
  padding: 12px 12px 0px 14px;
  
`
export const DropDownTitleSpan = styled.span`
  -webkit-box-flex: 1;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const DropDownArrowSpan = styled.span`
  margin-top: 0;
  fill: #4b4d63;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  height: 24px;
  `
export const DropDownLabel = styled.label`
  position: absolute;
  left: -999999px;
` 
export const DropDownLabelSpan = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
` 
export const DropDownSelect = styled.select`
  line-height: 22px;
  padding: 12px 14px;
  background: none;
  border: none;
  color: #39364f;
  white-space: nowrap;
  outline: none;
  transition: padding .16s cubic-bezier(.4,0,.3,1),color .4s cubic-bezier(.4,0,.3,1);
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  -webkit-appearance: menulist-button;
  overflow: visible;
  @media (min-width: 660px){
    font-size: 14px;
    min-height: 22px;
  }
`
export const DropDownOption = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;`
export const ErrorMessage = styled.p`
  display: flex;
  color: red;
  font-size: 1.2rem;
  padding-top: 4px;
`
export const FixedDiv = styled.div`
  position: fixed;
  transform: translateY(0);
  background-color: #fff;
  border-top: 1px solid #eeedf2;
  bottom: 0;
  left: 0;
  min-height: 64px;
  overflow: hidden;
  transition: transform .32s cubic-bezier(.4,0,.3,1),-webkit-transform .32s cubic-bezier(.4,0,.3,1);
  width: 100%;
  will-change: transform;
`
export const FixedInnerDiv = styled.div`
  @media (min-width: 792px){
    margin-left: 30%;
  }
  max-width: 960px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-right: auto;
`
export const FixedButtonDiv = styled.div`
  text-align: right;
  width: 100%;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  @media (min-width: 1152px){
    padding: 0 48px;
}
`
export const LocationButtonsDiv = styled.div`
  overflow: visible;
  @media (min-width: 960px){
    width: 66.6666666667%;
  }
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  box-sizing: border-box;
  display: block;
  vertical-align: top;
`
export const LocationFlexButtonsDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
`
export const ButtonsDivs = styled.div`
  -webkit-box-flex: 1;
  flex-grow: 1;
  display: flex;
  margin-right: 16px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: 0.03rem;
  @media (min-width: 960px){
    min-width: 9.7rem; 
  }
`
export const ButtonsLabels = styled.label`
  color: #1e0a3c;
  font-weight: 400;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dbdae3;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  -webkit-box-flex: 1;
  flex-grow: 1;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  :active{
    background-color: rgba(54,89,227,.1);
    border: 1px solid #3659e3;
    color: #3659e3;
  }
`
export const SearchVenueDiv1 = styled.div`
  border-radius: 2px;
  background: #dbdae3;
  padding: 1px;
  position: relative;
  transition: background .24s cubic-bezier(.4,0,.3,1);
`
export const SearchVenueDiv = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  position: relative;
  background: #fff;
  border-radius: 1px;
  border: 1px solid #fff;
` 
export const SearchCalendarSpan = styled.span`
  margin-left: 12px;
  color: #a9a8b3;
  font-size: 14px;
  height: 24px;
  margin: auto 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const DisplayEndTime = styled.div`
 position: relative;
 display: flex;
 -webkit-box-align: center;
 align-items: center;
`
export const CheckLabel = styled.label`
  :hover{
    border-color: #a9a8b3;
  }
  text-align: center;
  margin: 0;
  background-color: #fff;
  border: 1px solid #dbdae3;
  border-radius: 2px;
  position: relative;
  width: 20px;
  height: 20px;
  line-height: 0;
  transition: border-color .16s ease-in;
  -webkit-box-flex: 0;
  flex: none;
  display: inline-block;
  cursor: pointer;
  color: #39364f;
`
export const CheckBox = styled.input`
  box-sizing: border-box;
  padding: 0;
  visibility: visible;
  position: absolute;
  :checked{
    border-color: #3d64ff;
  }
`
export const CheckTextLabel = styled.label`
  margin-left: 16px;
  margin-right: 12px;
  cursor: pointer;
  color: #39364f; 
`
export const SpanText = styled.span`
  display: block;
  cursor: pointer;
  font-weight: 400;
`
export const TextP =styled.p`
  @media (min-width: 960px){
      font-size: 1.2rem;
      line-height: 1rem;
  }
  color: #4b4d63;
`
export const TimeDropDownDiv = styled.div`
  @media (min-width: 660px){
      width: 50%;
  }
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`
export const Placeholder2 = styled.div`
  padding: 2px 12px 0;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
`
export const SpanText2 = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 400;
  :active{
    color: #3659e3;
  }
`
