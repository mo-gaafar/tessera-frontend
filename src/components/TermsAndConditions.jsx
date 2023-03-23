import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #F2F2F2;
    .circle {
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: #eeedf2;
        border-radius:50%;
        width: auto;
        max-height: 100%;
        

    }
    .TermsTitle {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    .TermsText {
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 2rem;
    }
    .CancelButton {
        color: #39364f;
        border-color: #a9a8b3;
        background-color: #F2F2F2;
        border: 1px solid #000000;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        font-weight: 400;
        padding: 1rem 2rem;
        margin-right: 2rem;
    }
    .AgreeButton {
        background-color:#d1410c;
        border: 1px solid #d1410c;
        border-radius: 0.5rem;
        color: #FFFFFF;
        font-size: 1.5rem;
        font-weight: 400;
        padding: 1rem 2rem;
    }
`;

function TermsandConditions()
{
    return(
        <Div>
            <svg className="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="70px" width="100px" version="1.1" id="Capa_1" viewBox="0 0 27.963 27.963" xml:space="preserve">
                <g>
                    <g id="c129_exclamation">
                        <path d="M13.983,0C6.261,0,0.001,6.259,0.001,13.979c0,7.724,6.26,13.984,13.982,13.984s13.98-6.261,13.98-13.984    C27.963,6.259,21.705,0,13.983,0z M13.983,26.531c-6.933,0-12.55-5.62-12.55-12.553c0-6.93,5.617-12.548,12.55-12.548    c6.931,0,12.549,5.618,12.549,12.548C26.531,20.911,20.913,26.531,13.983,26.531z"/>
                        <polygon points="15.579,17.158 16.191,4.579 11.804,4.579 12.414,17.158   "/>
                        <path d="M13.998,18.546c-1.471,0-2.5,1.029-2.5,2.526c0,1.443,0.999,2.528,2.444,2.528h0.056c1.499,0,2.469-1.085,2.469-2.528    C16.441,19.575,15.468,18.546,13.998,18.546z"/>
                    </g>
                    <g id="Capa_1_207_">
                    </g>
                </g>
            </svg>
            <h1 className="TermsTitle">Terms and conditions</h1>
            <p className="TermsText">I accept the Eventbrite Terms Of Service, Community Guidelines and have read the Privacy Policy.</p>
            <div className="buttons">
                <button className="CancelButton">Cancel</button>
                <button className="AgreeButton">Agree</button>
            </div>
        </Div>
    );
}


export default TermsandConditions;

