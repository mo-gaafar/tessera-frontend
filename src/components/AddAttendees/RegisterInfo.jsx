import React from "react";
import { useState, useEffect } from "react";

import {
  Header,
  Container,
  Checkout,
  Info,
  PlaceOrder,
  Information,
  OrderTitle,
  OrderItem,
} from "./styles/AttendeeInfo.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Continue } from "./styles/addAttendees.styled";
import Button from "@mui/material/Button";

export default function AttendeeInfo() {
  const [contactInfo, setContactInfo] = useState({
    fName: "",
    lName: "",
    email: "",
  });
  const [contactInfoError, setContactInfoError] = useState({
    fName: false,
    lName: false,
    email: false,
  });
  const [ticketInfo, setticketInfo] = useState([
    {
      fName: "",
      lName: "",
      email: "",
    },
    {
      fName: "",
      lName: "",
      email: "",
    },
  ]);
  const [ticketInfoError, setticketInfoError] = useState([
    {
      fName: false,
      lName: false,
      email: false,
    },
    {
      fName: false,
      lName: false,
      email: false,
    },
  ]);
  const [checked, setChecked] = useState(false);

  function handleTicketInfo(event, index, key) {
    const newArray = [...ticketInfo];
    const errorArray = [...ticketInfoError];
    if (key === "fName") {
      newArray[index].fName = event.target.value;
      setticketInfo(newArray);
      // check if the input is valid
      if (!/^[a-zA-Z]*$/.test(event.target.value)) {
        errorArray[index].fName = true;
        setticketInfoError(errorArray);

        setticketInfo(newArray);
      } else {
        errorArray[index].fName = false;
        setticketInfoError(errorArray);
      }
    } else if (key === "lName") {
      newArray[index].lName = event.target.value;
      setticketInfo(newArray);
      // check if the input is valid
      if (!/^[a-zA-Z]*$/.test(event.target.value)) {
        errorArray[index].lName = true;
        setticketInfoError(errorArray);

        setticketInfo(newArray);
      } else {
        errorArray[index].lName = false;
        setticketInfoError(errorArray);
      }
    } else if (key === "email") {
      newArray[index].email = event.target.value;
      setticketInfo(newArray);
      // check if the input is valid
      if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(event.target.value)) {
        errorArray[index].email = true;
        setticketInfoError(errorArray);

        setticketInfo(newArray);
      }
      // check if the input is valid
      else {
        errorArray[index].email = false;
        setticketInfoError(errorArray);
      }
    }
  }

  return (
    <Container>
      <Header>
        <a href="">
          <ArrowBackIcon />
          Back to Attendees section
        </a>
        <h1>Registeration Information</h1>
        <hr />
      </Header>
      <div className="flexcontainer">
        <div className="flexleft">
          <Checkout>
            <h2>Checkout</h2>
            <p> Time left</p>
          </Checkout>
          <Info>
            <h2>Contact Information</h2>
            <p>*Required</p>
            <div className="TextCont">
              <div className="Names">
                <TextField
                  className="firstName"
                  required
                  label="First Name"
                  variant="filled"
                  value={contactInfo.fName}
                  onChange={(e) => {
                    setContactInfo({ ...contactInfo, fName: e.target.value });
                    /^[a-zA-Z]*$/.test(e.target.value)
                      ? setContactInfoError({
                          ...contactInfoError,
                          fName: false,
                        })
                      : setContactInfoError({
                          ...contactInfoError,
                          fName: true,
                        });
                  }}
                  error={contactInfoError.fName}
                  helperText={
                    contactInfoError.fName ? "Please enter valid name" : null
                  }
                  InputLabelProps={{
                    style: {
                      fontSize: 20,
                    },
                  }}
                  inputProps={{
                    style: {
                      fontSize: 20,
                    },
                  }}
                ></TextField>
                <TextField
                  className="lastName"
                  required
                  label="Last Name"
                  variant="filled"
                  InputLabelProps={{
                    style: {
                      fontSize: 20,
                    },
                  }}
                  inputProps={{
                    style: {
                      fontSize: 20,
                    },
                  }}
                  value={contactInfo.lName}
                  onChange={(e) => {
                    setContactInfo({ ...contactInfo, lName: e.target.value });
                    /^[a-zA-Z]*$/.test(e.target.value)
                      ? setContactInfoError({
                          ...contactInfoError,
                          lName: false,
                        })
                      : setContactInfoError({
                          ...contactInfoError,
                          lName: true,
                        });
                  }}
                  error={contactInfoError.lName}
                  helperText={
                    contactInfoError.lName ? "Please enter valid name" : null
                  }
                />
              </div>
              <div className="Email">
                <TextField
                  className="Ename"
                  required
                  label="Email Address"
                  variant="filled"
                  type="email"
                  InputLabelProps={{
                    style: {
                      fontSize: 20,
                    },
                  }}
                  inputProps={{
                    style: {
                      fontSize: 20,
                    },
                  }}
                  value={contactInfo.email}
                  onChange={(e) => {
                    setContactInfo({ ...contactInfo, email: e.target.value });
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      e.target.value
                    )
                      ? setContactInfoError({
                          ...contactInfoError,
                          email: false,
                        })
                      : setContactInfoError({
                          ...contactInfoError,
                          email: true,
                        });
                  }}
                  error={contactInfoError.email}
                  helperText={
                    contactInfoError.email ? "Please enter valid email" : null
                  }
                />
              </div>
            </div>
            <div className="check">
              <Checkbox
                size="large"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
              />

              <p className="send">Send a confirmation email to the attendees</p>
              <p>
                As a reminder, the creator is responsible for compliance with
                privacy and marketing regulation when using this feature to
                upload email addresses for marketing communications
              </p>
            </div>
            <div className="ticketinfo">
              <h2>Ticket Information</h2>
              <div className="TextCont">
                <div className="Names">
                  <TextField
                    className="firstName"
                    required
                    label="First Name"
                    variant="filled"
                    InputLabelProps={{
                      style: {
                        fontSize: 20,
                      },
                    }}
                    inputProps={{
                      style: {
                        fontSize: 20,
                      },
                    }}
                    value={ticketInfo[0].fName}
                    onChange={(event) => handleTicketInfo(event, 0, "fName")}
                    error={ticketInfoError[0].fName}
                    helperText={
                      ticketInfoError[0].fName
                        ? "Please enter valid name"
                        : null
                    }
                  ></TextField>
                  <TextField
                    className="lastName"
                    required
                    label="Last Name"
                    variant="filled"
                    InputLabelProps={{
                      style: {
                        fontSize: 20,
                      },
                    }}
                    inputProps={{
                      style: {
                        fontSize: 20,
                      },
                    }}
                    value={ticketInfo[0].lName}
                    onChange={(event) => handleTicketInfo(event, 0, "lName")}
                    error={ticketInfoError[0].lName}
                    helperText={
                      ticketInfoError[0].lName
                        ? "Please enter valid name"
                        : null
                    }
                  />
                </div>
                <div className="Email">
                  <TextField
                    className="Ename"
                    required
                    type="email"
                    label="Email Address"
                    variant="filled"
                    InputLabelProps={{
                      style: {
                        fontSize: 20,
                      },
                    }}
                    inputProps={{
                      style: {
                        fontSize: 20,
                      },
                    }}
                    value={ticketInfo[0].email}
                    onChange={(event) => handleTicketInfo(event, 0, "email")}
                    error={ticketInfoError[0].email}
                    helperText={
                      ticketInfoError[0].email
                        ? "Please enter valid name"
                        : null
                    }
                  />
                </div>
              </div>
            </div>
            <p className="powered">Powered by TESSERA</p>
          </Info>
          <PlaceOrder>
            <Button
              variant="contained"
              color="primary"
              className="button"
              disabled
            >
              Place Order
            </Button>
          </PlaceOrder>
        </div>
        <Information>
          <div className="eventimage">
            <img
              src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F504832309%2F1479343247803%2F1%2Foriginal.20230501-180845?w=720&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C128%2C512%2C256&s=d1e65d2528b368ac6b683664754a0ec0"
              alt=""
            />
          </div>
          <OrderTitle>
            <h2>Order Summary</h2>
          </OrderTitle>
          <OrderItem>
            <div className="name">eneral Admision</div>
            <div className="Price">1</div>
          </OrderItem>
          <OrderItem>
            <div className="name">Total</div>
            <div className="Price">1</div>
          </OrderItem>
        </Information>
      </div>
    </Container>
  );
}
