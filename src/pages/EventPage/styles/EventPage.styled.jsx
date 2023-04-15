import styled from 'styled-components';
export const WholePage = styled.div`
`;
export const FirstHalfPage = styled.div``;
export const FirstHalfPageDiv1 = styled.div``;
export const FirstHalfPageDiv2 = styled.div``;
export const Header = styled.div`
  height: 5.9rem;
  display: flex;
  border-bottom: 1px solid #eeedf2;
  -webkit-box-pack: justify;
  justify-content: space-between;
  position: relative;
  letter-spacing: normal;
  font-size: 1.4rem;
  background-color: #fff;
  @media (max-width: 280px) {
    max-width: 28.4rem;
  }
`;
export const RightHeader = styled.div`
  flex: 1;
  display: flex;
`;

export const LeftHeader = styled.div`
  flex: 1;
  display: flex;
  @media (min-width: 940px) {
    margin-right: 0rem;
  }
  div:last-child {
    margin-left: auto;
  }
`;
export const Logo = styled.img`
  display: -webkit-box;
  display: flex;
  -webkit-box-flex: 0;
  flex: none;
  -webkit-box-align: center;
  align-items: center;
  max-height: 5.9rem;
  width: 14.7rem;
  padding-right: 0rem;
  margin-top: 0rem;
  @media (min-width: 940px) {
    margin-top: 0rem;
  }
`;

export const Search = styled.div`
  text-align: right;
  -webkit-box-flex: 1;
  flex: 1;
  height: 2.451rem;
  margin-top: 1rem;
  @media (min-width: 940px) {
    display: none;
  }
  @media (max-width: 450px) {
  }
`;
export const SearchDiv = styled.div`
  @media (min-width: 1200px) {
    min-width: 53.7rem;
  }
  @media (max-width: 940px) {
    display: none;
  }
`;
export const SearchDiv2 = styled.div``;
export const SearchDiv3 = styled.div``;
export const SearchButton2 = styled.button`
  box-sizing: border-box;
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  text-align: left;
  color: #39364f;
  fill: #39364f;
  -webkit-appearance: button;
  cursor: pointer;
  font-size: 100%;
  overflow: visible;
  text-transform: none;
`;
export const SearchButtonDiv = styled.div``;
export const SearchButtonSpan = styled.span`
  margin-left: 12px;
  color: #a9a8b3;
  font-size: 14px;
  height: 24px;
  margin: auto 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const SearchButtonDiv2 = styled.div``;
export const SearchButtonDiv3 = styled.div`
  padding: 0.5rem 0;
  position: relative;
`;
export const SearchButtonDiv4 = styled.div``;
export const SearchButtonDiv5 = styled.div`
  background: none;
  border-radius: 2px;
  padding: 1px;
  position: relative;
  transition: background 0.24s cubic-bezier(0.4, 0, 0.3, 1);
`;
export const SearchButtonDiv6 = styled.div`
  background: #f8f7fa;
  border: 1px solid #f8f7fa;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  position: relative;
  border-radius: 1px;
`;
export const SearchButtonDiv7 = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  position: relative;
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 0;
`;
export const SearchButtonDiv8 = styled.div`
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
`;
export const SearchButtonDiv9 = styled.div``;
export const SearchButtonDiv10 = styled.div``;
export const SearchButtonInput = styled.input`
  font-size: 14px;
  line-height: 22px;
  padding: 12px 14px;
  cursor: pointer;
  pointer-events: none;
  min-height: 22px;
  background: none;
  border: none;
  color: #39364f;
  white-space: nowrap;
  outline: none;
  transition: padding .16s cubic-bezier(.4,0,.3,1),color .4s cubic-bezier(.4,0,.3,1);
  -webkit-appearance: textfield;
  box-sizing: content-box;
  -webkit-box-flex: 1;
  flex: 1;
  min-width: 0;
  word-spacing: 1px;
  writing-mode: horizontal-tb
  letter-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-rtl-ordering: logical;
`;
export const SearchButtonLabel = styled.label`
  position: absolute;
  left: -999999px;
`;
export const SearchButtonSpan2 = styled.span`
  color: #a9a8b3;
  font-size: 14px;
  height: 24px;
  margin-top: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-left: 12px;
  fill: #a9a8b3;
`;
export const SearchButtonSpan3 = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  font-weight: 400;
`;
export const SearchSpan = styled.span`
  padding-right: 8px;
