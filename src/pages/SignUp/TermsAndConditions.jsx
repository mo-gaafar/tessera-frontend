/**
 * @file TermsAndConditions.jsx
 * @description This file contains the TermsAndConditions component and its logic
 * @name TermsAndConditions.jsx
 * @author @Clara
 * @requires react
 * @requires react-router-dom
 * @requires ./styles/TermsAndConditions.styled
 * @exports TermsAndConditions
 *
 */
import React from 'react';
import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';

const Div = styled.div`
  position: relative;

  .overlay {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(57, 54, 79, 0.8);
    z-index: 4;
  }

  .close__modal {
    width: 3rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    height: 3rem;
    cursor: pointer;
  }

  .modal__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 3rem 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    background-color: #fff;
    margin: 20rem 0 0 -34rem;
    .circle {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: #eeedf2;
      border-radius: 50%;
      width: 7rem;
      height: 7rem;
    }
    .TermsTitle {
      font-size: 2.3rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: #1e0a3c;
    }
    .TermsText {
      font-size: 1.5rem;
      font-weight: 400;
      margin-block: 2rem;
      margin-bottom: 4rem;
      max-width: 70ch;
      text-align: center;
    }
    .CancelButton {
      color: #39364f;
      border-color: #a9a8b3;
      background-color: #fff;
      border: 1px solid #000000;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      font-weight: 400;
      padding: 1rem 2rem;
      margin-right: 2rem;
      cursor: pointer;
      margin-bottom: 2rem;
    }
    .AgreeButton {
      background-color: #d1410c;
      border: 1px solid #d1410c;
      border-radius: 0.5rem;
      color: #ffffff;
      font-size: 1.5rem;
      font-weight: 400;
      padding: 1rem 2rem;
      cursor: pointer;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 40em) {
    .modal__content {
      position: absolute;
      top: unset;
      left: unset;
      margin: unset;
      height: 100vh;
      width: 100vw;
      padding: 0;
      .TermsText {
        width: 50ch;
      }
    }
  }
`;

/**
A component that displays the terms and conditions modal.
@param {Object} props - The component props.
@param {Function} props.show - A function to hide the modal.
@param {object} props.data
@returns {JSX.Element} - The terms and conditions modal JSX element.
*/
function TermsandConditions(props) {
  function handleClick() {
    props.show(false);
  }
  async function clickAgree(e) {
    e.preventDefault();
    console.log(props.data);
    const response = await fetch('https://www.tessera.social/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.data),
    });
    const json = await response.json();
  }
  //console.log(props.data.email)

  return (
    <Div>
      <div className="overlay"></div>
      <div className="modal__content">
        <svg
          onClick={handleClick}
          className="close__modal"
          id="cross-chunky_svg__eds-icon--cross-chunky_svg"
          x="0"
          y="0"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
          aria-hidden="true"
        >
          <path
            id="cross-chunky_svg__eds-icon--cross-chunky_base"
            d="M13.4 12l3.5-3.5-1.4-1.4-3.5 3.5-3.5-3.5-1.4 1.4 3.5 3.5-3.5 3.5 1.4 1.4 3.5-3.5 3.5 3.5 1.4-1.4z"
          ></path>
        </svg>

        <svg
          className="circle"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          height="70px"
          width="100px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 27.963 27.963"
          xmlSpace="preserve"
        >
          <g>
            <g id="c129_exclamation">
              <path d="M13.983,0C6.261,0,0.001,6.259,0.001,13.979c0,7.724,6.26,13.984,13.982,13.984s13.98-6.261,13.98-13.984    C27.963,6.259,21.705,0,13.983,0z M13.983,26.531c-6.933,0-12.55-5.62-12.55-12.553c0-6.93,5.617-12.548,12.55-12.548    c6.931,0,12.549,5.618,12.549,12.548C26.531,20.911,20.913,26.531,13.983,26.531z" />
              <polygon points="15.579,17.158 16.191,4.579 11.804,4.579 12.414,17.158   " />
              <path d="M13.998,18.546c-1.471,0-2.5,1.029-2.5,2.526c0,1.443,0.999,2.528,2.444,2.528h0.056c1.499,0,2.469-1.085,2.469-2.528    C16.441,19.575,15.468,18.546,13.998,18.546z" />
            </g>
            <g id="Capa_1_207_"></g>
          </g>
        </svg>
        <h1 className="TermsTitle">Terms and conditions</h1>
        <p className="TermsText">
          I accept the Eventbrite Terms Of Service, Community Guidelines and
          have read the Privacy Policy.
        </p>
        <div className="buttons">
          <button onClick={handleClick} className="CancelButton">
            Cancel
          </button>
          <button className="AgreeButton" onClick={clickAgree}>
            <Link to="/" state={props.data.email}>
              Agree
            </Link>
          </button>
        </div>
      </div>
    </Div>
  );
}

export default TermsandConditions;
