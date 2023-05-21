import styled from 'styled-components';
export const WholePage = styled.div`
  @media (max-width: 792px) {
    padding: 0 16px;
  }
  .wholepage {
    flex-grow: 1;
    overflow-y: scroll;
    /* max-height: 100vh; */

    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 48px;
    margin-left: 20rem;
    margin-right: auto;
    display: flex;
    @media (max-width: 792px) {
      max-width: 655px;
    }
    @media (max-width: 959px) {
      margin-bottom: 120px;
    }
  }
  .page {
    @media (min-width: 792px) {
      margin-left: 5.6rem;
    }
  }
  .main {
    max-width: 960px;
    -webkit-box-flex: 1;
    flex: 1 0 auto;
    position: relative;
    align-self: center;
    width: 100%;
  }
  .dropdownLast {
    width: 100%;
    height: 46px;
    position: relative;
  }
  .timeboxes {
    overflow: visible;
    padding-right: 8px;
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    @media (min-width: 480px) {
      width: 50%;
    }
  }
  .timeboxesborders {
    background: #a9a8b3;
    border-radius: 2px;
    background: #dbdae3;
    padding: 1px;
    position: relative;
    transition: background 0.24s cubic-bezier(0.4, 0, 0.3, 1);
  }
  .eventsbutton {
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
  }
  .backevents {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    font-size: 1.4rem;
    align-items: center;
    margin: auto;
  }
  .smallI {
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;
    background-size: contain;
    line-height: 0;
    width: 2.4rem;
    height: 2.4rem;
    box-sizing: initial;
  }
  .mediumI {
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;
    background-size: contain;
    line-height: 0;
    width: 4.8rem;
    height: 4.8rem;
    box-sizing: initial;
  }
  .smallSvg {
    overflow: hidden;
    width: 2.4rem;
    height: 2.4rem;
  }
  .mediumSvg {
    overflow: hidden;
    width: 4.8rem;
    height: 4.8rem;
  }
  .eventsword {
    :hover {
      text-decoration: underline;
    }
  }
  .lowerdiv {
    margin-bottom: 48px;
    margin-top: 20px;
    padding-bottom: 48px;
    padding-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .basicinfodiv {
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
  }
  .locationdiv {
    margin-top: 40px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
  }
  .dateandtimediv {
    margin-top: 40px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
  }
  .linedivider {
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
  }
  .iconsdiv {
    @media (max-width: 960px) {
      display: none;
    }
    padding-top: 0.4rem;
    margin-left: 8.3333333333%;
    width: 8.3333333333%;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
  }
  .infodiv {
    overflow: visible;
    @media (min-width: 1152px) {
      width: 66.6666666667%;
    }
    @media (min-width: 960px) {
      margin-left: 0;
    }
  }
  .explanationdiv {
    color: #1e0a3c;
    font-size: 1.4rem;
    width: 100%;
    margin-bottom: 1rem;
  }
  .explanationp {
    color: #39364f;
    font-weight: 400;
    font-size: 1.6rem;
    @media (min-width: 960px) {
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }
  eventtitleinputdiv {
    border-radius: 2px;
    background: #dbdae3;
    padding: 1px;
    position: relative;
    transition: background 0.24s cubic-bezier(0.4, 0, 0.3, 1);
    :active {
      border: 1px solid red;
    }
  }
  .eventtinputdiv {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    position: relative;
    border-radius: 1px;
    border: 1px solid #fff;
    background: #fff;
  }

  .eventt2inputdiv {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    position: relative;
    -webkit-box-flex: 1;
    flex: 1;
    min-width: 0;
  }
  .placeholder {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
  }
  .placeholderlabel {
    color: #6f7287;
    font-size: 1.2rem;
    line-height: 2.2rem;
    display: flex;
    position: relative;
    transition: all 0.16s cubic-bezier(0.4, 0, 0.3, 1);
    white-space: nowrap;
    overflow: hidden;
    padding: 0.6rem 1.2rem 0;
  }
  .placeholderspan {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    font-weight: 400;
  }
  .summaryboxflex {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    position: relative;
    background: #fff;
    border-radius: 1px;
    border: 1px solid #fff;
  }
  .summaryboxflex2 {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    position: relative;
    -webkit-box-flex: 1;
    flex: 1;
    min-width: 0;
    ::before {
      background: #fff;
      content: '';
      height: 22px;
      position: absolute;
      left: 0;
      right: 0;
      -webkit-box-direction: normal;
    }
  }
  .summaryplaceholder {
    padding: 2px 12px 0;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    width: 100%;
    box-sizing: border-box;
  }
  .summarylabel {
    color: #6f7287;
    font-size: 12px;
    line-height: 22px;
    display: flex;
    position: relative;
    transition: all 0.16s cubic-bezier(0.4, 0, 0.3, 1);
    white-space: nowrap;
    overflow: hidden;
  }
  .summaryspan {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    font-weight: 400;
    color: #6f7287;
    font-size: 12px;
    line-height: 22px;
  }
  .starspan {
    @media (min-width: 960px) {
      font-size: 0.75rem;
      line-height: 1rem;
    }
    color: #c5162e;
    padding-left: 0.2rem;
  }
  .secondstarspan {
    @media (min-width: 960px) {
      font-size: 0.75rem;
      line-height: 1rem;
    }
    color: #c5162e;
  }
  .input {
    padding: 0rem 1.2rem 0.6rem;
    @media (min-width: 660px) {
      font-size: 14px;
      min-height: 22px;
    }
    background: none;
    border: none;
    color: #39364f;
    white-space: nowrap;
    outline: none;
    transition: padding 0.16s cubic-bezier(0.4, 0, 0.3, 1),
      color 0.4s cubic-bezier(0.4, 0, 0.3, 1);
    -webkit-box-flex: 1;
    flex: 1;
    min-width: 0;
    display: inline-block;
    ::placeholder {
      color: #5a595d6f;
      font-size: 1.3rem;
    }
  }
  .fieldset {
    margin-top: 1.6rem;
    display: flex;
    border: none;
    padding: 0;
    @media (max-width: 790px) {
      display: block;
      width: 100%;
    }
  }
  .typedropdown {
    padding-right: 1.6rem;
    @media (min-width: 792px) {
      width: 33.3333333333%;
    }
  }
  .typeborder {
    border-radius: 2px;
    //background: #dbdae3;
    border: 1px solid #dbdae3;
    padding: 1px;
    position: relative;
    transition: background 0.24s cubic-bezier(0.4, 0, 0.3, 1);
    :focus {
      border-color: blue;
      background-color: red;
    }
    :hover {
      border: 1px solid #a9a9a9;
      transition: 0.25s ease-out;
    }
    :active {
      border: 1px solid blue;
    }
    :focus {
      border-color: blue;
      background-color: red;
    }
  }
  .gray-border {
    border: 1px solid #5a595d6f;
  }
  .blue-border:focus {
    border: 1px solid blue;
  }

  .red-border {
    border: 1px solid red;
  }
  .red-text {
    color: red;
  }

  .blue-text {
    color: blue;
  }
  .error {
    color: red;
    font-size: 12px;
    margin-top: 4px;
  }
  .tagstitlediv {
    @media (min-width: 960px) {
      line-height: 1.5rem;
    }
    color: #1e0a3c;
    font-size: 1.7rem;
    letter-spacing: 0.25px;
    margin-right: -0.25px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .tagsinputdiv {
    margin-bottom: 16px;
    padding-right: 8px;
    width: 83.3333333333%;
  }
  .usedbutton {
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
    letter-spacing: 0.2px;
    border: 2px solid #a9a8b3;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.3, 1);
    margin-top: 1rem;
    :hover {
      border-color: #39364f;
      transition-duration: 1s;
    }
    :active {
      background-color: #f3eeee;
    }
    @media (max-width: 660px) {
      width: 96%;
    }
  }
  .aside {
    color: #1e0a3c;
    @media (min-width: 960px) {
      font-size: 1.2rem;
      line-height: 1rem;
    }
    padding-top: 4px;
  }
  .styledinput {
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
      ::placeholder {
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
  }
  .inputdescription {
    font-size: 0.875rem;
    line-height: 1.25rem;
    padding-top: 0.5rem;
    color: #1e0a3c;
  }
  .organizerinfolink {
    text-decoration: none;
    color: #3659e3;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-top: 0rem;
  }
  .label {
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
  }
  .organizerlabel {
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
    &:focus {
      color: blue;
      transition-duration: 0.5s;
    }
  }
  .tagslabel {
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
    &:focused {
      color: blue;
      transition-duration: 0.5s;
    }
  }
  .tagsdisplayeddiv {
    width: 100%;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    max-width: 65.6rem;
  }
  .tagsdisplayed {
    box-sizing: border-box;
    margin-left: -8px;
    margin-right: -8px;
  }
  .singletag {
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
  }
  .singletagspan {
    font-weight: 600;
    text-rendering: optimizeLegibility;
    padding-right: 8px;
    padding: 0 16px;
    transition: color 0.24s cubic-bezier(0.4, 0, 0.3, 1);
    display: inline-flex;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    position: relative;
    color: #4b4d63;
    @media (min-width: 960px) {
      font-size: 0.75rem;
      line-height: 1rem;
    }
  }
  .closebuttondiv {
    padding-right: 8px;
    display: inline-flex;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    position: relative;
  }
  .closebutton {
    background: none;
    border: none;
    padding: 0;
    text-align: left;
    color: #39364f;
    fill: #39364f;
    -webkit-appearance: button;
    cursor: pointer;
  }
  .inputdata {
    width: 100%;
    height: 47px;
    margin-top: 1rem;
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
    &:focus {
      border: 0.1rem solid blue;
      transition-duration: 0.5s;
    }
    ::placeholder {
      color: #5a595d6f;
      font-size: 1.3rem;
      margin-top: 0.3rem;
    }
  }
  .inputdata2 {
    width: 100%;
    height: 47px;
    border: solid 1px #5a595d6f;
    margin-top: 1rem;
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
    &:focus {
      border: 0.1rem solid blue;
      transition-duration: 0.5s;
    }
    ::placeholder {
      color: #5a595d6f;
      font-size: 1.3rem;
      margin-top: 0.3rem;
    }
  }
  inputtagsdata {
    width: 100%;
    height: 47px;
    border: solid 1px #5a595d6f;
    margin-top: 1rem;
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
    &:focus {
      border: 0.1rem solid blue;
      transition-duration: 0.5s;
    }
    ::placeholder {
      color: #5a595d6f;
      font-size: 1.3rem;
      margin-top: 0.3rem;
    }
  }
  .continuebutton {
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
  }
  .dropdownspan {
    color: #39364f;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    line-height: 22px;
    padding: 12px 12px 0px 14px;
  }
  .dropdowntitlespan {
    color: #39364f;
    -webkit-box-flex: 1;
    flex-grow: 1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .dropdownarrowspan {
    fill: #4b4d63;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    height: 24px;
  }
  .dropdownselect {
    line-height: 22px;
    padding: 12px 14px;
    color: #39364f;
    white-space: nowrap;
    //transition: padding .16s cubic-bezier(.4,0,.3,1),color .4s cubic-bezier(.4,0,.3,1);
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    background-color: white;
    border: none;
    -webkit-appearance: menulist-button;
    overflow: visible;
    @media (min-width: 660px) {
      font-size: 14px;
      min-height: 22px;
    }
  }
  .selecttime {
    margin-top: 0px;
    padding: 18px 12px 6px;
    color: #39364f;
    white-space: nowrap;
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    background-color: white;
    border: none;
    webkit-appearance: menulist-button;
    webkit-box-flex: 1;
    minwidth: 0;
    appearance: none;
    paddingleft: 15px;
  }
  .selecttime::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    border-top: 6px solid #666;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
  }
  .dropdownselect:focus {
    border-color: red !important;
  }
  .dropdownoption {
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }
  .errormessage {
    display: flex;
    color: red;
    font-size: 1.2rem;
    padding-top: 4px;
  }
  .fixeddiv {
    @media (max-width: 660px) {
      display: none;
    }
    position: fixed;
    transform: translateY(0);
    background-color: #fff;
    border-top: 1px solid #eeedf2;
    bottom: 0;
    left: 0;
    min-height: 64px;
    overflow: hidden;
    transition: transform 0.32s cubic-bezier(0.4, 0, 0.3, 1),
      -webkit-transform 0.32s cubic-bezier(0.4, 0, 0.3, 1);
    width: 100%;
    will-change: transform;
  }
  .fixedinnerdiv {
    @media (min-width: 792px) {
      margin-left: 30%;
    }
    max-width: 960px;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-right: auto;
  }
  .fixedbuttondiv {
    text-align: right;
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    @media (min-width: 1152px) {
      padding: 0 48px;
    }
  }
  .locationbuttonsdiv {
    overflow: visible;
    @media (min-width: 960px) {
      width: 66.6666666667%;
    }
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    box-sizing: border-box;
    display: block;
    vertical-align: top;
  }
  .buttonsdiv {
    -webkit-box-flex: 1;
    flex-grow: 1;
    display: flex;
    margin-right: 16px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    letter-spacing: 0.03rem;
    @media (min-width: 960px) {
      max-width: 15.4rem;
    }
  }
  .buttonslabels {
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
    :active {
      background-color: rgba(54, 89, 227, 0.1);
      border: 1px solid #3659e3;
      color: #3659e3;
    }
  }
  .searchvenuediv1 {
    border-radius: 2px;
    background: #dbdae3;
    padding: 1px;
    position: relative;
    transition: background 0.24s cubic-bezier(0.4, 0, 0.3, 1);
  }
  .searchvenuediv {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    position: relative;
    background: #fff;
    border-radius: 1px;
    border: 1px solid #fff;
  }
  .searchcalendarspan {
    margin-left: 12px;
    color: #a9a8b3;
    font-size: 14px;
    height: 24px;
    margin: auto 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .displayendtime {
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .checklabel {
    :hover {
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
    transition: border-color 0.16s ease-in;
    -webkit-box-flex: 0;
    flex: none;
    display: inline-block;
    cursor: pointer;
    color: #39364f;
  }
  .checkbox {
    box-sizing: border-box;
    padding: 0;
    visibility: visible;
    position: absolute;
    :checked {
      border-color: #3d64ff;
    }
    :hover {
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
    transition: border-color 0.16s ease-in;
    -webkit-box-flex: 0;
    flex: none;
    display: inline-block;
    cursor: pointer;
    color: #39364f;
  }
  .checktextlabel {
    margin-left: 16px;
    margin-right: 12px;
    cursor: pointer;
    color: #39364f;
  }
  .textp {
    @media (min-width: 960px) {
      font-size: 1.2rem;
      line-height: 1rem;
    }
    color: #4b4d63;
  }
  .timedropdowndiv {
    width: 100%;
    @media (min-width: 660px) {
      width: 50%;
      max-width: 32rem;
    }
    @media (max-width: 480px) {
      display: block;
    }
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
  }
  .placeholder2 {
    padding: 2px 12px 0;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    width: 100%;
    box-sizing: border-box;
  }
  .placeholder3 {
    padding: 2px 12px 0;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    z-index: 2;
    top: -10;
    left: -5;
    height: 70px;
  }
  .spantext2 {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    font-weight: 400;
    :active {
      color: #3659e3;
    }
  }
  .dateandtimeboxes {
    overflow: visible;
    padding-right: 8px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    box-sizing: border-box;
    vertical-align: top;
    width: 100%;
    position: relative;
    svg {
      position: absolute;
      left: 3px;
      z-index: 2;
      top: 1rem;
    }
    input {
      padding-left: 3rem;
      padding-bottom: 1.5rem;
    }
    @media (min-width: 480px) {
      width: 50%;
      max-width: 32rem;
      display: inline-block;
    }
  }
  .calendarboxes {
    overflow: visible;
    padding-right: 8px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    box-sizing: border-box;
    vertical-align: top;
    width: 100%;
    border-radius: 2px;
    background: #dbdae3;
    padding: 1px;
    position: relative;
    transition: background 0.24s cubic-bezier(0.4, 0, 0.3, 1);
    @media (min-width: 480px) {
      width: 50%;
      max-width: 32rem;
      display: inline-block;
    }
  }
  .boxesborders {
    border-radius: 2px;
    background: #dbdae3;
    padding: 1px;
    position: relative;
    transition: background 0.24s cubic-bezier(0.4, 0, 0.3, 1);
  }
  .divflex {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    position: relative;
    background: #fff;
    border-radius: 1px;
    border: 1px solid #fff;
  }
  .divflex2 {
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    position: relative;
    -webkit-box-flex: 1;
    flex: 1;
    min-width: 0;
    height: 4.6rem;
  }
  .dateandtimecalendarspan {
    margin-top: -8px;
    font-size: 12px;
  }
  .calendarinput {
    padding: 18px 12px 6px;
    background: none;
    border: none;
    color: #39364f;
    white-space: nowrap;
    outline: none;
    -webkit-box-flex: 1;
    flex: 1;
    min-width: 0;
    @media (min-width: 660px) {
      font-size: 14px;
      line-height: 22px;
      min-height: 22px;
    }
  }
  .noborder {
    &:focus {
      outline: none;
    }
  }
  .starspan {
    @media (min-width: 960px) {
      font-size: 0.75rem;
      line-height: 1rem;
    }
    text-rendering: optimizeLegibility;
    color: #c5162e;
    padding-left: 2px;
    white-space: nowrap;
  }
  .custom-datepicker {
    height: 4.6rem;
    overflow: hidden;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    box-sizing: border-box;
    vertical-align: top;
    color: black;
    border-radius: 2px;
    padding: 1px;
    padding-left: 10px;
    padding-top: 16px;
    position: relative;
    border: 1px solid #dbdae3;
    width: 100%;
  }
  .custom-datepicker:focus {
    border-color: blue;
  }
  .datepicker-label {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10px, 50%);
    background: none;
    margin-top: -10px;
    z-index: 3;
    font-size: 13px;
    color: #6f7287;
  }
  .custom-calendar {
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    width: 33.9rem;
    height: 31rem;
    z-index: 0;
    margin-left: 20px;
    overflow: hidden;
  }
  .react-datepicker__day--selected {
    border: 1px solid blue;
    color: black;
    border-radius: 50%;
    background-color: white;
  }
  .react-datepicker__month-container {
    width: 310px; /* set the width of the calendar container */
  }
  .react-datepicker__day-name {
    font-size: 14px; /* set the font size of the day names */
    height: 25px; /* set the height of each day cell */
    width: 25px;
    line-height: 25px; /* set the line height to vertically center the day numbers */
    text-align: center; /* center the day numbers horizontally */
    border-radius: 50%;
    margin-left: 10px;
  }
  .react-datepicker__header {
    background-color: #fff; /* set the background color of the header */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 10px;
  }
  .react-datepicker__current-month {
    color: #4b4d63;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 10px;
  }
  .react-datepicker__month {
    font-size: 1.4rem;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
    width: 339px; /* set the width of the calendar to 339px */
    margin: 0 auto; /* center the calendar horizontally */
  }
  .react-datepicker__week {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .react-datepicker__day {
    margin-left: 25px;
    height: 25px; /* set the height of each day cell */
    width: 25px;
    font-size: 14px; /* set the font size of the day numbers */
    line-height: 25px; /* set the line height to vertically center the day numbers */
    text-align: center; /* center the day numbers horizontally */
    border-radius: 50%; /* make the day cells circular */
    cursor: pointer; /* change the cursor to a pointer when hovering over a day cell */
  }
  .react-datepicker__navigation {
    background-color: #efefef;
    margin-top: 15px;
    margin-right: 25px;
    margin-left: 25px;
  }
  .react-datepicker__navigation--previous {
    border-right-color: black !important; /* color of the left arrow */
  }

  .react-datepicker__navigation--next {
    border-left-color: black !important; /* color of the right arrow */
  }
  .past-date {
    color: #ccc;
  }
  .date-select-wrapper label {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
    padding: 0 4px;
    margin-top: -20px;
  }
  .dropdownprofile {
    position: absolute;
    top: 4.5rem;
    right: 1.5rem;
    width: 120px;
    padding: 15px;
    border-radius: 8px;
    background-color: white;
    border: 1px solid gray;
  }
  .dropdownprofile::before {
    content: '';
    position: absolute;
    top: -0.7rem;
    right: 1.1rem;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
    background-color: white;
    border-left: 1px solid gray;
    border-top: 1px solid gray;
  }
  .dropdown {
    cursor: pointer;
    background-color: gray;
  }
  .fixeddiv1 {
    @media (min-width: 660px) {
      display: none;
    }
    position: fixed;
    transform: translateY(0);
    background-color: #fff;
    border-top: 1px solid #eeedf2;
    bottom: 0;
    left: 0;
    min-height: 64px;
    overflow: hidden;
    transition: transform 0.32s cubic-bezier(0.4, 0, 0.3, 1),
      -webkit-transform 0.32s cubic-bezier(0.4, 0, 0.3, 1);
    width: 100%;
    will-change: transform;
  }
  .fixedinnerdiv1 {
    @media (min-width: 792px) {
      margin-left: 30%;
    }
    max-width: 960px;
    padding-top: 16px;
    padding-bottom: 16px;
    margin-right: auto;
  }
  .fixedbuttondiv1 {
    text-align: right;
    width: 100%;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    @media (min-width: 1152px) {
      padding: 0 48px;
    }
  }
  .counterror {
    display: flex;
    webkit-box-pack: justify;
    justify-content: space-between;
  }
  .letterlimit {
    webkit-box-flex: 1;
    flex: 1 1 auto;
    text-align: right;
  }
  .categorybox {
    width: 100%;
    position: relative;
    height: 46px;
  }
  .legend {
    font-size: 18px;
    color: #39364f;
    font-weight: 600;
    margin-right: -0.25px;
  }
  .addressbox {
    margin-bottom: 8px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StyledPlaces = styled.div`
  div {
    position: relative;
  }
  svg {
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    width: 2rem;
    height: 2rem;
  }
  input {
    padding-left: 40px;
    padding-top: 0.5rem;
    border: 1px solid rgb(149, 147, 147);
    width: 100%;
    height: 47px;
    margin-top: 1rem;
    transition-duration: 0.5s;
    display: block;
    font-size: 1.3rem;
    border-radius: 0.2rem;
    outline: none;
  }
  ul {
    padding: 0;
    background-color: white;
    color: #000;
    box-shadow: rgba(40, 44, 53, 0.1) 0px 1px 17px 0px,
      rgba(40, 44, 53, 0.1) 0px 2px 4px 0px;

    li {
      height: 5rem;
      padding-left: 1rem;
      padding-top: 2rem;
      padding-bottom: 2rem;
      :hover {
        background-color: rgb(248, 247, 250);
      }
    }
  }
`;