`;
export const SearchButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  text-align: left;
  color: var(--eds-ui-800, #39364f);
  fill: var(--eds-ui-800, #39364f);
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  -webkit-appearance: button;
  cursor: pointer;
  line-height: normal;
  overflow: visible;
  --conversion-bar-placeholder: 204px;
`;
export const MaxMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 940px) {
    display: none;
  }
`;
export const MaxMenuMainDiv = styled.div`
  display: flex;
  margin-left: auto;
  padding-left: 0rem;
  @media (max-width: 940px) {
    display: none;
  }
`;
export const MaxMenuA = styled.a`
  color: #6f7287;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  height: 59px;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0 10px;
`;
export const MaxMenuSpan = styled.span``;

export const DropDownPath = styled.path`
background: #f8f7fa;
width: 40px;
height: 40px;
border-radius: 8px
display: flex;
margin: 0 auto;
vertical-align: middle;
line-height: 0;
fill: #c2c2cc;
`;

export const MenuSpan = styled.span`
  max-width: 4.316rem;
  height: 2.1rem;
`;
export const MenuDiv = styled.div`
  display: flex;
  @media (min-width: 940px) {
    display: none;
  }
`;
export const MenuSpanText = styled.span`
  font-weight: 600;
  padding: 0rem 0rem 0rem 0.8rem;
`;
export const DropDownMenu = styled.a`
  color: #6f7287;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  white-space: nowrap;
  height: 59px;
  text-rendering: optimizeLegibility;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  text-decoration: none;
  margin-right: 2rem;
  cursor: pointer;
  background-color: transparent;
  @media (min-width: 940px) {
    display: none;
  }
`;
export const DropDownSpan = styled.span`
  position: relative;
  top: 2px;
  left: 3px;
  color: #6f7287;
  white-space: nowrap;
`;
export const MenuSubDiv = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 2.4rem;
`;
export const DropDownDiv = styled.div`
  min-width: 250px;
  animation-duration: 0.24s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fadeIn;
  border-top: none;
  top: 100%;
  right: 0;
  max-width: 500px;
  box-shadow: 0 1px 17px 0 rgba(40, 44, 53, 0.1),
    0 2px 4px 0 rgba(40, 44, 53, 0.1);
  box-sizing: border-box;
  position: absolute;
  z-index: 1000;
  text-align: left;
  background-color: white;
  display: none;
  @media (min-width: 940px) {
    display: none;
  }
`;
export const DropDownDiv2 = styled.div``;
export const DropDownUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  list-style: none;
`;
export const DropDownLi = styled.li`
  vertical-align: top;
  width: 100%;
  display: list-item;
`;
export const DropDownA = styled.a`
  padding: 16px 20px;
  box-sizing: border-box;
  text-align: left;
  color: #6f7287;
  text-decoration: none;
  cursor: pointer;
  width: 100%;
  text-rendering: optimizeLegibility;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  display: block;
  background-color: transparent;
