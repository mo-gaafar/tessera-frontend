/**
 * @file addAttendees.jsx
 * @name addAttendees
 * @author @SeifAllah
 * @requires react
 * @requires react-router-dom
 * @requires mui/material
 * @requires ./styles/addAttendees.styled.styled
 * @requires ../../components/Sidebar
 * @requires ./RegisterInfo
 * @requires ../LandingPage/NavBar
 * @requires ../LandingPage/NavbarLoggedIn
 * @requires @mui/icons-material/HelpOutlineOutlined
 * @requires @mui/icons-material/Launch
 * @requires @mui/icons-material/ArrowBack
 *   @requires @mui/material/Checkbox
 *  @requires @mui/material/Button
 * @requires @mui/material/TextField
 * @requires @mui/material/InputAdornment
 * @requires @mui/material/Select
 * @requires @mui/material/MenuItem
 * @requires @mui/material/InputLabel
 * @requires @mui/material/FormControl
 * @requires @mui/material/Button
 *
 * @exports AddAttendees
 * @description This file contains the Landing page components and its logic
 */

import React from "react";
import { useState, useEffect } from "react";
import {
  Container,
  Header,
  OrderType,
  Tickets,
  Continue,
  LearnMore,
} from "./styles/addAttendees.styled";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LaunchIcon from "@mui/icons-material/Launch";
import InputAdornment from "@mui/material/InputAdornment";
import { Link, useNavigate } from "react-router-dom";
import { StyledNav } from "../LandingPage/styles/Landing.styled";
import NavbarLoggedIn from "../LandingPage/NavbarLoggedIn";
import Navbar from "../LandingPage/NavBar";
import Sidebar from "../../components/Sidebar";
import AttendeeInfo from "./RegisterInfo";
/**
 * Function component that renders the AddAttendees page
 * @function
 * @returns {JSX.Element} AddAttendees page content
 * @description This is the main function of the AddAttendees page
 * @exports AddAttendees
 *
 *
 */
