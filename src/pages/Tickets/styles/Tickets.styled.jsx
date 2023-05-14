import styled from 'styled-components';

export const MainTicketsDiv = styled.div`
  display: flex;
  input:focus {
    outline: none;
  }

  display: flex;
  /* margin: 6rem 0 0 34.1rem; */
  /* background-color: lightblue; */
  height: 100%;
  flex-grow: 1;
  /* width: 100%;    */
  flex-grow: 1;

  .NextDiv {
    /* width: 120.431rem; */
    /* width: 100%; */
    height: 7.6rem;
    display: flex;
    position: fixed;
    bottom: 0;
    /* top: 0; */
    right: 0;
    left: 0;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;
    // align-self: flex-end;
    z-index: -1;
    margin-top: 58rem;
    border-top: 0.1rem solid hsl(250, 7%, 80%);
  }

  .NextLink {
    margin-left: auto;
    margin-right: 3.2rem;
  }

  .NextButton {
    width: 9.522rem;
    height: 4.4rem;
    border-radius: 0.4rem;
    border: 0.2rem solid #d1410c;
    color: #fff;
    background-color: #d1410c;
    cursor: pointer;
  }

  .NextButton:hover {
    border-color: #f05537;
    background: #f05537;
  }
`;
export const LetsCreateTicketsDiv = styled.div`
  display: flex;
  margin: 0 0 9.2rem;
  flex-grow: 1;

  /* margin-left: 35rem; */
  padding: 6.4rem 0 0;
  height: 42.6rem;
  width: 100%;
  // background:CadetBlue;
  justify-content: center;
  // position: relative;

  .CreateTicketsInfoDIv {
    display: flex;
    margin-top: 6.4rem;
    // width:43.2rem;
    width: 35.975rem;
    height: 29.8rem;
    // background:CornflowerBlue;
    flex-flow: column wrap;
    // flex-direction:column;
    // flex-wrap : wrap;
  }

  .CreateTicketsImgDiv {
    display: flex;
    height: 11.2rem;
    // background:Coral;
    justify-content: center;
  }

  .CircleSpan {
    display: flex;
    // margin-right:0.2rem;
    justify-content: center;
    align-items: center;
    width: 11.2rem;
    height: 11.2rem;
    border-radius: 50%;
    // background:MintCream;
  }

  .CreateTicketsImg {
    margin-bottom: 2.7rem;
    margin-right: 2rem;
    width: 11.2rem;
    height: 11.2rem;
    transform: scale(0.8);
  }

  .LetsCreateTextDiv {
    text-align: center;
    margin: 3.2rem -0.025rem 0 0;
    // width:36rem;
    height: 3.2rem;
    // background:Chocolate;
    color: #1e0a3c;
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: 0.025rem;
    font-weight: 700;
  }

  .CreateTicketsInfoDiv {
    text-align: center;
    height: 4.8rem;
    margin: 0.4rem -0.025rem 0 0;
    // background: Peru;
    color: #6f7287;
    font-size: 1.4rem;
    line-height: 2.4rem;
    // font-weight: 600;
  }

  .CreateTicketsButtonsDiv {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 6.8rem;
    // background:BurlyWood;
    font-size: 1.42rem;
    font-weight: 500;
  }

  .CreateSectionButton {
    width: 16.997rem;
    height: 4.4rem;
    color: #39364f;
    border: 0.2rem solid;
    border-color: #a9a8b3;
    border-radius: 0.4rem;
    background: white;
  }

  .AddTicketsButton {
    width: 13.7rem;
    height: 4.4rem;
    color: white;
    border: 0.2rem solid;
    border-color: #d1410c;
    border-radius: 0.4rem;
    background: #d1410c;
  }
`;