`;
export const DropDownDiv3 = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  text-align: left;
  color: #6f7287;
  cursor: pointer;
  text-rendering: optimizeLegibility;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  list-style-type: none;
`;
export const DropDownDiv4 = styled.div`
  padding: 0;
  margin: 0;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  min-width: 0;
`;
export const DropDownDiv5 = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
`;
export const DotsSpan = styled.span``;
export const DotsI = styled.i``;
export const DotsSvg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
  padding-top: 0.5rem;
`;
export const DotsPath = styled.path`
  fill: #4b4d63;
  fill-rule: evenodd;
  clip-rule: evenodd;
  d: path(
    'M 10 18 c 0 -1.1 0.9 -2 2 -2 s 2 0.9 2 2 s -0.9 2 -2 2 s -2 -0.9 -2 -2 Z'
  );
`;
export const DotCircle1 = styled.circle`
  fill: #4b4d63;
  fill-rule: evenodd;
  clip-rule: evenodd;
  cx: 12;
  cy: 12;
  r: 2;
`;
export const DotCircle2 = styled.circle`
  fill: #4b4d63;
  fill-rule: evenodd;
  clip-rule: evenodd;
  cx: 12;
  cy: 6;
  r: 2;
`;
export const PictureDiv = styled.div`
  display: block;
  @media (min-width: 1200px) {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg width='1676' height='430' viewBox='0 0 1676 430' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_3405_50198)'%3E%3Cpath d='M1669.31 -124.702C1704.63 -198.281 1599.75 -278.89 1440.21 -219.509C1280.67 -160.128 1138.67 -174.472 940.588 -234.668C588.163 -341.792 438.492 -309.897 215.804 -220.763C150.423 -195.199 15.9418 -122.33 0.814447 -35.3897C-18.0424 73.26 298.334 62.7189 143.288 203.358C-11.7568 343.996 26.7216 552.457 835.628 313.658C939.215 283.079 1109.58 269.122 1259.68 366.729C1409.78 464.336 1549.16 434.834 1602.55 362.937C1716.96 208.836 1609.92 -1.08292 1669.31 -124.702Z' fill='%23EDF1FC'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_3405_50198'%3E%3Crect width='1676' height='430' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    background-position: top;
    background-repeat: no-repeat;
    //padding-top: 3.2rem;
  }
`;

export const PictureDiv2 = styled.div`
  max-height: 470px;
  position: relative;
  margin: 0 auto;
  text-align: center;
  overflow: hidden;
  font-size: 0;
  //background-image: url('https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F474950379%2F1432415879683%2F1%2Foriginal.20230322-105839?w=600&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=bbc149e4b288f5f0d89c42b6631ad037');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0rem 0rem 2rem 2rem;
  @media (min-width: 1200px) {
    border-radius: 2.4rem;
    width: 120rem;
  }
  @media (max-width: 940px) {
    max-height: 47rem;
    border-radius: 0rem 0rem 2rem 2rem;
  }

`;

export const PictureDiv3 = styled.div`
//background-image : url("https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F474950379%2F1432415879683%2F1%2Foriginal.20230322-105839?w=50&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=fdb3e805b3cbdb9668f2d9737527bfa5");
background-repeat: no-repeat;
background-position: 50%;
max-width: 1080px;
margin: 0 auto;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
text-align: center;
filter: blur(50px) brightness(.9);
z-index: 0;`;
export const Picture = styled.picture`
position: relative;
width: 100%;
height: auto;
z-index: 1;
aspect-ratio: auto 600 / 300;`;
export const PictureSource = styled.img`
  filter: blur(50px) brightness(0.9);
  @media(min-width: 940px) and (max-width: 1200px){
    width: 100%;
  }
  @media(max-width: 940px){
    display: none;
  }
  @media (min-width: 1200px) {
    border-radius: 2.4rem;
    width: 120rem;
  }
`;
export const PictureBackgroundEvent = styled.img`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
  aspect-ratio: auto 600 / 300;
  border-radius: 0rem 0rem 2rem 2rem;
  @media (min-width: 940px) and (max-width: 1200px) {
    position: fixed;
    margin-top: -54.5rem;
    margin-left: 8rem;
    border-radius: 0rem;
    max-width: 94rem;
  }
  @media (min-width: 1200px) {
    margin-top: -60rem;
    max-width: 94rem;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const DetailsDiv = styled.div`
  padding: 4.8rem 0rem 0rem;
  @media (min-width: 940px) {
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid #eeedf2;
    padding: 4.8rem 0rem 0rem;
    position: relative;
    max-width: 1080px;
    margin: 0 auto;
  }
  @media (min-width: 660px) and (max-width: 940px) {
    padding: 0rem 2.4rem;
    margin: 0 auto;
  }
`;
export const DetailsDiv2 = styled.div`
  @media (min-width: 940px) {
    -webkit-box-flex: 1;
    flex: 1;
    margin: 0;
    max-width: 720px;
    word-break: break-word;
    padding: 0rem;
  }
  @media (min-width: 720px) and (max-width: 940px) {
    padding: 0 auto;
  }
  @media (max-width: 660px) {
    padding: 0rem;
  }
