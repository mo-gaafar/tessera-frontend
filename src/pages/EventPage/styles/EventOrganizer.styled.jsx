import styled from 'styled-components';


export const AboutTheOrganizer = styled.section`

width: 72rem;
height: 40.25rem;
background-color: blue;


margin-left: 7.4rem;

h2{
    font-size:2.4rem;
}

.aboutOrganizerContainer{
    background-color: red;
    margin: 3.2rem 0rem;
    padding: 4rem;
    height:34.425rem;
    border: 0.1rem solid black;
    
}


.organizedBySection{

    width:64rem;
    height: 4.925rem;
    margin-bottom:2.4rem;
    background-color:yellow;
    text-align: center;


}

.organizedBy{

    font-size: 1.4rem;
    height:1.875rem
    color: #6f7287;
    margin-bottom:0.8rem;
    line-height: 2rem;
}

.organizerLink{

    color: #1e0a3c;
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.4rem;

}

.followersSection{
    height:4.5rem;
    margin: 2.4rem 0rem;
    width:64rem;
    background-color:orange;
    text-align: center;
    
}

.followersdiv{
    width:13rem;
    height:4.5rem;
    padding:0 rem 1.6rem;
    display: inline-block;

}

.followersAmount{
    font-weight: 700;
    color: #1e0a3c;
    display: block;
    font-size: 2rem;
    line-height: 2.8rem;
}

.followersText{
    font-size: 1.4rem;
    color: #6f7287;
    display: block;
    
}

.infoSection{
    width:64rem;
    height:4.4rem;
    margin-bottom:3.2rem;
    background-color:pink;
    text-align: center;
    
    
}

.contactButton{
    // position: absolute;
    width:11.752rem;
    height:4.4rem;
    margin-right:2rem;
}

.followButton{
    width:10.953rem;
    height:4.4rem;
}

.socialsSection{
    width:64rem;
    height:4.6rem;
    margin: 3.2rem 0rem 0rem;
    background-color:lightgreen;
    text-align: center;    

}

.organizerFacebookSpan, .organizerTwitterSpan{
    width:4.6rem;
    height:4.6rem;
    background-color:green;
      
}

.organizerFacebookSpan{
    margin-right: 3rem;
}

.organizerFacebook, .organizerTwitter{
    width:4.6rem;
    height:4.6rem;
    padding:1.1rem;
    background-color:green;
}

.facebookSvg, .twitterSvg{
    width:2.4rem;
    height:2.4rem;
}


@media only screen and (max-width: 960px){
    width: 59.2rem;
    margin-left:17.5rem;


    
    .aboutOrganizerContainer{
        width: 59.2rem;
        
    }
    
    
    .organizedBySection,.organizedBy,.organizerLink,.followersSection,.infoSection,.socialsSection{
    
        width: 51.2rem;
    
    
    }
}
@media only screen and (max-width: 679px){
    width: 43.5rem;

    margin-left:6.5rem;


    
    .aboutOrganizerContainer{
        width: 43.5rem;
        
    }
    
    
    .organizedBySection,.organizedBy,.organizerLink,.followersSection,.infoSection,.socialsSection{
    
        width: 37.1rem;
    
    
    }

}
@media only screen and (max-width: 520px){
    width: 43.5rem;

    margin-left:2.5rem;


    
    .aboutOrganizerContainer{
        width: 43.5rem;
        
    }
    
    
    .organizedBySection,.organizedBy,.organizerLink,.followersSection,.infoSection,.socialsSection{
    
        width: 37.1rem;
    
    
    }

}


`