export const AddTicketsSideMenu = styled.div`
  position: relative;
  display: flex;

  .AddTicketsMenuDiv {
    position: fixed;
    width: 40rem;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    z-index: 1;
    // background: Thistle;
    height: auto;
    // overflow-y: scroll;
    margin-top: 7.1rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  .AddTicketsMenuHeaderDiv {
    display: flex;
    height: 5.2rem;
    padding: 1.6rem 0.8rem 1.2rem 2.4rem;
    justify-content: space-between;
    border-bottom: 0.1rem solid hsl(250, 7%, 80%);
    // background:RosyBrown;
  }

  .AddTicketsTitleDiv {
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 600;
    color: #1e0a3c;
  }

  .LearnMoreDiv {
    color: #3659e3;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 400;
    padding-right: 2.4rem;
  }

  .CreateTicketInfoDiv {
    height: 100%;
    overflow-y: scroll;
    padding: 2.4rem;
    display: flex;
    flex-flow: column wrap;
  }

  .TicketTypeSelectorDiv {
    width: 33.5rem;
    height: 4.6rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-evenly;
    // background:Plum;
  }

  .PaidTierButton,
  .FreeTierButton,
  .DonationTierButton {
    color: #1e0a3c;
    padding: 1.2rem 3.2rem 1.2rem 3.2rem;
    font-size: 1.35rem;
    line-height: 2rem;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid hsl(250, 7%, 80%);
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    &.selected {
      background-color: rgba(54, 89, 227, 0.1);
      border: 1px solid #3659e3;
      color: #3659e3;
    }
  }

  .TicketNameDiv {
    display: flex;
    flex-direction: column;
    width: 33.5rem;
    height: 7rem;
    margin-bottom: 1.6rem;
    // background:Pink;
  }

  .TicketNameDiv.error,
  .NameLabelDiv.error {
    color: red;
  }

  .ErrorMessage {
    font-size: 12px;
    color: red;
    margin-top: -1rem;
  }

  .NameTextboxDiv,
  .AvailableQuantityTextboxDiv {
    display: flex;
    justify-content: flex-start;
    width: 33.5rem;
    height: 4.6rem;
    flex-direction: column;
    border: 0.1rem solid hsl(250, 7%, 80%);
    border-radius: 2px;
  }

  .NameTextboxDiv:hover,
  .AvailableQuantityTextboxDiv:hover,
  .TicketPriceDiv:hover,
  .DateBoxDiv:hover {
    border-color: #6f7287;
  }

  .NameLabelDiv,
  .AvailableQuantityLabelDiv,
  .PriceLabelDiv,
  .SalesStartLabel,
  .SalesEndLabel {
    display: flex;
    flex-direction: row;

    color: #6f7287;
    font-size: 1.3rem;
    line-height: 2.2rem;
    padding: 0.2rem 1.2rem 0;
    width: 100%;
    height: 2.4rem;
  }

  .asterisk {
    margin-left: 0.2rem;
    color: red;
  }

  .TicketNameInputDiv {
    width: 33.1rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
    border: none;
    padding: 1.8rem 1.2rem 0.6rem;
    background: transparent;
    margin-top: -3rem;
  }

  .TicketNameLength {
    font-size: 1.2rem;
    line-height: 1.6rem;
    align-self: flex-end;
  }

  .AvailableQuantityDiv {
    width: 33.5rem;
    height: 7rem;
    margin-bottom: 1.6rem;
    // background:MediumPurple;
  }

  .AvailabilityInput {
    border: none;
    background-color: transparent;
    margin-top: -0.5rem;
    margin-left: 1rem;
  }

  .AvailabilityError {
    font-size: 12px;
    color: red;
    margin-top: 1rem;
  }

  .error-border {
    border: 1px solid red;
  }

  .error-color {
    color: red;
  }

  .TicketPriceDiv {
    display: flex;
    flex-direction: row;

    align-items: center;
    align-content: center;
    width: 33.5rem;
    height: 5rem;
    margin-bottom: 1.6rem;
    // background:Lavender;
    border: 0.1rem solid hsl(250, 7%, 80%);
  }

  .DollarSignDiv {
    width: 0.847rem;
    height: 2.4rem;
    margin-left: 1.2rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: #a9a8b3;
  }

  .PriceTextboxDiv {
    display: flex;

    position: relative;
    width: 31.053rem;
    // flex-grow: 1;
    height: 4.6rem;
    background: white;
    flex-flow: column wrap;
  }

  .PriceAmountInput {
    height: 2.4rem;
    width: 31.053rem;
    margin-top: 1.6rem;
    margin-left: -4.75rem;
    padding-left: 1rem;
    border: none;
  }

  .DatesGroupDiv {
    display: flex;
    flex-wrap: wrap;
    width: 33.5rem;
    height: 16.259rem;
    // background:Violet ;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .DateBoxDiv {
    width: 15.95rem;
    height: 5rem;
    display: flex;
    flex-direction: row;
    border: 0.1rem solid hsl(250, 7%, 80%);
    // background:Fuchsia ;
    input,
    select {
      width: 100%;
      border: none;
      outline: none;
      // background: #f8f7fa;
    }
    .calendarBoxDiv {
      width: 100%;
    }
  }

  .CalendarIconSpan {
    margin-left: 1.2rem;
    margin-top: 1.3rem;
  }

  .CalendarSvg {
    width: 2.4rem;
    height: 2.4rem;
  }

  .EventZone {
    z-index: 1;
  }

  .ButtonsMenuDiv {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 40rem;
    height: 6.8rem;
    background: white;
    z-index: 1;
    margin-top: -13.8rem;
    margin-right: 1rem;
    border-top: 0.1rem solid hsl(250, 7%, 80%);
  }

  .CancelButton {
    width: 13.333rem;
    height: 4.4rem;
    margin-right: 2.4rem;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    color: #39364f;
    font-weight: 600;
    font-size: 1.35rem;
    border: 0.3rem solid;
    border-color: #a9a8b3;
    border-radius: 0.4rem;
    cursor: pointer;
    background: #ffffff;
  }

  .CancelButton:hover {
    border-color: #6f7287;
    background: #f8f7fa;
    color: #6f7287;
  }

  .SaveButton {
    width: 13.333rem;
    height: 4.4rem;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
    font-size: 1.35rem;
    border: 0.2rem solid #d1410c;
    border-radius: 0.4rem;
    background-color: #d1410c;
    color: #ffffff;
    cursor: pointer;
  }

  .SaveButton:hover {
    border-color: #f05537;
    background: #f05537;
  }
`;
export const TicketCreatedDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-flow: row wrap;
  height: 16.8rem;
  padding-inline: 25rem;

  // background-color:AntiqueWhite ;
  .AdmissionsDiv,
  .PromocodesDiv {
    flex-grow: 1;
    /* height: 100%; */
  }

  h1 {
    font-size: 3rem;
    line-height: 4rem;
    font-weight: 700;
    color: #1e0a3c;
    margin-bottom: 0.4rem;
    margin-left: 1.8rem;
    padding-top: 4rem;
    width: 100%;
    height: 8rem;
    // background:Linen ;
  }

  .TicketsTabsDiv {
    display: flex;
    // flex-flow : column wrap;
    width: 100%;
    height: 7.2rem;
    margin-top: 1.6rem;
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    // background: Beige ;
    border-bottom: 0.1rem solid hsl(250, 7%, 80%);
  }

  .TicketsTabsButton {
    width: auto;
    min-width: unset;
    border: none;
    padding: 1.2rem 0 1.2rem 0;
    // margin-left:-1rem;
    margin-right: 3rem;
    color: #6f7287;
    font-size: 1.8rem;
    font-weight: 500;
    background: transparent;
  }

  .TicketsTabsButton:hover {
    cursor: pointer;
  }

  .AddTicketsDiv {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 4.4rem;
    margin-bottom: 4.8rem;
  }

  .AddTicketsButton {
    width: 13.7rem;
    height: 4.4rem;
    color: white;
    border: 0.2rem solid;
    border-color: #d1410c;
    border-radius: 0.4rem;
    background: #d1410c;
  }

  .AddTicketsButton:hover {
    border-color: #f05537;
    background: #f05537;
    cursor: pointer;
  }

  .AllTicketsDiv {
    /* display: flex; */
    flex-flow: column wrap;
    width: 100%;
    height: 100%;
    // background:Azure ;
  }

  .TicketCreatedInfoDiv {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    width: 100%;
    height: 9.4rem;
    padding-right: 2.4rem;
    // background:AntiqueWhite;
    border-bottom: 0.1rem solid hsl(250, 7%, 80%);
  }

  .TicketCreatedInfoDiv:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .TicketCreatedScrollSvg {
    width: 2.4rem;
    height: 2.4rem;
    margin-left: 2.4rem;
    fill: #dbdae3;
  }

  .TicketInfoDiv {
    display: flex;
    flex-flow: row wrap;
    padding: 2.4rem;
    flex: 1;
    // background:Silver ;
    margin-left: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  .TicketNameDateDiv {
    display: flex;
    flex-flow: column wrap;
    width: auto;
    height: 4.6rem;
    align-self: flex-start;
    // background:Wheat;
    // margin-right: 20rem;
  }

  .TicketName {
    /* width: 100%; */
    color: #4b4d63;
    font-size: 1.8rem;
    line-height: 2.4rem;
    // margin-right: -0.25px;
    font-weight: 600;
    letter-spacing: 0.025rem;
  }

  .YellowDot {
    color: yellow;
    font-size: 3rem;
    font-weight: 600;
    width: 0.847rem;
    height: 1.9rem;
    margin-top: -1.8rem;
  }

  .ScheduledStartsDiv {
    color: #6f7287;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 400;
    margin-left: 1.5rem;
  }

  .TicketTier {
    color: #6f7287;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 400;
    // align-self : flex-end;
  }

  .SoldTickets {
    color: #6f7287;
    font-size: 1.4rem;
    line-height: 2rem;
    font-weight: 400;
  }

  .EventCapacityDiv {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 6.8rem;
    padding: 1.2rem 0 1.2rem 1.6rem;
    // background:Tan;
    margin-top: -7.5rem;
    border-bottom: 0.1rem solid hsl(250, 7%, 80%);
  }

  .EventCapacityLabelDiv {
    display: flex;
    flex-direction: row;
    padding: 1.2rem 0 0 6.4rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
    color: #4b4d63;
  }

  .EventCapacitySvg {
    width: 2.4rem;
    height: 2.4rem;
    fill: #4b4d63;
    margin-left: 0.8rem;
  }

  .TotalSoldTickets {
    height: 3.2rem;
    padding-top: 1.2rem;
    font-size: 1.4rem;
    line-height: 2rem;
    margin-left: auto;
    margin-right: 4.8rem;
  }
`;
export const PromocodesPageDiv = styled.div`
  display: flex;
  // width:94.4rem;
  width: 100%;
  height: 32.577rem;
  // background:DarkSeaGreen ;
  margin-top: 5rem;
  margin-left: 3rem;

  .PromocodesInfoAndButtons {
    display: flex;
    flex-direction: column;
    // flex-flow: column wrap;
    width: auto;
    max-width: 39.333rem;
    height: auto;
    // background;LightSeaGreen;
  }

  h2 {
    margin: 0.8rem -0.05rem 1.6rem 0;
    font-size: 3rem;
    line-height: 4rem;
    letter-spacing: 0.05rem;
    color: #1e0a3c;
    font-weight: 700;
    padding-right: 2rem;
    width: auto;
    height: auto;
  }

  .ParagraphOne {
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
    height: auto;
    width: auto;
  }

  .ParagraphTwo {
    font-size: 1.4rem;
    line-height: 2.2rem;
    font-weight: 400;
    height: auto;
    width: auto;
  }

  .PromocodesButtonsDiv {
    display: flex;
    flex-direction: column;
    // flex-flow: column wrap;
    width: 100%;
    height: auto;
    margin-top: 3.2rem;
  }

  .CreatePromocodeButton {
    background: #d1410c;
    color: #fff;
    width: 17.383rem;
    height: 4.4rem;
    margin-right: 1.2rem;
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 4px;
    border: none;
  }

  .UploadCsvButton {
    width: 13.3rem;
    height: 4.4rem;
    // padding:0 3.2rem;
    font-size: 1.3rem;
    font-weight: 500;
    border-radius: 4px;
    border: none;
    background: #fff;
    color: #1e0a3c;
    border: 2px solid #a9a8b3;
  }

  .PromocodesImgDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    // margin-left:6rem;
    // flex-shrink:1;
  }