`;
export const MainDetailsDiv = styled.div`
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  @media (min-width: 940px) {
    padding: 0;
  }
  @media (min-width: 660px) and (max-width: 940px) {
    padding: 0rem 6.4rem;
  }
`;
export const ActionPanel = styled.div`
  height: 4rem;
  margin-left: 43rem;
  @media (min-width: 940px) {
    max-width: none;
    flex-basis: 100%;
    margin: auto;
    position: relative;
  }
`;
export const ActionPanelul = styled.ul`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 0 2.5rem;
  height: 40px;
  z-index: 900;
  right: 0;
  margin-left: auto;
  @media (max-width: 660px) {
    margin-top: -0.7rem;
    padding: 0;
    dislpay: block;
    margin-left: 0rem;
  }
  @media (min-width: 660px) and (max-width: 940px) {
    padding-top: 9rem;
    dislpay: block;
    margin-left: 0rem;
  }
`;
export const ActionPanelLi = styled.li`
  animation-delay: 1.4s;
  z-index: 1
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fadeInDown;
`;
export const ActionPanelLi2 = styled.li`
  animation-delay: 1.4s;
  z-index: 1
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fadeInDown;
  @media(max-width: 660px){
    display: none;
  }
`;
export const LiSpan = styled.span``;
export const LiDiv = styled.div`
  border: none;
`;
export const LiDiv2 = styled.div``;
export const LiDiv3 = styled.div`
  display: inline-block;
  background: none;
  border: none;
  outline: none;
`;
export const LiSpan2 = styled.span``;
export const LiButton = styled.button`
  border-radius: 40px;
  height: 40px;
  padding: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.3, 1);
  width: 40px;
  color: #4b4d63;
  fill: #4b4d63;
  background: none;
  border: none;
  text-align: left;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  -webkit-appearance: button;
  cursor: pointer;
  line-height: normal;
  overflow: visible;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
`;
export const LiI = styled.i`
  display: block;
  margin: 0 auto;
  vertical-align: middle;
  background-size: contain;
  line-height: 0;
  width: 24px;
  height: 24px;
`;
export const LiSvg = styled.svg`
  overflow: hidden;
`;
export const LiPath = styled.path``;
export const LiSpan3 = styled.span`
  position: absolute;
  left: -999999px;
`;
export const MainDetailsTitle = styled.h1`
  color: #1e0a3c;
  font-size: 3rem;
  margin: 0rem 0rem 1.6rem;
  font-family: Roboto;
  font-weight: bolder;
  @media (min-width: 940px) {
    font-size: 4.875rem;
  }
`;
export const MainDetailsP = styled.p`
  margin-top: 2rem;
  margin-bottom: 3.5rem;
  line-height: 2.2rem;
  font-weight: 700;
`;
export const MainDetailsSection = styled.section`
padding: 1.6rem 2.4rem; 
margin 0rem 0rem 4.8rem;
background-color: #F8F7FA;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
flex-direction: row;
-webkit-box-align: center;
align-items: center;
border-radius: 0.5rem;
@media(max-width: 700px){
  display: block;
}
`;
export const EventDate = styled.time`
  font-weight: 600;
  margin-bottom: var(0.8rem);
  display: block;
  font-size: 1.5rem;
  line-height: 1.5rem;
  color: #39364f;
  margin: 0rem 0rem 0.8rem;
  margin-top: -2rem;
  @media (min-width: 940px) {
    font-size: 1.6875rem;
  }
  @media (max-width: 660px) {
    margin-top: -2rem;
  }
  @media (max-width: 940px) {
    margin-top: 0rem;
  }
  @media (min-width: 660px) and (max-width: 940px) {
    display: flex;
  }
`;
export const HostInfoDiv = styled.div`
  margin-right: 1rem;
  align-self: center;
`;
export const EventHostDiv = styled.div``;
export const EventHostSpan = styled.span`
  color: #6f7287;
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 900;
`;
export const FollowButtonDiv = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: auto;
  @media (max-width: 700px) {
    padding-top: 1.5rem;
    display: block;
  }
`;
export const FollowButton = styled.button`
  width: 10.683rem;
  height: 4.48rem;
  background-color: #3659e3;
  color: white;
  font-size: 1.4rem;
  padding: 0rem 3rem 0.1rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const DetailsStrong = styled.strong`
  color: #39364f;
  font-size: 1.5rem;
  @media (min-width: 940px) {
    font-size: 1.3125rem;
  }
