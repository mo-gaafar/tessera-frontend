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

export default function AddAttendee() {
  const [inputValue, setInputValue] = useState(["", ""]);
  const [inputError, setInputError] = useState([false, false]);
  const [contFlag, setcontFlag] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const initialvalue = {
    x: "",
  };
  function handleInputChange(event, index) {
    const newArray = [...inputValue];
    const errorArray = [...inputError];

    const value = event.target.value;
    newArray[index] = value;
    setInputValue(newArray);

    // check if the input is valid
    if (!/^[0-9]*$/.test(value)) {
      errorArray[index] = true;
      setInputError(errorArray);
      newArray[index] = "";
      setInputValue(newArray);
    } else {
      errorArray[index] = false;
      setInputError(errorArray);
    }

    value ? setcontFlag(true) : null;
  }

  function showAlert() {
    alert("Please enter a quantity");
  }

  return (
    <Container>
      <Header>
        <h1>Add Attendees</h1>
        <p>
          Manually add attendees info for complimentary tickets or offline
          payments
        </p>
        <hr />
      </Header>
      <OrderType>
        <label>Order Type:</label>
        <select>
          <option value="Check">Paid with Check</option>
          <option value="Cash">Paid with cash </option>
          <option value="Paypal">Paid directly online with Paypal </option>
          <option value="nonPaypal">Paid directly online non-Paypal </option>
          <option value="Complimentary">Complimentary </option>
          <option value="noPayment">No Payment necessary </option>
          <option value="Voucher">Paid with Voucher </option>
          <option value="CreditCard">Paid directly by Credit Card</option>
          <option value="DebitCard">Paid directly by Debit Card</option>
          <option value="Other">Other</option>
        </select>
        <p>* Eventbrite does not charge any fees for manual orders.</p>
      </OrderType>
      <Tickets>
        <thead className="Title">
          <tr className="rowHead">
            <th className="type" align="left">
              Ticket Type
            </th>
            <th align="center">Sold</th>
            <th align="center">Price*</th>
            <th align="center">Quantity</th>
            <th align="center">Face Value</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="num">General Admission</td>
            <td align="center" className="num">
              0
            </td>
            <td align="center" className="num">
              $0.00
            </td>
            <td align="center" className="tQuantity">
              <TextField
                className="Quantity"
                inputProps={{
                  style: {
                    fontSize: 25,
                    width: 100,
                  },
                }}
                value={inputValue[0]}
                onChange={(event) => handleInputChange(event, 0)}
                error={inputError[0]}
                helperText={inputError[0] ? "Please enter numbers only" : ""}
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
                className="Face"
                size="Normal"
                inputProps={{
                  style: {
                    fontSize: 25,
                    width: 100,
                  },
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                disabled
                value={"55"}
              ></TextField>
            </td>
          </tr>
          <tr>
            <td>General Admission</td>
            <td align="center">0</td>
            <td align="center">$0.00</td>
            <td align="center" className="tQuantity">
              <TextField
                name="x"
                className="Quantity"
                inputProps={{
                  style: {
                    fontSize: 25,
                    width: 100,
                  },
                }}
                value={inputValue[1]}
                onChange={(event) => handleInputChange(event, 1)}
                error={inputError[1]}
                helperText={inputError[1] ? "Please enter numbers only" : ""}
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
                className="Face"
                size="Normal"
                inputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                  style: {
                    fontSize: 25,
                    width: 100,
                  },
                }}
                disabled
                value={"$55"}
              ></TextField>
            </td>
          </tr>
        </tbody>
        <div className="Total">
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
      <Continue>
        <Button
          variant="contained"
          color="primary"
          className="button"
          onClick={!contFlag ? showAlert : null}
        >
          Continue
        </Button>
      </Continue>
      <LearnMore>
        <HelpOutlineOutlinedIcon className="icon" />
        Learn more about
        <a
          href="https://www.eventbrite.com/support/articles/en_US/How_To/how-to-add-attendees-manually?lg=en_US"
          target="_blank"
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
  );
}