export default function AddAttendee() {
  const [inputQuantity, setInputQuantity] = useState([]);
  const [inputError, setInputError] = useState([]);
  const [contFlag, setcontFlag] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [image, setImage] = useState("");

  const [ticketTiers, setTicketTiers] = useState([]);
  const [helperMsg, setHelperMsg] = useState("");
  const email = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : localStorage.getItem("authEmail");
  const event = localStorage.getItem("eventID");
  const token = localStorage.getItem("token");
  const [EventData, setEventData] = useState({});
  const [faceValue, setFaceValue] = useState([]);
  /**
   * function that gets the data of the event from the backend
   * @function getData
   * @returns {void}
   * @description This function gets the data of the event from the backend
   *
   */
  useEffect(() => {
    const getData = async () => {
      const result = await fetch(
        `https://www.tessera.social/api/event-management/retrieve/${event}`,
        {
          method: "GET",

          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await result.json();
      setEventData(data.event);
      setImage(data.event.basicInfo.eventImage);
      setTicketTiers(data.event.ticketTiers);
      setFaceValue(() => {
        let array = Array(data.event.ticketTiers.length).fill(0);
        return array;
      });
    };

    getData();
  }, []);

  const [ticketTierSelected, setTicketTierSelected] = useState([]);
  const [orderType, setOrderType] = useState("");
  let flag = false;

  /**
   *
   * description this function creates the selected tier to export it to the attendeeInfo page
   * @function createTierSelected
   * @returns {array} selected
   * @description This function creates the selected tier to export it to the attendeeInfo page
   *
   *
   */
  function createTierSelected() {
    let selected = [];
    for (let i = 0; i < inputQuantity.length; i++) {
      if (
        inputQuantity[i] !== "" &&
        Number(inputQuantity[i]) != 0 &&
        inputQuantity[i] != null
      ) {
        let temp = {
          firstname: "",
          lastname: "",
          email: "",
        };
        let temp2 = [];

        temp2.length = Number(inputQuantity[i]);
        temp2.fill(temp);
        let temp3;
        ticketTiers[i].price === "Free"
          ? (temp3 = 0)
          : (temp3 = Number(ticketTiers[i].price));

        selected.push({
          tierName: ticketTiers[i].tierName,
          quantitySold: inputQuantity[i],

          price: temp3,
          tickets: temp2,
        });
      }
    }
    return selected;
  }
  /**
   * @function handleInputChange
   * @param {*} event
   * @param {*} index
   * @returns {void}
   * @description This function handles the input change in the quantity text field
   *
   */
  function handleInputChange(event, index) {
    const newArray = [...inputQuantity];
    const errorArray = [...inputError];

    const value = event.target.value;
    newArray[index] = value;

    // check if the input is validfaceValueconso
    if (/^[0-9]*$/.test(value)) {
      if (
        Number(value) <=
          ticketTiers[index].maxCapacity - ticketTiers[index].quantitySold &&
        Number(value) >= 0
      ) {
        errorArray[index] = false;
        setInputError(errorArray);
        setFaceValue(() => {
          let temp = faceValue;
          orderType !== "Complimentary"
            ? (temp[index] = Number(ticketTiers[index].price) * Number(value))
            : null;

          return temp;
        });
      } else {
        setHelperMsg("Please enter a valid quantity");
        errorArray[index] = true;
        setInputError(errorArray);
        newArray[index] = "";

        setFaceValue(() => {
          let temp = faceValue;
          temp[index] = 0;
          return temp;
        });
      }
    } else {
      errorArray[index] = true;
      setInputError(errorArray);
      newArray[index] = "";

      setHelperMsg("Please enter numbers only ");
      setFaceValue(() => {
        let temp = faceValue;
        temp[index] = 0;
        return temp;
      });
    }
    setInputQuantity(newArray);
    setTotalValue(() => faceValue.reduce((a, b) => a + b, 0));
  }
  useEffect(() => {
    let array = [];
    array = faceValue;
    array.map((element, index) => {
      if (orderType === "Complimentary") {
        array[index] = 0;
      } else {
        if (!isNaN(inputQuantity[index])) {
          array[index] =
            Number(ticketTiers[index].price) * inputQuantity[index];
        }
      }
    });

    setFaceValue(array);
    setTotalValue(() => array.reduce((a, b) => a + b, 0));
  }, [orderType, inputQuantity]);

  /**
   * @function handleshowAlert
   * @returns {void}
   * @description This function handles the alert message
   *
   *
   */
  function showAlert() {
    let array = createTierSelected();
    setTicketTierSelected(() => array);

    inputQuantity.forEach((element) => {
      if (element !== "" && Number(element) != 0 && element != null) {
        flag = true;
        setcontFlag(() => true);
      }
    });

    if (!flag) alert("Please enter a quantity");
  }
  function getData() {}

  return (
    <>
      <StyledNav>
        {email && email !== "undefined" ? (
          <NavbarLoggedIn creator={true} email={email} />
        ) : (
          <Navbar />
        )}
      </StyledNav>
      <div style={{ display: "flex" }}>
        <Sidebar event={true} dashboard={true} />
        {!contFlag && (
          <Container id="129758shf3272">
            <Header id="12975374hdd272">
              <h1>Add Attendees</h1>
              <p>
                Manually add attendees info for complimentary tickets or offline
                payments
              </p>
            </Header>
            <OrderType id="12975jfug73272">
              <label>Order Type:</label>
              <select
                id="1297ir8jds53272"
                onChange={(event) => setOrderType(event.target.value)}
              >
                <option value="Check">Paid with Check</option>
                <option value="Cash">Paid with cash </option>
                <option value="Paypal">
                  Paid directly online with Paypal{" "}
                </option>
                <option value="nonPaypal">
                  Paid directly online non-Paypal
                </option>
                <option value="Complimentary">Complimentary </option>
                <option value="noPayment">No Payment necessary </option>
                <option value="Voucher">Paid with Voucher </option>
                <option value="CreditCard">Paid directly by Credit Card</option>
                <option value="DebitCard">Paid directly by Debit Card</option>
                <option value="Other">Other</option>
              </select>
              <p>* Eventbrite does not charge any fees for manual orders.</p>
            </OrderType>
            <Tickets id="1297kd98jdf53272">
              <thead className="Title" id="129759jjef3272">
                <tr className="rowHead" id="12975is8jdf3272">
                  <th className="type" align="left">
                    Ticket Type
                  </th>
                  <th align="center">Sold</th>
                  <th align="center">Price*</th>
                  <th align="center">Quantity</th>
                  <th align="center">Face Value</th>
                </tr>
              </thead>

              <tbody id="12975327js8fh2">
                {ticketTiers.map((ticket, index) => {
                  return (
                    <tr key={index} className="tRow">
                      <td className="num">{ticket.tierName}</td>
                      <td align="center" className="num">
                        {ticket.quantitySold}/{ticket.maxCapacity}
                      </td>
                      <td align="center" className="num">
                        ${Number(ticket.price)}
                      </td>
                      <td align="center" className="tQuantity">
                        <TextField
                          id={`12979jfff3353272${index}`}
                          className="Quantity"
                          inputProps={{
                            style: {
                              fontSize: 25,
                              width: 300,
                            },
                          }}
                          value={inputQuantity[index]}
                          onChange={(event) => handleInputChange(event, index)}
                          error={inputError[index]}
                          helperText={inputError[index] ? helperMsg : ""}
                          sx={{
                            "& .MuiFormHelperText-root": {
                              fontFamily: "Arial",
                              fontSize: 14,
                            },
                          }}
                        ></TextField>
                      </td>
                      <td align="center" width="30%">
                        <TextField
                          id={`12979jfff33d53272${index}`}
                          className="Face"
                          size="Normal"
                          inputProps={{
                            style: {
                              fontSize: 25,
                              width: 300,
                            },
                            startAdornment: (
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            ),
                          }}
                          disabled
                          value={`$${faceValue[index]}`}
                        >
                          {" "}
                        </TextField>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <div className="Total" id="12975afja8fhg3272">
                <div className="text">Total Value</div>
                <TextField
                  disabled
                  id="outlined-disabled"
                  value={"$" + totalValue}
                  className="TotalValue"
                  inputProps={{
                    style: {
                      fontSize: 25,
                      width: 250,
                      backgroundColor: "#F5F5F5",
                    },
                  }}
                ></TextField>
              </div>
            </Tickets>
            <Continue id="12975a0gig3272">
              <Button
                id="12975327afjaf2"
                variant="contained"
                color="primary"
                className="button"
                onClick={showAlert}
              >
                Continue
              </Button>
            </Continue>
            <LearnMore id="1297a9jfng53272">
              <HelpOutlineOutlinedIcon className="icon" />
              Learn more about
              <a
                href="https://www.eventbrite.com/support/articles/en_US/How_To/how-to-add-attendees-manually?lg=en_US"
                target="_blank"
                id="1aj9fg29753272"
              >
                adding attendees
              </a>
              <a
                href="https://www.eventbrite.com/support/articles/en_US/How_To/how-to-add-attendees-manually?lg=en_US"
                target="_blank"
              >
                <LaunchIcon />
              </a>
            </LearnMore>
          </Container>
        )}
        {contFlag && (
          <AttendeeInfo
            ticketSelected={ticketTierSelected}
            total={totalValue}
            eventImage={image}
          />
        )}
      </div>
    </>
  );
}
