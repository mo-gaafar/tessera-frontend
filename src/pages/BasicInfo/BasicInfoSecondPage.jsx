import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { WholePage } from './Styles/BasicInfoSecondPage.styled';
export default function Details(){
  return(
    <WholePage>
      <form>
        <div 
        style={
          {
            marginBottom:'32px'
          }
        }>
          <div className='iconsdiv'>
            <i className='mediumI'>
              <svg 
              className='mediumSvg'
              x="0"
              y="0" 
              viewBox="0 0 24 24" 
              xmlSpace="preserve">
                <path
                style={
                  {fill: '#dbdae3'}
                }
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 20h20V4H2v16zm1-1h18V5H3v14z">
                </path>
                <path
                style={
                  {fill: '#dbdae3'}
                }
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5 7C15.1 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5S19 10.9 19 9.5 17.9 7 16.5 7zm0 4c-.8 0-1.5-.7-1.5-1.5S15.7 8 16.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z">
                </path>
                <path
                style={
                  {fill: '#dbdae3'}
                }
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5 13l-.7.8-3.5-3.8-6.4 7H19.1l-3.6-4zm-8.3 3l4.1-4.4 2.7 3 .7.8.7-.8 1.4 1.5H7.2z">
                </path>
              </svg>
            </i>
          </div>
          <div className='informationdiv'>
            <div>
              <h1 className='title'>
                Event Media
              </h1>
              <h2 className='subtitle'>
                Images
              </h2>
              <p className='explainsection'>
              Add photos to show what your event will be about. You can upload up to 10 images.
              </p>
              <div
              style={
                {marginBottom: '24px',
                marginTop: '12px'}
              }>
                <div
                style={
                  {position: 'relative'}
                }>
                  <div>
                    <div
                    style={
                      {position: 'relative', 
                      lineHeight: '0'}
                    }>
                      <div>
                        <div
                        style={
                          {position: 'relative'}}>
                            <div>
                              <div className='imagediv'>
                                <i className='middleI'>
                                <svg 
                                  className='mediumSvg'
                                  x="0"
                                  y="0" 
                                  viewBox="0 0 24 24" 
                                  xmlSpace="preserve">
                                    <path
                                      style={
                                        {fill: '#dbdae3'}
                                      }
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M2 20h20V4H2v16zm1-1h18V5H3v14z">
                                    </path>
                                    <path
                                      style={
                                        {fill: '#dbdae3'}
                                      }
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M16.5 7C15.1 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5S19 10.9 19 9.5 17.9 7 16.5 7zm0 4c-.8 0-1.5-.7-1.5-1.5S15.7 8 16.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z">
                                    </path>
                                    <path
                                      style={
                                        {fill: '#dbdae3'}
                                      }
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M15.5 13l-.7.8-3.5-3.8-6.4 7H19.1l-3.6-4zm-8.3 3l4.1-4.4 2.7 3 .7.8.7-.8 1.4 1.5H7.2z">
                                    </path>
                                </svg>
                                </i>
                                <div className='subtitle'>
                                  Drag and drop an image or
                                </div>
                              </div>
                            </div>
                            <label></label>
                        </div>
                      </div>
                    </div>
                    <ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div 
        style={
          {
            marginBottom:'32px',
            marginTop: '40px'
          }
        }>
          <div className='iconsdiv'>
            <i className='mediumI'>
              <svg 
              className='mediumSvg'
              x="0"
              y="0" 
              viewBox="0 0 24 24" 
              xmlSpace="preserve">
                <path
                style={
                  {fill: '#dbdae3'}
                }
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 21h20v1H2v-1zM4 2v3h1V3h7v15h-2v1h5v-1h-2V3h7v2h1V2H4z">
                </path>
              </svg>
            </i>
          </div>
        </div>
        <div 
        style={
          {
            marginBottom:'32px',
            marginTop: '40px'
          }
        }>
          <div className='iconsdiv'>
            <i className='mediumI'>
              <svg 
              className='mediumSvg'
              x="0"
              y="0" 
              viewBox="0 0 24 24" 
              xmlSpace="preserve">
                <path
                style={
                  {fill: '#dbdae3'}
                }
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z">
                </path>
                <g
                fillRule="evenodd"
                clipRule="evenodd"
                >
                  <path
                  style={
                    {fill: '#dbdae3'}
                  }
                  d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z">
                  </path>
                </g>
              </svg>
            </i>
          </div>
        </div>
      </form>
    </WholePage>
  )
}