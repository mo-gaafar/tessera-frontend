import styled from 'styled-components';


export const MainTicketsDiv = styled.div`

    display:flex;
    margin: 6rem 0 0 34.1rem;
    background-color:lightblue;
    height:58.4rem;


`
export const LetsCreateTicketsDiv = styled.div`

    display:flex;
    margin: 0 0 9.2rem;
    padding:6.4rem 0 0;
    height:42.6rem;
    width:100%;
    background:CadetBlue;
    justify-content: center;
    // position: relative;

    .CreateTicketsInfoDIv{
        
        display:flex;
        margin-top:6.4rem;
        // width:43.2rem;
        width:35.975rem;
        height:29.8rem;
        background:CornflowerBlue;
        flex-flow : column wrap;
        // flex-direction:column;
        // flex-wrap : wrap;

    }

    .CreateTicketsImgDiv{

        display:flex;
        height:11.2rem;
        background:Coral;
        justify-content: center;
    }

    .CircleSpan{

        display: flex;
        // margin-right:0.2rem;
        justify-content: center;
        align-items: center;
        width: 11.2rem;
        height: 11.2rem;
        border-radius: 50%;
        background:MintCream;
    }

    .CreateTicketsImg{
        
        margin-bottom:2.7rem;
        margin-right:2rem;
        width:11.2rem;
        height:11.2rem;
        transform: scale(0.8);
    }

    .LetsCreateTextDiv{

        text-align: center;
        margin:3.2rem -0.025rem 0 0;
        // width:36rem;
        height:3.2rem;
        background:Chocolate;
        color: #1e0a3c;
        font-size: 2.4rem;
        line-height: 3.2rem;
        letter-spacing: 0.025rem;
        font-weight: 700;
    }

    .CreateTicketsInfoDiv{

        text-align: center;
        height:4.8rem;
        margin: 0.4rem -0.025rem 0 0;
        background: Peru;
        color: #6f7287;
        font-size: 1.4rem;
        line-height: 2.4rem;
        // font-weight: 600;
    }

    .CreateTicketsButtonsDiv{

        display:flex;
        justify-content: space-around;
        align-items:flex-end;
        height:6.8rem;
        background:BurlyWood;
        font-size: 1.42rem;
        font-weight: 500;
        
        
    }

    .CreateSectionButton{

        width:16.997rem;
        height:4.4rem;
        color: #39364f;
        border: 0.2rem solid;
        border-color: #a9a8b3;
        border-radius: 0.4rem;
        background:white;
    }

    .AddTicketsButton{

        width:13.7rem;
        height:4.4rem;
        color: white;
        border: 0.2rem solid;
        border-color: #d1410c;
        border-radius: 0.4rem;
        background:#d1410c;
    }

`


export const AddTicketsSideMenu = styled.div`


    position: relative;

    .AddTicketsMenuDiv {
        position: absolute;
        width: 40rem;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        z-index: 1;
        background: Thistle;
        height: 100%; /* Add a fixed height to enable scrolling */
        overflow-y: scroll;
    }

`