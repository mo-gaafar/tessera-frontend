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
  function getData() {}

  return (
    <Container id="129758shf3272">
      {console.log(localStorage.getItem("token") + " habebby")}
      <Header id="12975374hdd272">
        <h1>Add Attendees</h1>
        <p>
          Manually add attendees info for complimentary tickets or offline
          payments
        </p>
        <hr />
      </Header>
      <OrderType id="12975jfug73272">
        <label>Order Type:</label>
        <select id="1297ir8jds53272">
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
                id="1297s8fhf53272"
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
                id="12979jfff3353272"
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
          <tr id="1297532sij9r372">
            <td>General Admission</td>
            <td align="center">0</td>
            <td align="center">$0.00</td>
            <td align="center" className="tQuantity">
              <TextField
                id="129753a9jfng272"
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
                id="1297532djf8he72"
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
          onClick={!contFlag ? showAlert : null}
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
  );
}
