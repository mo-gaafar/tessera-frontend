import styled from 'styled-components';
export const WholePage = styled.div`
  margin-bottom: 48px;
  padding-top: 40px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
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
  .mediumI{
    display: inline-block;
    margin: 0 auto;
    vertical-align: middle;
    background-size: contain;
    line-height: 0;
    width: 4.8rem;
    height: 4.8rem;
    box-sizing: initial;
  }
  .mediumSvg{
    overflow: hidden;
    width: 4.8rem;
    height: 4.8rem;
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
      @media (min-width: 960px){
        font-size: 1.4rem;
        line-height: 1.25rem;
      }
    };
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
`