`;
export const HostName = styled.strong`
  color: #1e0a3c;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.5rem;
`;
export const WhenandWhereDiv = styled.div`
  padding: 0rem 6.4rem;
  display: block;
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: #1e0a3c;
  font-weight: 700;
  margin-bottom: 1.6rem;
  @media (min-width: 940px) {
    padding: 0rem;
  }
  @media (max-width: 660px) {
    padding: 0rem 2.4rem;
  }
`;
export const WhenandWhereSection = styled.section`
  margin: 0rem 0rem 4.8rem;
`;
export const WhenAndWhereDetailsDiv = styled.div`
  margin-top: 0rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const WhenandWhereText = styled.h2`
  padding-top: 1.5rem;
`;

export const DateAndLocationDiv = styled.div`
  display: flex;
  padding: 0.8rem 6.4rem 0rem;
  @media (min-width: 940px) {
    padding: 0rem;
  }
  @media (max-width: 790px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    margin-bottom: 1.6rem;
    margin-top: 1.6rem;
    list-style: none;
    padding-top: 0.8rem;
  }
  @media (max-width: 660px) {
    padding: 0rem;
  }
`;
export const DateAndTimeSection = styled.section`
  width: 50%;
  padding-top: 1rem;
  @media (max-width: 800px) {
    width: 100%;
    display: block;
    padding: 0 24px;
    margin: auto;
  }
`;
export const DateSpan = styled.span`
  color: #6f7287;
  font-weight: 600;
`;
export const DateSelect = styled.select`
  margin: 0rem 0rem 0rem -0.4rem;
  padding: 0.5rem 0rem;
  font-weight: 600;
  display: inline-block;
  width: 11rem;
  color: var(--eds-control, #3659e3);
  background: none;
  border: none;
  text-align: left;
  transform: translateZ(0);
  position: relative;
  height: 4.4rem;
  font-size: 1.3125rem;
  cursor: pointer;
`;
export const DateOptions = styled.option`
  font-weight: normal;
  display: block;
  white-space: nowrap;
  min-height: 1.2em;
  padding: 0px 2px 1px;
  font-weight: 700;
`;
export const LocationDiv = styled.div`
`;
export const LocationStrong = styled.strong`
display: block;
  color: #6f7287;
  font-weight: 600;
`;

export const LocationSection = styled.section`
  width: 50%;
  padding-top: 1rem;
  @media (max-width: 800px) {
    width: 100%;
    display: block;
    padding: 0 24px;
    margin: auto;
  }
`;
export const MapButton = styled.button`
  margin: 0rem 0rem 0rem -0.4rem;
  padding: 0.5rem 0rem;
  font-weight: 600;
  display: inline-block;
  width: 8.2rem;
  color: #3659e3;
  background: none;
  border: none;
  text-align: left;
  transform: translateZ(0);
  position: relative;
  height: 4.4rem;
  font-size: 1.3125rem;
  cursor: pointer;
`;
export const MapButtonDiv = styled.div`
  display: flex;
`;
export const MapDetailsI = styled.i`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1rem;
  cursor: pointer;
`;
export const MapDetailsPath = styled.path`
  background: #f8f7fa;
  width: 40px;
  height: 40px;
  border-radius: 8px
  display: flex;
  margin: 0 auto;
  vertical-align: middle;
  line-height: 0;
  fill: #3659e3;
  `;

export const DetailsI = styled.i`
  width: 4rem;
  height: 4rem;
  background-color: #f8f7fa;
  border-radius: 1rem;
`;
export const SearchDetailsI = styled.i`
  display: inline-block;
  margin: 0 auto;
  vertical-align: middle;
  background-size: contain;
  line-height: 0;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  box-sizing: initial;
`;