export const MoreEventsOrganizer = styled.section`

width: 72rem;
height: 68.175rem;
padding: 4rem 0rem 0rem;
background-color: blue;
margin: 3.2rem 0rem;
margin-left: 7.4rem;
font-weight: 600;


h2{
    font-size:2.4rem;
    margin: 0rem 0rem 1.6rem;
}

.eventoxDiv{
    width:72rem;
    height:20.275rem;
    background-color: red;  
  
}

.eventContainer{

    width:72rem;
    height:20.275rem;
    // padding:0rem 1.6rem 0rem 0rem;
    padding:1.6rem;
    background-color: lightblue;   
    display: flex;

}

.eventTextInfo{
    width:46.8rem;
    height:17.075rem;
    padding:0rem 1.6rem 0rem 0rem;
    background-color: red;   
}


.image{
    width:22rem;
    height:11rem;
}

.eventName{

    width:45.225rem;
    height:4.5rem;
    color: #39364f;
    font-size: 1.8rem;
    line-height: 2.4rem;
}

.eventDateTime{
    width:45.2rem;
    height:3.075rem;
    padding-top:0.8rem;
    padding-bottom:0.4rem;
    color: #d1410c;
    font-size: 1.4rem;
    line-height: 2rem;
    
}

.subcontentDiv{
    width:45.2rem;
    height:9.1rem;
}

.eventLocation{
    width:45.2rem;
    height:1.875rem;
    font-size:1.3125rem
    color: #6f7287;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 400;
}


.eventPrice{
    width:45.2rem;
    height:1.875rem;
    font-size:1.3125rem
    margin-top:0.4rem;
    font-size:1.3125rem
    color: #6f7287;
    line-height: 2rem;
    font-weight: 400;
}

.eventOrganizer{
    width:44.8rem;
    height:4.55rem;
    padding-top:0.4rem;
    font-size: 1.4rem;
    line-height: 2rem;
    display:flex;
    flex-direction: column;

    
}

.organizerName{
    width:44.8rem;
    height:2.275;
    padding-top:0.4rem;
    // flex-basis: 100%
}

.followersDiv{
    display:flex;
}

.followersSvg{
    width:1.6rem;
    height:1.6rem;
    margin-right:1rem;
}



.eventImageButtons{
    width:22rem;
    height:17.075;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    
}

.imageCard{
    border: 0.05rem solid lightgray;
    margin-bottom:1rem;
}

.buttonsDiv{
    width:9.4rem;
    height:5.2rem;
    padding;0.8rem 0rem 0rem;

}

.shareSpan, .likeSpan{
    width:4rem;
    height:4rem;
    
    
    
}

.shareSpan{
    padding:0rem 0.6rem 0rem 0rem;
}

.likeSpan{
    padding:0rem 0rem 0rem 0.4rem;
}

.shareButton, .likeButton{
    width:4rem;
    height:4rem;
    padding:0.8rem;
    border-radius: 50%;
    border:none;
    
}

.likeButton{
    border: 0.05rem solid lightgray;

}

.shareSvg, .likeSvg{

    width:2.4rem;
    height:2.4rem;
    fill: #1e0a3c;
    
    
    
}

@media only screen and (max-width: 960px){
   margin-left:17.5rem;
   width:59.2rem;
   height:85.75rem;


   .eventoxDiv{
    width:59.2rem;
    height:23.525rem;

}

.eventContainer{

    width:59.2rem;
    height:23.525rem;

}

.eventTextInfo{
    width:32.425rem;
    height:23.525rem;
}


.image{
    width:22rem;
    height:11rem;
}

.eventName{

    width:32.425rem;
    height:7.875rem;
    font-size: 2rem;
    line-height: 2.8rem;
    letter-spacing: 0.025rem;

}

.eventDateTime{
    width:32.4rem;
    height:3.45rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    
}

.subcontentDiv{
    width:32.4rem;
    height:10.6rem;

}

.eventLocation{
    width:32.4rem;
    height:2.22rem;

}


.eventPrice{
    width:32.4rem;
    height:2.22rem;
    margin-top:2rem;

}

.eventOrganizer{
    width:32rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
  
}

.organizerName{
    width:32rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
}


.buttonsDiv{
    width:9.4rem;
    height:5.2rem;
    padding;0.8rem 0rem 0rem;
    margin-top: auto;
    margin-left: auto;
}
}

@media only screen and (max-width: 679px){
    width:53.4rem;

    margin-left:6.5rem;

    
   .eventoxDiv{
    width:53.4rem;
    height:26.725rem;

}

.eventContainer{

    width:53.4rem;
    height:26.725rem;

}

.eventTextInfo{
    width:27.3rem;
    height:26.725rem;
}


.image{
    width:22rem;
    height:11rem;
}

.eventName{

    width:25.725rem;
    height:7.875rem;
    font-size: 2rem;
    line-height: 2.8rem;
    letter-spacing: 0.025rem;

}

.eventDateTime{
    width:32.4rem;
    height:3.45rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    
}

.subcontentDiv{
    width:32.4rem;
    height:10.6rem;

}

.eventLocation{
    width:32.4rem;
    height:2.22rem;

}


.eventPrice{
    width:32.4rem;
    height:2.22rem;
    margin-top:2rem;

}

.eventOrganizer{
    width:32rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
  
}

.organizerName{
    width:32rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 600;
}


.buttonsDiv{
    width:9.4rem;
    height:5.2rem;
    padding;0.8rem 0rem 0rem;
    margin-top: auto;
    margin-left: auto;
}
}




`
export const OtherEventsYouMayLike = styled.section`

width:100%;
height:54.8rem;
background-color:red;


h2{
    font-size:2.4rem;
    

}

.otherEventsDiv{
    z-index: 1;
    position: relative;
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
    margin-top:5rem;
    // background-color:lightblue;

    max-width: 1080px;
    margin-left: auto;
    margin-right: auto;
    display: block;
}


.titleAndButtons{
    width:108rem;
    height:4rem;
    display:flex;
    margin-bottom:3.2rem;
    justify-content: space-between;
    align-items: center;
}

.title{
    width:98.4rem;
    height:3.8rem;
    margin: 0rem 0.8rem 0rem 0rem;
}

.buttonsDiv{
    width:8.8rem;
    height:4rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
    
}

.backButtonSpan,.backbutton, .forwardbutton{
    width:4rem;
    height:4rem;
}

.backbutton,.forwardbutton{
    padding:0.8rem;
    background-color: #dbdae3;
    color: var(--eds-ui-700,#4b4d63);
    fill: #4b4d63;
    border:none
    
}




.allEventsDiv, TransitionGroup, .CSSTransition{
    display: flex;
    width: 100%;
    min-height: 412px;

}


.event__box{
    background-color:lightblue;

    
    flex: 0 32%;
    position: relative;
    border-radius: 0.4rem;
    width: 100%;

    display: flex;
    // -webkit-box-flex: 1;
    // flex: 1;
    // flex-direction: column;
    overflow: visible;
   

}

.imageBlock{
    width:34.559rem;
    height:17.28rem;
    position: absolute;
    display: inline-block;

}

.cardTextInfo{
    width:34.559rem;
    height:19.635rem;
    padding:2.4rem 1.6rem;
}



h5{
    font-weight: 600;
    color: #39364f;
    font-size: 1.8rem;
    line-height: 2.4rem;
}

h6{

    margin-right: 3.2rem;
    color: #d1410c;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
    padding-top: 0.8rem;
    padding-bottom: 0.4rem;
}


span{
    font-weight: 600;
    display:flex;
}

.fade-enter {
    opacity: 0;
  }
  
  .fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in-out;
  }
  
  .fade-exit {
    opacity: 1;
  }
  
  .fade-exit-active {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .fade-transition {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

`



