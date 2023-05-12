import styled from 'styled-components';
export const WholePage = styled.div`
  @media (max-width: 792px){
    padding: 0 16px;
  }
  
.wholepage{    
  flex-grow: 1;
  overflow-y: scroll;
    max-height: 100vh;
  margin-bottom: 48px;
  padding-top: 40px;
  padding-left: 10rem;
  padding-bottom: 40px;
  @media (max-width: 792px){
    max-width: 655px;
  }
  @media (max-width: 959px){
  margin-bottom: 120px;
  }
  @media (min-width: 790px) and (max-width: 960px){
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
  }
}
  .addmoresections{

  }
  .description{

  }
  .summary{

  }
  .eventmedia{

  }
  .iconsdiv{
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
  }
  .buttons{
    -webkit-box-align: center;
    align-items: center;
    background: rgb(255, 255, 255);
    border: 2px solid rgb(169, 168, 179);
    border-radius: 4px;
    color: rgb(30, 10, 60);
    display: flex;
    flex-direction: row;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    margin: 0px 6px;
    padding: 12px 32px;
    -webkit-appearance: button;
    cursor: pointer;
    overflow: visible;
  }
  .buttonspan{
    margin-left: 4px;
    color: rgb(30, 10, 60); 
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
    cursor: pointer;
  }
  .smallI{
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;
    background-size: contain;
    line-height: 0;
    width: 16px;
    height: 16px;
    box-sizing: initial;
  }
  .smallSvg{
    width: 16px;
    height: 16px;
    overflow: hidden;
  }
  .mediumI{
    display: block;
    margin: 0 auto;
    vertical-align: middle;
    background-size: contain;
    line-height: 0;
    width: 24px;
    height: 24px;
    box-sizing: initial;
  }
  .mediumSvg{
    overflow: hidden;
    width: 2.4rem;
    height: 2.4rem;
  }
  .largeI{
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;
    background-size: contain;
    line-height: 0;
    width: 4.8rem;
    height: 4.8rem;
    box-sizing: initial;
  }
  .largeSvg{
    overflow: hidden;
    width: 4.8rem;
    height: 4.8rem;
  }
  .emptysmallbox{
    padding-top: 8px;
    position: relative;
    height: 28px;
    @media (min-width: 480px){
        display: block;
        margin: 0 8px;
    }
  }
  .descriptionp{
    font-weight: 400;
    text-rendering: optimizeLegibility;
    margin-bottom: 16px;
    @media (min-width: 960px){
      font-size: .875rem;
      line-height: 1.25rem;
    }
  }
  .trashcan{
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    @media (min-width: 660px){
        position: absolute;
        left: 100%;
        height: 100%;
    }
  }
  .informationdiv{
    .subtitle{
      color: #1e0a3c;
      letter-spacing: .25px;
      margin-right: -0.25px;
      font-weight: 600;
      margin-top: 16px;
      @media (min-width: 960px){
        font-size: 1.8rem;
        line-height: 1.5rem;
      }
    };
    .title{
      @media (min-width: 960px){
      font-size: 3rem;
      line-height: 2.5rem;
      letter-spacing: .5px;
      margin-right: -0.5px;
      font-weight: 700;
      color: #1e0a3c;
      }
    };
    
    .explainsection{
      color: #1e0a3c;
      font-weight: 400;
      margin-top: 8px;
      line-height: 2rem;
      @media (min-width: 960px){
        font-size: 1.4rem;
      }
    };
    .picturebuttons{
      color: #4b4d63;
      font-weight: 400;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-direction: row;
      -webkit-box-pack: center;
      justify-content: center;
      margin-top: 16px;
      position: relative;
      z-index: 100;
      @media (min-width: 960px){
          font-size: .875rem;
          line-height: 1.25rem;
      }
      .buttonsflex{
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        -webkit-box-pack: center;
        justify-content: center;
        margin-top: 16px;
        position: relative;
        z-index: 100;
      }
    }
    .ulstyle{ 
      margin-top: 7px;
      margin-bottom: 7px;
      margin-right: auto;
      margin-left: auto;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      -webkit-box-pack: start;
      justify-content: flex-start;
      list-style: none;
      flex-wrap: nowrap;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      padding: 0;
    }
    .links{
      text-decoration: none;
      color: #3659e3;
      background-color: transparent;
      cursor: pointer;
      :hover{
        text-decoration: underline;
      }
      :active{
        color: #2e4ab7;
      }
    }
    .listyle{
      margin-right: 15px;
      ::before{
        content: "•";
        font-size: 14px;
        margin-right: 8px;
      }
    }
    .summarybox{
      border-radius: 2px;
      background: #dbdae3;
      padding: 1px;
      position: relative;
      transition: background .24s cubic-bezier(.4,0,.3,1);
    }
    .summaryboxflex{
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      position: relative;
      background: #fff;
      border-radius: 1px;
      border: 1px solid #fff;
    }
    .summaryboxflex2{
      background: #fff;
      border-radius: 1px;
      border: 1px solid #fff;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      position: relative;
      -webkit-box-flex: 1;
      flex: 1;
      min-width: 0;
      ::before{
        background: #fff;
        content: "";
        height: 22px;
        position: absolute;
        left: 0;
        right: 0;
        -webkit-box-direction: normal;
      }
    }
    .summaryplaceholder{
      padding: 2px 12px 0;
      overflow: hidden;
      pointer-events: none;
      position: absolute;
      width: 100%;
      box-sizing: border-box;
    }
    .summarylabel{
      color: #6f7287;
      font-size: 12px;
      line-height: 22px;
      display: flex;
      position: relative;
      transition: all .16s cubic-bezier(.4,0,.3,1);
      white-space: nowrap;
      overflow: hidden;
    }
    .summaryspan{
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
    .starspan{
      @media (min-width: 960px){
          font-size: .75rem;
          line-height: 1rem;
      }
      text-rendering: optimizeLegibility;
      color: #c5162e;
      padding-left: 2px;
      white-space: nowrap;
    }
    .textarea{
      border: 1px solid #5a595d6f;
      border-radius: 2px;
      background: #dbdae3;
      padding: 1px;
      position: relative;
      transition: background .24s cubic-bezier(.4,0,.3,1);
      padding: 18px 12px 6px;
      resize: none;
      white-space: pre-wrap;
      background: none;
      color: #39364f;
      outline: none;
      transition: padding .16s cubic-bezier(.4,0,.3,1),color .4s cubic-bezier(.4,0,.3,1);
      -webkit-box-flex: 1;
      flex: 1;
      min-width: 0;
      overflow: auto;
      @media (min-width: 660px){
          font-size: 14px;
          line-height: 22px;
          min-height: 22px;
      }
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

    }
    .blue-border:focus {
      border-color: blue;
    }
    .descripriontextarea{
      outline: none;
      whitespace: pre-wrap;
      overflow-wrap: break-word;
      webkit-user-modify: read-write-plaintext-only;
      padding: 16px 28px;
      min-height: 161px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      display: block;
      width:100%;
      height: 100%;
      box-sixing: border-box;
      background-color: #fff;
      border-radius: 2px;
      border:0;
      overflow:visible;
      webkit-appearance: none;
    }
    .red-border {
      border-color: red;
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
    .undersummarybox{
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
    }
    .errormessagediv{
      -webkit-box-flex: 1;
      flex: 1 1 auto;
    }
    .errormessage{
      display: flex;
      color: red;
      font-size: 1.2rem;
      padding-top: 4px;
    }
    .characterslimitdiv{
      text-align: right;
      -webkit-box-flex: 1;
      flex: 1 1 auto;
    }
    .buttondiv1{
      width: 100%;
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      box-sizing: border-box;
      display: inline-block;
      overflow: hidden;
      vertical-align: top;
      margin-bottom: 12px;
    }
    .buttondiv2{
      margin-left: 8px;
      margin-right: 8px;
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      margin: auto;
    }
    .horizontalbuttons{
      transform: none;
      position: static;
      color: #39364f;
      fill: #39364f;
      background: #fff;
      border-color: #a9a8b3;
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
      -webkit-appearance: button;
      overflow: visible;
      text-transform: none;
      ::before{
        z-index: -190;
        content: "";
        position: absolute;
        left: -2px;
        right: -2px;
        top: -2px;
        bottom: -2px;
        transition: all .4s cubic-bezier(.4,0,.3,1);
        border-radius: 4px;
        background: #fff;
        opacity: 0;
        color: #39364f;
        fill: #39364f;
        text-align: center;
        line-height: 24px;
        font-weight: 600;
        letter-spacing: .2px;
      }
      ::after{
        content: "";
        position: absolute;
        z-index: -200;
        left: -2px;
        right: -2px;
        top: -2px;
        bottom: -2px;
        transition: all .4s cubic-bezier(.4,0,.3,1);
        border-radius: 4px;
        background: #fff;
        color: #39364f;
        fill: #39364f;
        cursor: pointer;
      }
    }
    .descriptionheader{
      background-color: #fff;
      height: 46px;
      border-radius: 2px 2px 0 0;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      border: solid #dbdae3;
      border-width: 1px 1px 0;
    }
    .descriptionbox{
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      @media (min-width: 1080px){
        font-size: 14px;
      }
      width: 100%;
      position: relative;
      display: block;
      background-color: #dbdae3;
      border-radius: 2px;
      box-sizing: border-box;
      padding: 1px;
      outline: none;
      color: #39364f;
      :hover{
        border: 1px solid rgb(149, 147, 147);
        transition-duration: 1s;
      }
      &:focus{
        border: 1px solid blue;
        transition-duration: 0.5s;
      }
      :active{
        border: 1px solid blue;
      }
    }
    .leftheader{
      display: inline-flex;
      position: relative;
      @media (min-width: 480px){
        margin-left: 16px;
      }
    }
    .rightheader{
      display: inline-flex;
      @media (min-width: 480px){
        margin-right: 16px;
      }
    }
    .smallbuttons{
      height: 35px;
      width: 35px;
      padding: 0;
      border-radius: 40px;
      transition: all .4s cubic-bezier(.4,0,.3,1);
      color: #4b4d63;
      fill: #4b4d63;
      background: none;
      border: none;
      text-align: left;
      -webkit-appearance: button;
      cursor: pointer;
      text-transform: none;
      overflow: visible;
    }
    .aside{
      @media (min-width: 960px){
        font-size: 1.2rem;
        line-height: 1rem;
      }
      padding-top: 4px;
    }
    overflow: visible;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    @media (min-width: 1152px){
      width: 66.6666666667%;
    }
    @media (min-width: 960px){
      margin-left: 0;
    }
  }
  .imagediv{
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    aspect-ratio: 2 / 1;
    background-color: rgb(248, 247, 250);
    border-radius: 8px;
    position: relative;
    padding: 56px 20px;
    background-color: #f8f7fa;
    border: 1px solid #eeedf2;
    overflow: hidden;
    text-align: center;
    transition: box-shadow .32s linear,-webkit-box-shadow .32s linear;
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
    width: 100%;
    text-align: right;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    vertical-align: top;
    @media (min-width: 1152px) {
      padding: 0 48px;
    }
  }
  .usedbutton{
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
    @media (max-width: 660px) {
      width:100%;
    }
  }
`;
