import styled from 'styled-components';

export const PageContainer = styled.div`
  margin:2rem;
  p{
    font-size: 28px;
    line-height: 30px;
    margin-top: 2rem;
    letter-spacing: .5px;
    color: #1e0a3c;
    font-weight: 900;
    
@media (min-width: 959px) {
  font-size: 55px;}
  }

  .event-body{
    padding-top:5rem;
    .noEvents-center{
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      margin: auto;
      vertical-align: top;
      .status-description{
        padding-top:2rem;
        font-size: 1.75rem;
        line-height: 1.75rem;
        letter-spacing: .25px;
        font-weight: 500;
        color: #6f7287;
      }
    }
    .graphic-img-div{
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      align-items: center;
      margin: auto;
      width:110px;
      height:110px;
      border-radius:100%;
      background:#f5f5f5;
      img{
        width:80px;
      }
    }
  }

  .events-bar{
    margin-top:4rem;
    display:flex;
    justify-content:space-between;
    .bullet-button{
      border:none;
      background-color: #3d64ff;
      margin:0rem 2rem;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      @media (min-width: 959px) {
        width:100px;
        align-items:left;
        border-radius: 20px;
      }
      span{
        @media (max-width: 959px) {
          display:none}
      }
      img{
        background:transperent;
        height:25px;
      }

    }
    .first-part-eventbar{
      display:flex;
      justify-content:space-around;
    }

    .search-field{
      border:1px solid #dbdae3;
      height: 50px;
      min-width:200px;
      transition: 0.3s;
      margin-right:2rem;
      &:hover{
        border:1px solid #b9b8bd;
      }
      .search-button{
        border:none;
        background:none;
      }
      img{
      }
      input{
        border:none;
        height: 48px;
        &focus{
          border:none;
        }
      }
    }
    .create-button{
      background-color: #d1410c;
      color:white;
      font-size: 14px;
      border:none;
      width: 17rem;
      height: 5rem;
      transition: all .4s cubic-bezier(.4,0,.3,1);
      border-radius: 4px;
      line-height: 22px;
      font-weight: 400;
      @media screen and (max-width: 959px) {
        display:none;
      }
      &:hover{
        background-color: #f05537;
      }
    }
    .plus-button{
      border:none;
      background-color: #d1410c;
      box-shadow: 0 1px 20px 0 rgba(209,65,12,.5), 0 2px 5px 0 rgba(209,65,12,.5);
      border-radius: 100%;
      width: 55px;
      height: 55px;
      padding: 0;
      cursor: pointer;
      transition:0.15s;
      @media screen and (min-width: 959px) {
        display:none;
      }
      img{
        background:transperent;
        height:20px;
      }
      &:hover{
        background-color: #f05537;
      }
    }
    img{
      display: inline-block;
      margin: 0 auto;
      vertical-align: middle;
      background-size: contain;
      line-height: 0;
      background:transperent;
      height:1.2rem;
      color:white;
      
    }
    span{
      color: white;
      padding:0.7rem;
      font-size: 12px;
      
    }
    .all-events{
      background:#3d64ff;
      border-radius:20px;
      width:100%;
      height:40px;
      display:flex;
      position:relative;
      justify-content:center;
      align-items:center;
      cursor:pointer;
      margin-right:2rem;
      @media screen and (min-width: 959px) {
          width: 100%;
      }

      .dropdown-content {
        position: absolute;
        top:45px;
        left:0px;
        width:25rem;
        background-color: white;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        ul{
          display:block;
          margin: 8px 0;
          padding: 0;
          list-style-type: none;
        }
        .drop-button{
          width:100%;
          background: none;
          border: none;
          text-align: left;
          color: #39364f;
          font-size:1.4rem;
          text-decoration: none;
          padding:1.4rem;
          img{
            height:20px;
            margin-right:5px;
            
          }
          span{
            height:20px;
            margin-right:5px;
            
          }
          &:hover{
            cursor:pointer;
            background-color: #eeedf2;;
          }
          
        }
        
      }
      &:hover{
        border: 1px double white;
        outline: 2px solid #3d64ff;
      }
      
      img{
        padding-top:10px;
        width:15px;
        height:20px;
      }
    }
    .vertical-divider{
      width: 1px;
      height: 40px;
      margin-right:2rem;
      border-left: 1px solid #eeedf2;
    }
  }
  .cat-option{
    display:flex;
    margin-top:4rem;
    button{
      border:none;
      background:none;
      color: #6f7287;
      text-decoration: none;
      padding-top: 30px;
      padding-bottom: 12px;
      font-weight: 300;
      
      &:hover{
        color:black;
      }
      &:focus{
        color:#3d64ff;
        border-bottom: 2px solid #3d64ff;
      }
      
    }
  }

`