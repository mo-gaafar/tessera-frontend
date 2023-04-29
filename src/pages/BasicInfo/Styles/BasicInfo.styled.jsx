import styled from 'styled-components';
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
  @media (min-width: 1152px){
    width: 75%;
  }
`
export const ExplanationP = styled.p`
  color: #39364f;
  font-weight: 400;
  font-size: 1.6rem;
  @media (min-width: 960px){
    font-size: 1.3rem;
    line-height: 1.25rem;
  }
  
  `
export const ExplanationSpan = styled.span`
`
export const ContentsDiv = styled.div`
  margin-top: 1.6rem;
`
export const InputDiv = styled.div`
  margin-bottom: 1.2rem;
`
export const EventTitleInputDiv = styled.div`
  border-radius: 2px;
  background: #dbdae3;    
  padding: 1px;
  position: relative;
  transition: background .24s cubic-bezier(.4,0,.3,1);
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
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  position: relative;
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 0;
`
export const PlaceHolder = styled.div`
  padding: 0.2rem 1.2rem 0;
 
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
  padding: 1.8rem 1.2rem 0.6rem;
  @media (min-width: 660px){
    font-size: 14px;
    line-height: 22px;
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
`
export const FieldSet = styled.fieldset`
  margin-top: 1.6rem;
`
export const TagsDiv = styled.div`
  margin-top: 1.6rem;
`
