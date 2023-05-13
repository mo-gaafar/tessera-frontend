/**
 * @fileoverview popSummary.jsx is a file that will display the order summary of the tickets that the user has selected
 * @param showInfo is an array of objects that contains the ticket tier name and the quantity of tickets that the user has selected
 * @param total is the total price of the tickets that the user has selected
 * @param OrderTitle is a styled component that will display the title of the order summary
 * @param OrderItem is a styled component that will display the ticket tier name and the quantity of tickets that the user has selected
 * @param InformationPop is a styled component that will display the order summary
 * @returns a styled component that will display the order summary
 * @requires react
 * @requires styled
 * @requires styles/AttendeeInfo.styled
 * @exports PopSummary
 * @author SeifAllah
 *
 *
 */
import react from "react";
import styled from "styled-components";
import {
  OrderTitle,
  OrderItem,
  InformationPop,
} from "./styles/AttendeeInfo.styled";
export default function PopSummary({ showInfo, total }) {
  return (
    <InformationPop>
      <OrderTitle id="1297532asdee72">
        <h2>Order Summary</h2>
      </OrderTitle>
      {showInfo.map((ticketTier, indexTier) => {
        return (
          <OrderItem>
            <div className="name">
              {ticketTier.quantitySold}x{ticketTier.tierName}
            </div>
            <div className="Price">
              ${ticketTier.price * ticketTier.quantitySold}
            </div>
          </OrderItem>
        );
      })}
      <OrderItem id="129753llskf272">
        <div className="name">Total</div>
        <div className="Price">${total}</div>
      </OrderItem>
    </InformationPop>
  );
}