`;
export const CreatePromoSideMenu = styled.div`
  position: relative;
  display: flex;

  .MainCreatePromoopen {
    position: fixed;
    width: 40rem;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    z-index: 1;
    // background: Thistle;
    height: auto;
    overflow-y: scroll;
    margin-top: 7.1rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  .closed {
    display: none;
  }

  .AddCodeMenuHeaderDiv {
    display: flex;
    height: 5.2rem;
    padding: 1.6rem 0.8rem 1.2rem 2.4rem;
    justify-content: space-between;
    // background: RosyBrown;
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 600;
    color: #1e0a3c;
    border-bottom: 0.1rem solid hsl(250, 7%, 77%);
  }

  .PromocodeInfoDiv {
    height: 100%;
    padding: 2.4rem;
    display: flex;
    flex-flow: column wrap;
  }

  .CodeNameDiv {
    display: flex;
    justify-content: flex-start;
    width: 33.5rem;
    height: 4.6rem;
    flex-direction: column;
    border: 0.1rem solid #a9a8b3;
  }

  .NameLabelDiv {
    display: flex;
    flex-direction: row;
    color: #6f7287;
    font-size: 1.3rem;
    line-height: 2.2rem;
    padding: 0.2rem 1.2rem 0;
    width: 100%;
    height: 2.4rem;
  }

  .message {
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  .error-message {
    margin-top: 1rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  .CodeNameTextboxdiv.error {
    border-color: red;
  }

  .CodeNameTextboxdiv.error input {
    color: red;
  }

  .CodeNameTextboxdiv.error message {
    color: red;
  }

  .TicketLimitDiv {
    display: flex;
    flex-flow: column wrap;
    width: 33.5rem;
    height: 7.4rem;

    margin-top: 3.2rem;
  }

  .DropdownDiv {
    display: flex;
    justify-content: soace-between;
    width: 16.75rem;
    height: 5.8rem;
    border: 1px solid hsl(250, 7%, 80%);
  }
  .DropdownDiv:hover {
    border-color: #6f7287;
  }

  .LimitDropdownDiv {
    display: flex;
    flex-flow: column wrap;
    width: 15.95rem;
    height: 5rem;
    // background:LightCoral ;
    margin-right: 1rem;
    // padding:1.8rem 1.2rem 0.6rem;
  }

  .TicketLimitLabel {
    color: #6f7287;
    width: 13.55rem;
    height: 2.2rem;
    font-size: 1.2rem;
    line-height: 2.2rem;
    z-index: 1;
    margin-left: 1.4rem;
  }

  .LimitDropdown {
    width: 15.95rem;
    height: 5rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
    border: none;
    color: #39364f;
    padding: 1.8rem 1.2rem 0.6rem;
    position: absolute;
  }

  .LimitedAmountDiv,
  .LimitedAmountTextboxDiv,
  .LimitedAmountLabelDiv,
  .AmountInput,
  .AvailabilityError {
    width: 10.6rem;
    height: 4.8rem;
  }

  .LimitedAmountTextboxDiv {
    border: none;
  }

  .LimitedAmountDiv {
    display: flex;
    margin-left: 1rem;
    width: 16.15rem;
    // background:Salmon ;
    border: 1px solid hsl(250, 7%, 80%);
  }

  .LimitedAmountLabelDiv {
    height: 2.2rem;
    font-size: 1.2rem;
    margin-left: 1rem;
    line-height: 2.2rem;
    width: auto;
  }

  .AmountInput {
    margin-left: 1rem;
    width: 9.6rem;
    height: 2.5rem;
    // padding-left:1rem;
    border: none;
    // text-align: center;
  }

  .AmountError {
    font-size: 1.2rem;
    width: 16.15rem;
    height: 2.2rem;
  }

  .TicketsLabel {
    color: #a9a8b3;
    font-size: 1.4rem;
    height: 2.4rem;
    align-self: center;
    margin: 1.1rem 1.2rem 1.1rem 0;
  }

  .asterisk {
    margin-left: 0.2rem;
    color: red;
  }

  .TextUnderLimited {
    width: 100%;
    margin-bottom: 3.2rem;
    margin-top: -1.3rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  .DiscountDiv {
    display: flex;
    flex-direction: column;

    align-content: center;
    width: 100%;
    height: auto;
    margin-bottom: 1.6rem;
    // background:Lavender;
    // border: 0.1rem solid #a9a8b3;
  }

  .DiscountsLabel {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
  }

  .DiscountAmountDiv {
    display: flex;
    flex-direction: row;

    align-items: center;
    align-content: center;
    width: 23rem;
    height: 4.8rem;
    margin-bottom: 1.6rem;
    // background:Lavender;
    border: 0.1rem solid #a9a8b3;
  }

  .DiscountAmountDiv:hover {
    border-color: #6f7287;
  }

  .DollarSignDiv {
    width: 0.847rem;
    height: 2.4rem;
    margin-left: 1.2rem;
    font-size: 2rem;
    font-weight: 600;
    color: #a9a8b3;
  }

  .DiscountInput {
    margin-left: 1rem;
    border: none;
    height: 3rem;
  }

  .ButtonsMenuDiv {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: center;
    width: 40rem;
    height: 6.8rem;
    // background:RebeccaPurple ;
    z-index: 1;
    // margin-top:-10.8rem;
  }

  .CancelButton {
    width: 13.333rem;
    height: 4.4rem;
    margin-right: 2.4rem;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    color: #39364f;
    font-weight: 600;
    font-size: 1.35rem;
    border: 0.2rem solid;
    border-color: #a9a8b3;
    border-radius: 0.4rem;
    cursor: pointer;
    background: #ffffff;
  }

  .SaveButton {
    width: 13.333rem;
    height: 4.4rem;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
    font-size: 1.35rem;
    border: 0.2rem solid #f05537;
    border-radius: 0.4rem;
    background: #f05537;
    color: #ffffff;
    cursor: pointer;
  }

  .CodeNameInput {
    border: none;
    margin-top: -0.5rem;
    background-color: transparent;
  }

  .LimitDropdown:focus {
    outline: none;
  }

  .DiscountError {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;
export const CsvPromocode = styled.div`
  position: relative;
  display: flex;

  .MainCsvPromoOpen {
    position: fixed;
    width: 40rem;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: white;
    height: auto;
    margin-top: 6rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  .closed {
    display: none;
  }

  .UploadCsvMenuHeaderDiv {
    display: flex;
    height: 5.2rem;
    padding: 1.6rem 0.8rem 1.2rem 2.4rem;
    justify-content: space-between;
    // background: RosyBrown;
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 600;
    color: #1e0a3c;
    border-bottom: 0.1rem solid hsl(250, 7%, 77%);
  }

  .CsvPromoInfoDiv {
    height: 100%;

    padding: 2.4rem;
    display: flex;
    flex-flow: column wrap;
  }

  .CsvTexts {
    width: 33.5rem;
    height: 11.2rem;
    margin-bottom: 2.4rem;
    font-size: 1.4rem;
    color: #39364f;
    line-height: 1.6rem;
  }

  .ImportCsvCardDiv {
    display: flex;
    flex-direction: row;
    width: 33.5rem;
    height: 10.2rem;
    border: 0.2rem solid #eeedf2;
    background: #f8f7fa;
    padding: 1.6rem 0.8rem 1.2rem 2.4rem;
  }

  .ImportCsvCardDiv:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .CalendarIconSpan {
    margin-left: 1.2rem;
    margin-top: 1.3rem;
  }

  .CalendarSvg {
    width: 2.5rem;
    height: 2.5rem;
    transform: scale(2);
    margin-top: 0.5rem;
    margin-right: 1.5rem;
    margin-left: 0.5rem;
  }

  .ImportCodesDiv {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
    margin-top: 1.5rem;
  }

  .ImportCodesText {
    width: 100%;
    font-size: 1.3rem;
    color: #39364f;
    font-weight: 450;
  }

  .DragAndDrop {
    width: 100%;
    font-size: 1.2rem;
    color: #39364f;
    margin-top: 0.5rem;
    font-weight: 450;
  }

  .TicketLimitDiv {
    display: flex;
    flex-flow: column wrap;
    width: 33.5rem;
    height: 7.4rem;

    margin-top: 3.2rem;
  }

  .DropdownDiv {
    display: flex;
    justify-content: soace-between;
    width: 16.75rem;
    height: 5.8rem;
    border: 1px solid hsl(250, 7%, 80%);
  }
  .DropdownDiv:hover {
    border-color: #6f7287;
  }

  .LimitDropdownDiv {
    display: flex;
    flex-flow: column wrap;
    width: 15.95rem;
    height: 5rem;
    // background:LightCoral ;
    margin-right: 1rem;
    // padding:1.8rem 1.2rem 0.6rem;
  }

  .TicketLimitLabel {
    color: #6f7287;
    width: 13.55rem;
    height: 2.2rem;
    font-size: 1.2rem;
    line-height: 2.2rem;
    z-index: 1;
    margin-left: 1.4rem;
  }

  .LimitDropdown {
    width: 15.95rem;
    height: 5rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
    border: none;
    color: #39364f;
    padding: 1.8rem 1.2rem 0.6rem;
    position: absolute;
  }

  .LimitDropdown:focus {
    outline: none;
  }

  .LimitedAmountDiv,
  .LimitedAmountTextboxDiv,
  .LimitedAmountLabelDiv,
  .AmountInput,
  .AvailabilityError {
    width: 10.6rem;
    height: 4.8rem;
  }

  .LimitedAmountTextboxDiv {
    border-color: transparent;
  }
  .LimitedAmountDiv {
    display: flex;
    margin-left: 1rem;
    width: 16.15rem;
    // background:Salmon ;
    border: 1px solid hsl(250, 7%, 80%);
  }

  .LimitedAmountLabelDiv {
    height: 2.2rem;
    font-size: 1.2rem;
    margin-left: 1rem;
    line-height: 2.2rem;
    width: auto;
    border: none;
  }

  .AmountInput {
    margin-left: 1rem;
    width: 9.6rem;
    height: 2.5rem;
    // padding-left:1rem;
    border: none;
    // text-align: center;
  }

  .AmountError {
    font-size: 1.2rem;
    width: 16.15rem;
    height: 2.2rem;
    border: none;
  }

  .TicketsLabel {
    color: #a9a8b3;
    font-size: 1.4rem;
    height: 2.4rem;
    align-self: center;
    margin: 1.1rem 1.2rem 1.1rem 0;
  }

  .asterisk {
    margin-left: 0.2rem;
    color: red;
  }

  .TextUnderLimited {
    width: 100%;
    margin-bottom: 3.2rem;
    margin-top: 1rem;
    // margin-top:-1.7rem;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }

  .DiscountDiv {
    display: flex;
    flex-direction: column;

    align-content: center;
    width: 100%;
    height: auto;
    margin-bottom: 1.6rem;
    // background:Lavender;
    // border: 0.1rem solid #a9a8b3;
  }

  .DiscountsLabel {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
  }

  .DiscountAmountDiv {
    display: flex;
    flex-direction: row;

    align-items: center;
    align-content: center;
    width: 23rem;
    height: 4.8rem;
    margin-bottom: 1.6rem;
    // background:Lavender;
    border: 0.1rem solid #a9a8b3;
  }

  .DiscountAmountDiv:hover {
    border-color: #6f7287;
  }

  .DollarSignDiv {
    width: 0.847rem;
    height: 2.4rem;
    margin-left: 1.2rem;
    font-size: 2rem;
    font-weight: 600;
    color: #a9a8b3;
  }

  .DiscountInput {
    margin-left: 1rem;
    border: none;
    height: 3rem;
  }

  .ButtonsMenuDiv {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    align-content: center;
    width: 40rem;
    height: 6.8rem;
    // background:RebeccaPurple ;
    z-index: 1;
    margin-top: -12rem;
    margin-right: 2rem;
  }

  .CancelButton {
    width: 13.333rem;
    height: 4.4rem;
    margin-right: 2.7rem;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    color: #39364f;
    font-weight: 600;
    font-size: 1.35rem;
    border: 0.3rem solid;
    border-color: #a9a8b3;
    border-radius: 0.4rem;
    cursor: pointer;
    background: #ffffff;
  }

  .CancelButton:hover {
    border-color: #6f7287;
    background: #f8f7fa;
    color: #6f7287;
  }

  .SaveButton {
    width: 13.333rem;
    height: 4.4rem;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
    font-size: 1.35rem;
    border: 0.2rem solid #d1410c;
    border-radius: 0.4rem;
    background-color: #d1410c;
    color: #ffffff;
    cursor: pointer;
  }

  .SaveButton:hover {
    border-color: #f05537;
    background: #f05537;
  }

  .DiscountError {
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
`;

export const PromocodesSavePageDiv = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 96rem;
  height: 16.8rem;

  // background-color:lightblue;
  margin-top: 10rem;

  .ButtonsMenuDiv {
    display: flex;
    justify-content: center;
    align-content: center;

    margin-left: auto;
    width: 40rem;
    height: 6.8rem;
    // background:RebeccaPurple ;
    z-index: 1;
    margin-top: -9rem;
    margin-right: -6rem;
  }

  .CancelButton {
    width: 13.333rem;
    height: 4.4rem;
    // margin-right:2.4rem;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    color: #39364f;
    font-weight: 600;
    font-size: 1.35rem;
    border: 0.2rem solid;
    border-color: #a9a8b3;
    border-radius: 0.4rem;
    cursor: pointer;
    background: #ffffff;
  }

  .SaveButton {
    width: 13.333rem;
    height: 4.4rem;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    font-weight: 600;
    font-size: 1.35rem;
    border: 0.2rem solid #f05537;
    border-radius: 0.4rem;
    background: #f05537;
    color: #ffffff;
    cursor: pointer;
    margin-left: 1rem;
  }

  .Header {
    background-color: #f8f7fa;
    width: 96.6rem;
    height: 4.35rem;
    border-bottom: 0.1rem solid #eeedf2;
  }

  th {
    // background-color:Khaki ;
    font-weight: bold;
    text-align: left;
    padding: 10px;
    height: 4rem;
    box-sizing: border-box;
    margin-top: -3rem;
  }

  .TableDiv {
    display: flex;
    flex-flow: column;
  }

  table {
    margin-top: -5.3rem;
  }

  .NameColumn1 {
    min-width: 8.859rem;
  }

  .CodeTypeColumn2 {
    min-width: 19.589rem;
  }

  .DiscountColumn3 {
    min-width: 17.15434rem;
  }

  .UsesColumn4 {
    min-width: 15.841rem;
  }

  .StatusColumn5 {
    min-width: 25.253rem;
  }

  .rowHeight {
    height: 5.7rem;
    border-bottom: 0.1rem solid hsl(250, 7%, 80%);
  }

  .rowHeight:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
