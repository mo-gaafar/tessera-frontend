import {
  SelectTicket,
  SelectTickContainer,
  SelectTickName,
  IncrementDecrement,
  SelectTickBottomContainer,
  BottomContainerHead,
} from './Ticket.styled';

import { useState } from 'react';

export default function TierBox({ element }) {
  const [count, setCount] = useState(0);

  const incrementOrder = () => {
    setCount(prevCount => (prevCount = prevCount + 1));
  };

  return (
    <SelectTicket>
      <SelectTickContainer className="focus">
        <SelectTickName>{element.tierName}</SelectTickName>
        <IncrementDecrement>
          <div
            className={
              element.numberOfTicketsSold == element.maxCapacity
                ? 'incdec'
                : 'incdecactive'
            }
            onClick={() => incrementOrder()}
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
          <div className="Quantity">{count}</div>
          <div
            className={
              element.numberOfTicketsSold == 0 ? 'incdec' : 'incdecactive'
            }
            onClick={() => decrementOrder()}
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
}