export const ImageLogoDiv = styled.div`
  -webkit-box-flex: 0;
  flex: 0;
  display: flex;
  height: 10.125rem;
  width: 4rem;
  margin: 0rem 1.4rem 0rem 0rem;
`;
export const DetailsSvg = styled.svg`
  display: block;
  margin: auto;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  overflow: hidden;
  width: 2.4rem;
  height: 2.4rem;
  overflow-clip-margin: content-box;
`;
export const SearchDetailsPath = styled.path`
  fill: #4b4d63;
  text-align: left;
`;
export const DetailsPath = styled.path`
background: #f8f7fa;
width: 40px;
height: 40px;
border-radius: 8px
display: flex;
margin: 0 auto;
vertical-align: middle;
line-height: 0;
fill: #3659e3;
`;
export const LogoSpan = styled.span`
  -webkit-box-align: center;
  align-items: center;
  background: rgb(248, 247, 250);
  border-radius: 0.8rem;
  display: inline-flex;
  padding: 0.8rem;
  height: 4rem;
  width: 4rem;
}
`;
export const RefundSection = styled.section`
  margin-top: -29rem;
  margin-bottom: 4.8rem;
  color: #6f7287;
  font-size: 1rem;
  line-height: 1.5rem;
  
`;
export const RefundDiv1 = styled.div`
  color: #1e0a3c;
  font-weight: 700;
  margin-bottom: 1.6rem;
  @media (min-width: 940px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
`;
export const RefundDiv2 = styled.div`
  color: #6f7287;
  font-weight: 600;
  font-size: 1.325rem;
`;
export const RefundTitle = styled.h2`
  @media (max-width: 940px) {
    color: #1e0a3c;
    font-size: 2.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
`;
export const RefundInfo = styled.div``;
export const NonRefund = styled.div``;

export const AboutEvent = styled.div`
  padding: 4rem 0rem 6.4rem 6.4rem;
  margin-top: -29rem;
  @media (min-width: 940px) {
    padding: 0rem;
  }
  @media (max-width: 790px) {
    padding: 0rem 0rem 6.4rem 6.4rem;
  }
`;
export const AboutEventTitleDiv = styled.div`
  line-height: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
`;
export const AboutEventTitle = styled.h2`
  color: #1e0a3c;
  font-size: 2.25rem;
`;
export const AboutEventUL = styled.ul`
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    margin-bottom: 1.6rem;
    margin-top: 1.6rem;
    list-style: none;
    padding: 0rem;
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 16px;
  margin-top: 16px;
  padding: 0rem;
`;
export const AboutEventLi = styled.li`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  font-weight: 500;
  line-height: 1.5rem;
  font-size: 1.5rem;
`;
export const AboutEventSubDiv1 = styled.div``;
export const AboutEventSubDiv2 = styled.div``;
export const AboutEventSubDiv3 = styled.div`
  text-rendering: optimizeLegibility;
  font-weight: 400;
  margin: 2.4rem 0rem;
  text-align: left;
`;
export const AboutEventSubDiv4 = styled.div``;
export const AboutEventP = styled.p`
  font-size: 1.6rem;
  line-height: 1.5rem;
  color: #6f7287;
  display: block;
  text-align: left;
  padding: 1rem 0rem 0rem;
  font-weight: 400;
`;
export const RightDetailsDiv = styled.div`
  line-height: 1.25rem;
  color: #6f7287;
  -webkit-box-flex: 1;
  flex: 1;

  .map__container {
    width: 50rem;
    height: 50rem;
    position: relative;
    z-index: 5;
  }
`;
export const DetailsTitleDiv = styled.div`
  font-size: 1.3rem;
  line-height: 1.2rem;
  color: #1e0a3c;
  font-weight: 400; 
  margin-bottom: 1.8rem;
  padding-top: 1rem;
`;
export const DetailsP = styled.p`
  margin-bottom: 0.8rem;
  display: block;
  font-size: 1.3125rem;
  line-height: 1.25rem;
`;
export const ReserveDiv = styled.div`
  @media (min-width: 940px) {
    position: relative;
    -webkit-box-flex: 1;
    flex: 1;
    max-width: 360px;
    padding-top: 64px;
  }
`;
export const TicketsEndDiv = styled.div`
  display: none;
  @media (max-width: 940px) {
    display: none;
  }
  @media (min-width: 940px) {
    //div when tickets are about to end
    text-align: right;
    margin-bottom: 16px;
  }
`;
export const TicketsEndDiv2 = styled.div`
  margin-left: 6rem;
  margin-top: -4rem;
  display: none;
  @media (min-width: 940px) {
    display: none;
  }
  @media (max-width: 660px) {
    margin-left: 2.4rem;
  }
  @media (min-width: 660px) and (max-width: 940px) {
    margin-top: 2rem;
  }
`;
export const TicketsEndDivInner = styled.div`
  background-color: #eeeafb;
  color: #5328d7;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 16px;
  grid-column-gap: 6px;
  column-gap: 6px;
  display: inline-flex;
  font-weight: 600;
  line-height: 1;
  padding: 4px 12px;
  height: 3.2rem;
`;
export const TicketsEndPath = styled.path`
  fill: #5328d7;
`;
export const TicketsEndI = styled.i`
  width: 4rem;
  height: 4rem;
  background: none;
  border-radius: 1rem;
`;
export const TicketsText = styled.p`
  font-weight: 600;
  color: #5328d7;
  font-size: 1.4rem;
`;
export const WholeTicketsDiv = styled.div`
  //div when the tickets are free
  border: 1px solid #eeedf2;
  border-radius: 1rem;

  @media (min-width: 940px) {
    // position: absolute;
    // height: 22.8rem;
    // top: 0rem;
  }
  @media (max-width: 940px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
  }
`;
export const TicketsDiv = styled.div`
  background-color: #fff;
  animation-duration: 0.24s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-name: fadeIn;
`;

