import React from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material/styles";
import {
  ContainerBox,
  TicketBody,
  TicketHeader,
  TicketEnd,
  Checkout,
  PromoCode,
  SelectTicket,
  SelectTickContainer,
  SelectTickName,
  IncrementDecrement,
  SelectTickBottomContainer,
  BottomContainerHead,
  Apply,
  Applyfocus,
} from "./Ticket.styled";

export default function Reservation(props) {
  // let { _id } = useParams();

  const [tickets, setTickets] = useState(true);
  const [ticketsAmount, setTicketsAmount] = useState([]);
  const [promocode, setPromocode] = useState(false);
  const [max, setMax] = useState(true);
  const [max2, setMax2] = useState(0);
  const [subtotal, setSubtotal] = useState(0.0);
  const [fee, setFee] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const [inputValue, setInputValue] = useState("");
  const [ticketsNum, setTicketsNum] = useState(0);
  const [errorMsg, setErrorMsg] = useState(false);
  const [helper, setHelper] = useState("");

  const eventid = "643aa09ecbfea68c24d93670";

  // const MyTextField = styled(TextField)({
  //   "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
  //     borderColor: "grey",
  //   },
  //   "&:focus-within .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
  //     borderColor: "black",
  //     borderWidth: "2px",
  //   },
  //   "&:focus-within .MuiInputLabel-root": {
  //     color: "black",
  //   },
  // });

  const ticketObj = [
    {
      price: 0,
      name: "ahmed",
      quantity: 20,
    },
    {
      price: 5,
      name: "mohamed",
      quantity: 220,
    },
    {
      price: 9,
      name: "samir",
      quantity: 70,
    },
  ];

  async function sendPromo() {
    try {
      const response = await axios.get(
        "https://www.tessera.social/api/attendee/book-ticket/apply-promo-code/:code"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    response.data ? setPromocode(true) : setPromocode(false);
  }
  // async function ticketCredentials() {
  //   try {
  //     const response = await axios.get(
  //       "https://www.tessera.social/api/attendee/event/643aa09ecbfea68c24d93670"
  //     );
  //     const event = response.json();
  //     console.log(event.filteredEvents[0] + "this is ");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const [eventData, setEventData] = React.useState({});
  const [eventExist, setEventExists] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.tessera.social/api/attendee/event/643aa09ecbfea68c24d93670"
      ); //temp (the original one crashed)
      //const response = await fetch('https://www.tessera.social/api/attendee/event/{props.id}'); (the original one)
      //console.log(await response.json())
      const event = await response.json();
      //console.log((event.filteredEvents)[0])
      setEventData(event);
      console.log(event);
      event.filteredEvents[0]
        ? console.log(event.filteredEvents[0])
        : setEventExists(false);
      event.filteredEvents[0] ? setEventExists(true) : setEventExists(false);
    };
    fetchData();
  }, []);

  return (
    tickets != false &&
    eventExist && (
      <ContainerBox>
        {/* {ticketCredentials()} */}

        <TicketHeader>
          {props.liftStateUP(eventData.filteredEvents[0].basicInfo.eventImage)}
          <div className="title">
            {eventData.filteredEvents[0].basicInfo.eventName}
          </div>
          <div className="Setting">
            {" "}
            {eventData.filteredEvents[0].basicInfo.startDateTime}
          </div>
        </TicketHeader>
        <TicketBody>
          <PromoCode>
            <TextField
              className={"lol"}
              value={inputValue}
              onChange={(newValue) => setInputValue(newValue.target.value)}
              disabled={promocode ? true : false}
              id="outlined-basic"
              label="PromoCode"
              variant="outlined"
              placeholder="Enter Code"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {promocode && <CheckCircleIcon color="success" />}
                    {!inputValue ? (
                      <Apply
                        // onClick={sendPromo()}
                        disabled={!promocode ? !inputValue : false}
                      >
                        {!promocode ? "Apply" : "Remove"}
                      </Apply>
                    ) : (
                      <Applyfocus
                        //onClick={sendPromo()}
                        disabled={!promocode ? !inputValue : false}
                      >
                        {!promocode ? "Apply" : "Remove"}
                      </Applyfocus>
                    )}
                    {/* <button
                      disabled={!promocode ? !inputValue : false}
                      // onClick={applypromocode}
                      // className={
                      //   !inputValue ? classes.applybtn : classes.applybtnactive
                      // }
                    >
                      {/* {!promocode ? "Apply" : "Remove"} */}
                    {/* </button> */}
                  </InputAdornment>
                ),
              }}
              // error={errorMsg}
              // helperText={helper}
            />
          </PromoCode>
          {eventData.filteredEvents[0].ticketTiers.map((element, index) => {
            return (
              <SelectTicket>
                <SelectTickContainer className="focus">
                  <SelectTickName>{element.tierName}</SelectTickName>
                  <IncrementDecrement>
                    <div
                      className={max ? "incdec" : "incdecactive"}
                      onClick={() => setMax(false)}
                    >
                      <svg
                        id="plus-chunky_svg__eds-icon--plus-chunky_svg"
                        x="0"
                        y="0"
                        viewBox="0 0 24 24"
                      >
                        <path
                          id="plus-chunky_svg__eds-icon--plus-chunky_base"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"
                        ></path>
                      </svg>
                    </div>
                    <div className="Quantity">
                      {/* {ticketsAmount[index].number} */}
                      20
                    </div>
                    <div
                      className={max2 == 0 ? "incdec" : "incdecactive"}
                      // onClick={() => removeamount(index)}
                    >
                      <svg
                        id="minus-chunky_svg__eds-icon-minus-chunky"
                        x="0"
                        y="0"
                        viewBox="0 0 24 24"
                      >
                        <g>
                          <path fill="#fff" d="M6.5 11.5h11v1h-11z"></path>
                          <path d="M18 11H6v2h12v-2z"></path>
                        </g>
                      </svg>
                    </div>
                  </IncrementDecrement>
                </SelectTickContainer>
                <SelectTickBottomContainer>
                  <BottomContainerHead>
                    <p className="Fee">${element.price}</p>
                    {/* {ticketsAmount[index].discount && (
                      <pre>
                        <p className={classes.price}>
                          {element.price -
                            element.price *
                              ticketsAmount[index].discountpercent -
                            ticketsAmount[index].discountamount}
                          {"  "}
                          <del>{element.price}</del>
                        </p>
                      </pre>
                    )} */}
                    <p className="Sale">
                      Sales end on {element.endSelling}
                      {/* {moment(element.salesStart).format("MMMM Do YYYY")} */}
                    </p>
                  </BottomContainerHead>
                </SelectTickBottomContainer>
              </SelectTicket>
            );
          })}
          <TicketEnd>
            {" "}
            <div>
              Powered by
              <a href="">
                <img src="" alt="" />
              </a>
            </div>
          </TicketEnd>
        </TicketBody>
        <Checkout>
          {" "}
          <div className="summarycontainer">50</div>
          <div className="checkoutbtndiv">
            <button className="buttoncheckout" data-testid="CreateBtn">
              Check out
            </button>
          </div>
        </Checkout>
      </ContainerBox>
    )
  );
}
