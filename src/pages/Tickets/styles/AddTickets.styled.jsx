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
    display:flex;

    .AddTicketsMenuDiv {
        position: absolute;
        width: 40rem;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        z-index: 1;
        background: Thistle;
        height: 60rem;
        // overflow-y: scroll;
    }

    .AddTicketsMenuHeaderDiv{

        display:flex;
        height:5.2rem;
        padding:1.6rem 0.8rem 1.2rem 2.4rem;
        justify-content: space-between;
        background:RosyBrown;
    }

    .AddTicketsTitleDiv{
        
        font-size: 1.8rem;
        line-height: 2.4rem;
        font-weight: 600;
        color: #1e0a3c;
    }

    .LearnMoreDiv{
        
        color: #3659e3;
        font-size: 1.4rem;
        line-height: 2rem;
        font-weight: 400;
        padding-right:2.4rem;
    }

    .CreateTicketInfoDiv{
        height: 100%;
        overflow-y: scroll;
        padding:2.4rem;
        display:flex;
        flex-flow : column wrap;


    }

    .TicketTypeSelectorDiv{
        
        width:33.5rem;
        height:4.6rem;
        margin-bottom:2rem;
        display:flex;
        justify-content: space-between;
        background:Plum;

    }

    .PaidTierButton, .FreeTierButton, .DonationTierButton{
        
        color: #1e0a3c;
        padding: 1.2rem 3.2rem 1.2rem 3.2rem;
        font-size: 1.35rem;
        line-height: 2rem;
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid ;
        cursor: pointer;
        text-align: center;
        font-weight: 500;
    }

    .TicketNameDiv{
        display: flex;
        flex-direction: column;
        width:33.5rem;
        height:7rem;
        margin-bottom:1.6rem;
        background:Pink;
    }

    .NameTextboxDiv, .AvailableQuantityTextboxDiv{

        display: flex;
        justify-content: flex-start;
        width:33.5rem;
        height:4.6rem;
        flex-direction: column;
        border: 0.1rem solid;
    }

    .NameLabelDiv,.AvailableQuantityLabelDiv,.PriceLabelDiv{
        
        display:flex;
        flex-direction: row;
       
        color: #6f7287;
        font-size: 1.3rem;
        line-height: 2.2rem;
        padding: 0.2rem 1.2rem 0;
        width:100%;
        height:2.4rem;
    }

    .asterisk{
        
        margin-left:0.2rem;
        color: red;
    }

    .TicketNameInputDiv{

        
        width: 33.1rem;
        font-size: 1.4rem;
        line-height: 2.2rem;
        font-weight: 400;
        border: none;
        padding: 1.8rem 1.2rem 0.6rem;
        background:transparent;
        margin-top:-2.5rem;

    }

    .TicketNameLength{
        font-size: 1.2rem;
        line-height: 1.6rem;
        align-self: flex-end;
        

    }

    .AvailableQuantityDiv{
        
        width:33.5rem;
        height:7rem;
        margin-bottom:1.6rem;
        background:MediumPurple;
    }

    .AvailabilityInput{
    border:  none;
    background-color: transparent;
    margin-top:-0.5rem;
    }

    
    .AvailabilityError {
    font-size: 12px;
    color: red;
    margin-top:1rem;
    }
    
    .error-border {
    border: 1px solid red;
    }
    
    .error-color {
    color: red;
    }


    .TicketPriceDiv{

        display:flex;
        flex-direction: row;
        
        align-items: center;
        align-content: center;
        width:33.5rem;
        height:5rem;
        margin-bottom:1.6rem;
        background:Lavender;
        border: 0.1rem solid;
        

    }   
    
    .DollarSignDiv{

        width:0.847rem;
        height:2.4rem;
        margin-left:1.2rem;
        font-size: 1.4rem;
        color: #a9a8b3;

    }

    .PriceTextboxDiv{

        display:flex;
        
        position: relative;
        width:31.053rem;
        // flex-grow: 1;
        height:4.6rem;
        background:white;
        flex-flow : column wrap;
    }

    .PriceAmountInput{

       height:2.4rem;
       width:31.053rem;
       margin-top:1.6rem;
       margin-left:-4.75rem;
       padding-left:1rem;
       border:none;
    }

    .DatesGroupDiv{
        display:flex;
        flex-wrap : wrap;
        width:33.5rem;
        height:16.259rem;
        background:Violet ;
        justify-content: space-between;
    }

    .DateBoxDiv{
        width:15.95rem;
        height:5rem;
        display:flex;
        flex-direction : row;
        background:Fuchsia ;
       
    }

    .CalanderIconSpan{

        margin-left:1.2rem;
        margin-top:1.3rem;
    }
    

`