export const TicketsSection = styled.section`
  padding: 24px;
  overflow: hidden;
  display: block;
`;
export const TicketsForm = styled.form`
  margin-bottom: 16px;
  padding-left: 0rem;
`;
export const TicketsButton = styled.button`
  display: block;
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
  color: #fff;
  fill: #fff;
  border: none;
  background-color: #d1410c;
  transform: translateZ(0);
  position: relative;
  height: 44px;
  padding: 0 30px 1px;
  text-decoration: none;
  line-height: 24px;
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.2px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.3, 1);
`;
export const SoldOutTicketsButton = styled.button`
display: block;
box-sizing: border-box;
width: 100%;
white-space: nowrap;
color: #39364f;
fill: #39364f;
background-color: #fff;
border: 2px solid #a9a8b3;
transform: translateZ(0);
position: relative;
height: 44px;
padding: 0 30px 1px;
text-decoration: none;
line-height: 24px;
font-weight: 600;
font-size: 1.6rem;
letter-spacing: .2px;
border-radius: 4px;
cursor: pointer;
transition: all .4s cubic-bezier(.4,0,.3,1);
:hover{
  background-color:#CDCDCD;
}
`; 
export const TicketsUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: 400;
  color: #39364f;
  font-size: 16px;
`;
export const TicketsLi = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  list-style-type: none;
`;
export const TicketsSubDiv1 = styled.div`
  background: #fff;
  display: flex;
`;
export const TicketsSubDiv2 = styled.div`
  box-shadow: inset 0 0 0 2px #3659e3;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
`;
export const TicketsSubDiv3 = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  align-items: flex-start;
  grid-gap: 12px;
  gap: 12px;
`;
export const TicketsSubDiv4 = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
`;
export const TicketsSubDiv5 = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.5rem;
  text-rendering: optimizeLegibility;
`;
export const TicketsSubDiv6 = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
`;
export const TicketsSubDiv7 = styled.div`
  color: #1e0a3c;
  font-size: 2rem;
  line-height: 1.75rem;
  letter-spacing: 0.25px;
  font-weight: 600;
  text-rendering: optimizeLegibility;
  margin: 0 1.6rem;
`;
export const TicketsButtonSubtract = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.3, 1);
  -webkit-appearance: button;
  cursor: pointer;
  overflow: visible;
  text-transform: none;
  :disabled {
    background-color: #eeedf2;
  }
  :active {
    background-color: #3659e3;
  }
