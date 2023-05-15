/**
 * @file This file is the component that renders the tickets
 * @since 1.0.0
 * @author SeifAllah
 *
 * @requires react
 * @requires react-router-dom
 * @requires react-icons
 * @requires mui material
 *
 *
 */
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
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LaunchIcon from "@mui/icons-material/Launch";
import { LearnMore } from "./styles/addAttendees.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Continue } from "./styles/addAttendees.styled";
import Button from "@mui/material/Button";

export default function TicketInfo({
  ticketTier,
  index,
  ticketInfo,
  setticketInfo,
  ticketsLength,
  ticketInfoError,
  setticketInfoError,
}) {
  /**
   * @function handleTicketInfo
   * @param {*} event
   * @param {*} index
   * @param {*} key
   * @description this function validates the input in the text field
   *
   */
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
  let count = 1;
  return (
    <div className="ticketinfo">
      <h2>
        {ticketTier.tierName}-{index + 1}
      </h2>
      <div className="TextCont">
        <div className="Names">
          <TextField
            id="1297533"
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
            value={ticketInfo[index].fName}
            onChange={(event) => handleTicketInfo(event, index, "fName")}
            error={ticketInfoError[index].fName}
            helperText={
              ticketInfoError[index].fName ? "Please enter valid name" : null
            }
          >
            {count++}
          </TextField>
          <TextField
            id="12934552"
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
            value={ticketInfo[index].lName}
            onChange={(event) => handleTicketInfo(event, index, "lName")}
            error={ticketInfoError[index].lName}
            helperText={
              ticketInfoError[index].lName ? "Please enter valid name" : null
            }
          />
        </div>
        <div className="Email">
          <TextField
            id="12973459"
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
            value={ticketInfo[index].email}
            onChange={(event) => handleTicketInfo(event, index, "email")}
            error={ticketInfoError[index].email}
            helperText={
              ticketInfoError[index].email ? "Please enter valid email" : null
            }
          />
        </div>
      </div>
    </div>
  );
}
