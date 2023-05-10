/**
 * @file TierBox.jsx
 * @name TierBox.jsx
 * @author @SeifAllah
 * @requires react
 * @requires ./Ticket.styled
 * @exports TierBox
 * @description This file contains the TierBox components and its logic

 * 
 * 
 */

import {
  SelectTicket,
  SelectTickContainer,
  SelectTickName,
  IncrementDecrement,
  SelectTickBottomContainer,
  BottomContainerHead,
} from "./Ticket.styled";

import { useState } from "react";
/**
 * description: this function is the TierBox component and returns html elements that contain the ticket tier details
 * @param {Object} element - the elemnt of the tickettierdetails
 * @param {Function} setTicketTierdetails - the function to set the tickettierdetails
 * @param {Number} index - the index of the element
 * @param {Array} ticketsTierdetails - the array of the tickettierdetails
 * @param {object} summary - the summary
 * @param {Function} setSummary - the function to set the summary
 * @param {Function} setEmpty - the function to set the empty
 * @param {Number} total - the total of the tickets
 *
 * @returns {JSX.Element} - the JSX of the TierBox
 */
export default function TierBox({
  number,
  element,
  setTicketTierdetails,
  index,
  ticketsTierdetails,
  summary,
  setSummary,
  setEmpty,
  total,
}) {
  const [count, setCount] = useState(0);
  const [countactual, setCountActual] = useState(0);
  const [countDecrement, setCountDecrement] = useState(0);
  console.log("element")
  console.log(element)
  /**
   * description: this function is to append the summary
   * @param {Number} newPrice - the new price
   * @returns {Array} - the new summary
   */
  const summaryappend = (newPrice) => {
    const newState = [...summary];
    let flag = false;

    newState.forEach((elementS, i) => {
      if (i == 0) {
        //flag = true;
        //elementS.sumTicketCount = element.ticketCount;
        // elementS.sumTicketCount = number;
        //elementS.sumTicketPrice = newPrice;

        elementS.ticketCount === 0 && newState.splice(i, 1);
      }
      if (elementS.sumId == element.id) {
        flag = true;
        elementS.sumTicketCount = element.ticketCount;
        // elementS.sumTicketCount = number;
        elementS.sumTicketPrice = newPrice;

        elementS.ticketCount === 0 && newState.splice(i, 1);
      }
      // if (i == 0) {
      //   //flag = true;
      //   //elementS.sumTicketCount = element.ticketCount;
      //   // elementS.sumTicketCount = number;
      //   elementS.sumTicketPrice = newPrice;

      //   elementS.ticketCount === 0 && newState.splice(i, 1);
      // }
    });

    if (!flag) {
      console.log("innn")
      const newValue = [
        ...newState,
        {
          sumId: element.id,
          sumTicketCount: element.ticketCount,
          sumTicketPrice: newPrice,
          sumTierName: element.tierName,
        },
      ];
      setSummary(newValue);
      return;
    }
    setSummary(newState);
    console.log("summary")
    console.log(summary)
  };
  /**
   * description: this function is to increment the order
   * @param {Number} i - the index of the element
   * @returns {Array} - the new tickettierdetails
   */
  const incrementOrder = (i) => {
    const currentCapacity = element.maxCapacity - element.numberOfTicketsSold;

    setCount((prevCount) => {
      return prevCount == currentCapacity ? prevCount : prevCount + 1;
    });

    const newState = [...ticketsTierdetails];
    newState.forEach((item, index) => {
      if (index === i) {
        item.ticketCount = count;
        setCountDecrement(count);
      }
    });
    summaryappend(
      count * element.price.slice(0, 1) === "$"
        ? element.price.slice(1)
        : element.price
    );
    setTicketTierdetails(newState);
    //console.log(summary + " WZHAAR YA KALB");
    summary.length === 0 ? setEmpty(true) : setEmpty(false);
  };
  /**
   * description: this function is to decrement the order
   * @param {Number} i - the index of the element
   * @returns {Array} - the new tickettierdetails
   */
  const decrementOrder = (i) => {
    setCountDecrement((prevCount) =>
      prevCount === 0 ? prevCount : prevCount - 1
    );

    const newState = [...ticketsTierdetails];
    newState.forEach((item, index) => {
      if (index === i) {
        item.ticketCount = countDecrement;
        setCount(countDecrement);
      }
    });

    summaryappend(
      countDecrement * element.price.slice(0, 1) === "$"
        ? element.price.slice(1)
        : element.price
    );

    summary.length === 0 ? setEmpty(true) : setEmpty(false);
  };

  return (
    <SelectTicket>
      <SelectTickContainer className="focus">
        <SelectTickName>{element.tierName}</SelectTickName>
        <IncrementDecrement>
          <div
            className={
              element.ticketCount == element.maxCapacity
                ? "incdec"
                : "incdecactive"
            }
            onClick={() => incrementOrder(index)}
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
            {index ===0 ?
            element.ticketCount
            :element.ticketCount
            }
            
            {/* {element.ticketCount} */}
            </div>
          <div
            className={element.ticketCount == 0 ? "incdec" : "incdecactive"}
            onClick={() => decrementOrder(index)}
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
          <p className="Fee">
            $
            {element.price.slice(0, 1) === "$"
              ? element.price.slice(1)
              : element.price}
          </p>
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
}
