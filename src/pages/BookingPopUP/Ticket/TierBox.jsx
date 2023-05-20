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
import { format } from 'mathjs';
import {
  SelectTicket,
  SelectTickContainer,
  SelectTickName,
  IncrementDecrement,
  SelectTickBottomContainer,
  BottomContainerHead,
} from './Ticket.styled';

import { useState, useEffect } from 'react';
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
  element,
  index,
  setTicketTierdetails,
  ticketsTierdetails,
  setEmpty,
}) {
  /**
   * description: this function is to append the summary
   * @param {Number} newPrice - the new price
   * @returns {Array} - the new summary
   */
  const checkIsEmpty = () => {
    console.log(ticketsTierdetails);

    const isEmpty = ticketsTierdetails.every(tier => tier.ticketCount === 0);
    setEmpty(!isEmpty);
  };
  useEffect(() => {
    checkIsEmpty();
  }, [ticketsTierdetails]);
  const incrementOrder = index => {
    // checkIsEmpty();

    setTicketTierdetails(prevState => {
      const updatedTicketTierdetails = [...prevState];
      // Increment the ticket count for the specified index
      updatedTicketTierdetails[index] = {
        ...updatedTicketTierdetails[index],
        ticketCount:
          updatedTicketTierdetails[index].ticketCount < 50
            ? updatedTicketTierdetails[index].ticketCount + 1
            : updatedTicketTierdetails[index].ticketCount,
      };

      return updatedTicketTierdetails;
    });
  };

  const formatDate = isoDate => {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return formattedDate;
  };

  const decrementOrder = index => {
    setTicketTierdetails(prevState => {
      // Create a copy of the previous state
      const updatedTicketTierdetails = [...prevState];

      // Decrement the ticket count for the specified index
      if (updatedTicketTierdetails[index].ticketCount > 0) {
        updatedTicketTierdetails[index] = {
          ...updatedTicketTierdetails[index],
          ticketCount: updatedTicketTierdetails[index].ticketCount - 1,
        };
      }
      return updatedTicketTierdetails;
    });
    // checkIsEmpty();
  };

  return (
    <SelectTicket>
      <SelectTickContainer className="focus">
        <SelectTickName>{element.tierName}</SelectTickName>
        <IncrementDecrement>
          <div
            className={
              element.ticketCount == element.maxCapacity
                ? 'incdec'
                : 'incdecactive'
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"
              ></path>
            </svg>
          </div>
          <div className="Quantity">
            {index === 0 ? element.ticketCount : element.ticketCount}
          </div>
          <div
            className={element.ticketCount == 0 ? 'incdec' : 'incdecactive'}
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
            {isNaN(element.price) ? '' : '$'}
            {element.price.slice(0, 1) === '$'
              ? element.price.slice(1)
              : element.price}
          </p>

          <p className="Sale">Sales end on {formatDate(element.endSelling)}</p>
        </BottomContainerHead>
      </SelectTickBottomContainer>
    </SelectTicket>
  );
}