`;
export const TicketsButtonAdd = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.3, 1);
  -webkit-appearance: button;
  cursor: pointer;
  overflow: visible;
  text-transform: none;
  background-color: #3659e3;
`;
export const TicketsI = styled.i`
  display: inline-block;
  margin: 0 auto;
  vertical-align: middle;
  background-size: contain;
  line-height: 0;
  width: 24px;
  height: 24px;
  box-sizing: initial;
`;
export const TicketsSvg = styled.svg`
  width: 24px;
  height: 24px;
`;
export const TicketsPath = styled.path`
  fill: #fff;
`;
export const TicketsSubDiv8 = styled.div`
  margin-top: 16px;
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;
export const TicketsSubDiv9 = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  grid-gap: 12px;
  gap: 12px;
`;
export const BuyTicketsButton = styled.button`
  display: flex;
  color: #3659e3;
  border: none;
  outline: #3659e3;
  background: none;
  padding: 0;
  -webkit-appearance: button;
  cursor: pointer;
`;
export const TicketsFreePath = styled.path`
  fill: #3d64ff;
`;
export const TicketsFreeSpan = styled.span`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.5rem;
  text-rendering: optimizeLegibility;
`;
export const PricedTickets = styled.div`
  max-height: 140px;
  width: 100%;
  height: 140px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 0 0 1px #eeedf2;
  position: sticky;
  bottom: auto;
  z-index: 900;
  background-color: #fff;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  animation: slideUp 0.5s linear;
  animation-fill-mode: forwards;
  @media (min-width: 940px) {
    top: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 940px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
  }
  display: none;
`;
export const PricedTicketsPrice = styled.div`
  width: 100%;
  font-weight: 600;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.685rem;
  line-height: 1.5rem;
`;
export const PricedTicketsPriceDiv = styled.div`
  width: 100%;
`;
export const PricedTicketsButtonDiv = styled.div`
  margin-top: 24px;
  box-sizing: border-box;
  font-size: 0.875rem;
  line-height: 1.5rem;
  width: 100%;
  display: grid;
  grid-gap: 8px;
  gap: 8px;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`;

export const SoldOutTickets = styled.div`
  max-height: 140px;
  width: 100%;
  height: 140px;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 0 0 1px #eeedf2;
  position: sticky;
  bottom: auto;
  z-index: 900;
  background-color: #fff;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  animation: slideUp 0.5s linear;
  animation-fill-mode: forwards;

  @media (min-width: 940px) {
    top: 24px;
    margin-bottom: 24px;
  }

  @media (max-width: 940px) {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
  }
  display: none;
`;

export const Map = styled.div`
height: 37.6rem;
@media(min-width: 790px){
  margin-left: -25rem
}
`;
export const Map1 = styled.div`
  height: 376px;
  @media (min-width: 940px) {
    -webkit-box-flex: 1;
    padding-left: 24px;
    padding-right: 24px;
  }
`;
export const Map2 = styled.div`
  @media (min-width: 660px) {
    border-radius: 8px;
    overflow: hidden;
  }
`;
export const Map3 = styled.div`
  width: 100%;
  height: 376px;
  position: relative;
  overflow: hidden;
`;
export const Map4 = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgb(229, 227, 223);
`;
export const Map5 = styled.div`
  position: absolute;
  z-index: 0;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  padding: 0px;
  border-width: 0px;
  margin: 0px;
`;
export const Map51 = styled.div``;
export const Map52 = styled.div`
  position: absolute;
  z-index: 0;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  padding: 0px;
  border-width: 0px;
  margin: 0px;
  cursor: url(https://maps.gstatic.com/mapfiles/openhand_8_8.cur), default;
  touch-action: pan-x pan-y;
`;
export const Map53 = styled.div`
  pointer-events: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  z-index: 1000002;
  opacity: 0;
  border: 2px solid rgb(26, 115, 232);
`;
export const Map521 = styled.div``;
export const Map522 = styled.div``;
export const Map523 = styled.div``;
export const Map12 = styled.div``;
export const MapButtonHidden = styled.button`
  background: none transparent;
  display: block;
  border: none;
  margin: 0px;
  padding: 0px;
  text-transform: none;
  appearance: none;
  position: absolute;
  cursor: pointer;
  user-select: none;
  z-index: 1000002;
  outline-offset: 3px;
  right: 0px;
  bottom: 0px;
  transform: translateX(100%);
`;
export const MapIframe = styled.iframe`
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  border: none;
  overflow: clip;
`;
