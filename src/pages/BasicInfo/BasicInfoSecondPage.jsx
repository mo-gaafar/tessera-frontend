//DONE
//most of the UI only missing the description box and summary validation
import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { WholePage } from './Styles/BasicInfoSecondPage.styled';
export default function Details({ onPhotoSelected, responseBody }) {
  const [summaryvalue, setSummaryValue] = React.useState('');
  const [focused, setFocused] = React.useState(false);
  const [inputError, setInputError] = useState('');
  const [photo, setPhoto] = useState(null);
  const inputRef = useRef(null);

  const handleButtonClick = e => {
    inputRef.current.click();
    e.preventDefault();
  };
  //to upload the photo
  const handlePhotoChange = event => {
    const selectedPhoto = event.target.files[0];
    setPhoto(selectedPhoto);
    onPhotoSelected(selectedPhoto);
    event.preventDefault();
  };
  const handleDeleteClick = e => {
    setPhoto(null);
    onPhotoSelected(null);
    e.preventDefault();
  };
  const handleChange = event => {
    setSummaryValue(event.target.value);
    if (event.target.value.trim() === '') {
      setInputError('Summary is required');
    } else {
      setInputError('');
    }
  };
  const handleFocus = () => {
    setFocused(true);
  };
  const getValidationClassName = () => {
    if (inputError) {
      return 'red-text';
    } else if (focused) {
      return 'blue-text';
    }
    return '';
  };
  const saveButtonStyle = {
    backgroundColor: '#d1410c',
    fill: '#fff',
    color: 'white',
    borderColor: '#d1410c',
  };
  return (
    <WholePage>
      <div className="wholepage">
        <form>
          <div className="iconsdiv" style={{ marginBottom: '32px' }}>
            <i className="largeI">
              <svg
                className="largeSvg"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                xmlSpace="preserve"
              >
                <path
                  style={{ fill: '#dbdae3' }}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 20h20V4H2v16zm1-1h18V5H3v14z"
                ></path>
                <path
                  style={{ fill: '#dbdae3' }}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5 7C15.1 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5S19 10.9 19 9.5 17.9 7 16.5 7zm0 4c-.8 0-1.5-.7-1.5-1.5S15.7 8 16.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
                ></path>
                <path
                  style={{ fill: '#dbdae3' }}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5 13l-.7.8-3.5-3.8-6.4 7H19.1l-3.6-4zm-8.3 3l4.1-4.4 2.7 3 .7.8.7-.8 1.4 1.5H7.2z"
                ></path>
              </svg>
            </i>
          </div>
          <div className="informationdiv">
            <div>
              <h1 className="title">Event Media</h1>
              <h2 className="subtitle">Images</h2>
              <p className="explainsection">
                Add photos to show what your event will be about. You can upload
                up to 10 images.
              </p>
              <div style={{ marginBottom: '24px', marginTop: '12px' }}>
                <div style={{ position: 'relative' }}>
                  <div>
                    <div style={{ position: 'relative', lineHeight: '0' }}>
                      <div>
                        <div style={{ position: 'relative' }}>
                          <div>
                            <div className="imagediv">
                              {photo && (
                                <>
                                  <img
                                    src={URL.createObjectURL(photo)}
                                    alt="Selected photo"
                                  />
                                </>
                              )}
                              <i className="middleI">
                                <svg
                                  className="largeSvg"
                                  x="0"
                                  y="0"
                                  viewBox="0 0 24 24"
                                  xmlSpace="preserve"
                                >
                                  <path
                                    style={{ fill: '#dbdae3' }}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M2 20h20V4H2v16zm1-1h18V5H3v14z"
                                  ></path>
                                  <path
                                    style={{ fill: '#dbdae3' }}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M16.5 7C15.1 7 14 8.1 14 9.5s1.1 2.5 2.5 2.5S19 10.9 19 9.5 17.9 7 16.5 7zm0 4c-.8 0-1.5-.7-1.5-1.5S15.7 8 16.5 8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"
                                  ></path>
                                  <path
                                    style={{ fill: '#dbdae3' }}
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.5 13l-.7.8-3.5-3.8-6.4 7H19.1l-3.6-4zm-8.3 3l4.1-4.4 2.7 3 .7.8.7-.8 1.4 1.5H7.2z"
                                  ></path>
                                </svg>
                              </i>
                              <div className="subtitle">
                                Drag and drop an image or
                              </div>
                              <div className="picturebuttons">
                                <div className="buttonsflex">
                                  <input
                                    type="file"
                                    onChange={handlePhotoChange}
                                    accept="image/*"
                                    ref={inputRef}
                                    style={{ display: 'none' }}
                                  />
                                  <button
                                    className="buttons"
                                    onClick={handleButtonClick}
                                  >
                                    <i className="smallI">
                                      <svg
                                        className="smallSvg"
                                        x="0"
                                        y="0"
                                        viewBox="0 0 24 24"
                                        xmlSpace="preserve"
                                      >
                                        <path d="M6 18h12V6H6v12zM4 4h16v16H4V4z"></path>
                                        <path d="M17 9.5c0-.8-.7-1.5-1.5-1.5S14 8.7 14 9.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5z"></path>
                                        <path d="M17 16l-2.7-3-1.3 1-2-2.9L7 16h6.9z"></path>
                                      </svg>
                                    </i>
                                    <span className="buttonspan">
                                      Upload image
                                    </span>
                                  </button>
                                  <div>
                                    <button className="buttons">
                                      <i className="smallI">
                                        <svg
                                          className="smallSvg"
                                          x="0"
                                          y="0"
                                          viewBox="0 0 24 24"
                                          xmlSpace="preserve"
                                        >
                                          <circle
                                            cx="950"
                                            cy="950"
                                            r="950"
                                            fill="#7D2AE7"
                                          ></circle>
                                          <circle
                                            cx="950"
                                            cy="950"
                                            r="950"
                                            fill="url(#canva-logo_svg__paint1_radial)"
                                          ></circle>
                                          <circle
                                            cx="950"
                                            cy="950"
                                            r="950"
                                            fill="url(#canva-logo_svg__paint2_radial)"
                                          ></circle>
                                          <circle
                                            cx="950"
                                            cy="950"
                                            r="950"
                                            fill="url(#canva-logo_svg__paint3_radial)"
                                          ></circle>
                                          <path d="M1360.14 1144.88c-7.84 0-14.74 6.62-21.92 21.08-81.08 164.41-221.12 280.74-383.174 280.74-187.38 0-303.419-169.15-303.419-402.83 0-395.834 220.548-624.697 414.263-624.697 90.52 0 145.8 56.885 145.8 147.41 0 107.439-61.04 164.324-61.04 202.216 0 17.009 10.58 27.308 31.56 27.308 84.29 0 183.22-96.855 183.22-233.682 0-132.669-115.47-230.186-309.18-230.186-320.145 0-604.665 296.804-604.665 707.471 0 317.88 181.522 527.94 461.601 527.94 297.274 0 469.164-295.77 469.164-391.77 0-21.26-10.87-31-22.21-31z"></path>
                                          <defs>
                                            <radialGradient
                                              cx="0"
                                              cy="0"
                                              r="1"
                                              gradientUnits="userSpaceOnUse"
                                              gradientTransform="rotate(-49.416 2013.483 443.185) scale(1469.49)"
                                            >
                                              <stop stopColor="#6420FF"></stop>
                                              <stop
                                                offset="1"
                                                stopOpacity="0"
                                                stopColor="#6420FF"
                                              ></stop>
                                            </radialGradient>
                                            <radialGradient
                                              cx="0"
                                              cy="0"
                                              r="1"
                                              gradientUnits="userSpaceOnUse"
                                              gradientTransform="rotate(54.703 42.717 594.194) scale(1657.12)"
                                            >
                                              <stop stopColor="#00C4CC"></stop>
                                              <stop
                                                offset="1"
                                                stop-opacity="0"
                                                stopColor="#00C4CC"
                                              ></stop>
                                            </radialGradient>
                                            <radialGradient
                                              cx="0"
                                              cy="0"
                                              r="1"
                                              gradientUnits="userSpaceOnUse"
                                              gradientTransform="matrix(1023.00018 -1030.00171 473.71139 470.4913 367 1684)"
                                            >
                                              <stop stopColor="#6420FF"></stop>
                                              <stop
                                                offset="1"
                                                stop-opacity="0"
                                                stopColor="#6420FF"
                                              ></stop>
                                            </radialGradient>
                                            <radialGradient
                                              cx="0"
                                              cy="0"
                                              r="1"
                                              gradientUnits="userSpaceOnUse"
                                              gradientTransform="rotate(66.52 193.341 720.338) scale(1495.86 2505.9)"
                                            >
                                              <stop stopColor="#00C4CC"></stop>
                                              <stop
                                                offset="1"
                                                stop-opacity="0"
                                                stopColor="#00C4CC"
                                              ></stop>
                                            </radialGradient>
                                          </defs>
                                        </svg>
                                      </i>
                                      <span className="buttonspan">
                                        Design With Canva
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button
                              className="deletebutton"
                              style={{
                                border: 'none',
                                outline: 'none',
                                backgroundColor: 'white',
                                color: 'black',
                                width: '40px',
                                height: '20px',
                              }}
                              onClick={handleDeleteClick}
                            >
                              X
                            </button>
                          </div>
                          <label></label>
                        </div>
                      </div>
                    </div>
                    <ul className="ulstyle">
                      <li className="listyle">
                        Recommended image size: 2160 x 1080px
                      </li>
                      <li className="listyle">Maximum file size: 10MB</li>
                      <li className="listyle">
                        Supported image files: JPEG or PNG
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginBottom: '32px',
              marginTop: '40px',
            }}
          >
            <div className="iconsdiv">
              <i className="largeI">
                <svg
                  className="largeSvg"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                  xmlSpace="preserve"
                >
                  <path
                    style={{ fill: '#dbdae3' }}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 21h20v1H2v-1zM4 2v3h1V3h7v15h-2v1h5v-1h-2V3h7v2h1V2H4z"
                  ></path>
                </svg>
              </i>
            </div>
            <div className="informationdiv">
              <div>
                <h1 className="title">Summary</h1>
                <p className="explainsection">
                  Grab people's attention with a short description about your
                  event. Attendees will see this at the top of your event page.
                  (140 characters max)
                  <a className="links">See examples</a>
                </p>
                <div style={{ marginTop: '16px' }}>
                  <div style={{ marginBottom: '4px' }}>
                    <div className="summaryboxflex">
                      <div className="summaryboxflex2">
                        <div className="summaryplaceholder">
                          <label
                            className={`summarylabel ${getValidationClassName()}`}
                          >
                            <span className="summaryspan">Summary</span>
                            <span className="starspan">
                              <span className="starspan">*</span>
                            </span>
                          </label>
                        </div>
                        <textarea
                          className={`textarea ${
                            focused ? 'blue-border' : ''
                          } ${inputError ? 'red-border' : ''}`}
                          role="textbox"
                          maxLength="140"
                          placeholder="Write a short event summary to get attendees excited."
                          value={summaryvalue}
                          onChange={handleChange}
                          onFocus={() => setFocused(true)}
                          onBlur={() => setFocused(false)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="undersummarybox">
                    {inputError && <div className="error">{inputError}</div>}
                    <div className="characterslimitdiv">
                      <aside className="aside">{summaryvalue.length}/140</aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginBottom: '32px',
                marginTop: '40px',
              }}
            >
              <div className="iconsdiv">
                <i className="largeI">
                  <svg
                    className="largeSvg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <path
                      style={{ fill: '#dbdae3' }}
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 2v3h1V3h5v10H6v1h5v-1H9V3h5v2h1V2H2z"
                    ></path>
                    <g fillRule="evenodd" clipRule="evenodd">
                      <path
                        style={{ fill: '#dbdae3' }}
                        d="M15 9h7v1h-7zM15 13h7v1h-7zM6 17h16v1H6zM6 21h16v1H6z"
                      ></path>
                    </g>
                  </svg>
                </i>
              </div>
              <div className="informationdiv">
                <div>
                  <h1 className="title">Description</h1>
                  <p className="explainsection">
                    Add more details to your event like your schedule, sponsors,
                    or featured guests.
                    <a className="links">Learn more</a>
                  </p>
                  <div style={{ marginTop: '20px' }}>
                    <div>
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            position: 'relative',
                            marginTop: '20px',
                          }}
                        >
                          <div
                            style={{
                              width: ' 100%',
                              WebkitBoxFlex: '1',
                              flex: '1',
                            }}
                          >
                            <div>
                              <div>
                                <section style={{ minWidth: '284px' }}>
                                  <header className="descriptionheader">
                                    <div className="leftheader">
                                      <div>
                                        <div
                                          style={{
                                            position: 'relative',
                                            display: 'inline-block',
                                          }}
                                        >
                                          <span
                                            style={{
                                              margin: '3px 0',
                                              display: 'inline-block',
                                            }}
                                          >
                                            <button className="smallbuttons">
                                              <i className="mediumI">
                                                <svg className="mediumSvg">
                                                  <path d="M8 19.5H6v-4H4v-2h6v2H8v4zm-1-15h13v4h-2v-2h-4v13h-2v-13H8v2H6v-4h1z"></path>
                                                </svg>
                                              </i>
                                            </button>
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="rightheader">
                                      <div className="emptysmallbox">
                                        <hr
                                          style={{
                                            display: 'inline',
                                            width: '1px',
                                            height: '100%',
                                            backgroundColor: '#eeedf2',
                                          }}
                                        ></hr>
                                      </div>
                                      <div
                                        style={{
                                          display: 'inline-block',
                                        }}
                                      >
                                        <span
                                          style={{
                                            margin: '3px 0',
                                            display: 'inline-block',
                                          }}
                                        >
                                          <button className="smallbuttons">
                                            <i className="mediumI">
                                              <svg className="mediumSvg">
                                                <path d="M8.9 12.9h3c2.1 0 3.3.6 3.3 2.2 0 1.5-.9 2.2-3 2.2H8.9v-4.4zm0-6.1h2.9c2.1 0 3 .5 3 2s-1 2-3 2H8.9v-4zm3.5 12.6c3 0 5.2-1.3 5.2-4.1 0-2.3-1.2-3.3-3.1-3.6 1.5-.3 2.6-1.3 2.6-3.4 0-2.7-2.2-3.7-5.2-3.7H6.4v14.8h6z"></path>
                                              </svg>
                                            </i>
                                          </button>
                                        </span>
                                        <span
                                          style={{
                                            margin: '3px 0',
                                            display: 'inline-block',
                                          }}
                                        >
                                          <button className="smallbuttons">
                                            <i className="mediumI">
                                              <svg className="mediumSvg">
                                                <path d="M20 15.5V7h-7v2h5v6h-5v2h7z"></path>
                                                <path d="M9 11h6v2H9z"></path>
                                                <path d="M4 15.5V7h7v2H6v6h5v2H4v-1.5z"></path>
                                              </svg>
                                            </i>
                                          </button>
                                        </span>
                                      </div>
                                      <div className="emptysmallbox">
                                        <hr
                                          style={{
                                            display: 'inline',
                                            width: '1px',
                                            height: '100%',
                                            backgroundColor: '#eeedf2',
                                          }}
                                        ></hr>
                                      </div>
                                      <div
                                        style={{
                                          display: 'inline-block',
                                        }}
                                      >
                                        <span
                                          style={{
                                            margin: '3px 0',
                                            display: 'inline-block',
                                          }}
                                        >
                                          <button className="smallbuttons">
                                            <i className="mediumI">
                                              <svg className="mediumSvg">
                                                <path d="M7.9 9v1.8l-2.2.9h2.2V13h-4v-1.8l2.2-.9H3.9V9h4zm0 6v1.3L7 17l.9.7V19h-4v-1.3h2.2l-.9-.7.9-.7H3.9V15h4zm2.2-10h10v2h-10V5zm0 6h10v2h-10v-2zm0 6h10v2h-10v-2zM6.6 3v2.7h1.3V7h-4V5.7h1.3V4.3H3.9v-.5L5.2 3h1.4z"></path>
                                              </svg>
                                            </i>
                                          </button>
                                        </span>
                                        <span
                                          style={{
                                            margin: '3px 0',
                                            display: 'inline-block',
                                          }}
                                        >
                                          <button className="smallbuttons">
                                            <i className="mediumI">
                                              <svg className="mediumSvg">
                                                <path d="M4 5h2v2H4V5zm0 6h2v2H4v-2zm0 6h2v2H4v-2zM8 5h12v2H8V5zm0 6h12v2H8v-2zm0 6h12v2H8v-2z"></path>
                                              </svg>
                                            </i>
                                          </button>
                                        </span>
                                      </div>
                                    </div>
                                  </header>
                                  <main className="descriptionbox">
                                    <div
                                      style={{
                                        outline: 'none',
                                        whiteSpace: 'pre-wrap',
                                        overflowWrap: 'break-word',
                                        WebkitUserModify:
                                          'read-write-plaintext-only',
                                        padding: '16px 28px',
                                        minHeight: '161px',
                                        borderTopLeftRadius: '0',
                                        borderTopRightRadius: '0',
                                        display: 'block',
                                        width: '100%',
                                        height: '100%',
                                        boxSizing: 'border-box',
                                        backgroundColor: '#fff',
                                        borderRadius: '2px',
                                        border: '0',
                                        overflow: 'visible',
                                        WebkitAppearance: 'none',
                                      }}
                                      // value={descriptionvalue}
                                      onChange={handleChange}
                                      onFocus={handleFocus}
                                      onBlur={() => setFocused(false)}
                                    >
                                      <p className="descriptionp" data-key="1">
                                        <span data-key="2">
                                          <span data-offset-key="2:0">
                                            <span data-slate-zero-width="n">
                                              ﻿
                                            </span>
                                          </span>
                                        </span>
                                      </p>
                                    </div>
                                  </main>
                                </section>
                              </div>
                            </div>
                          </div>
                          <div className="trashcan">
                            <span
                              style={{
                                display: 'inline-block',
                              }}
                            >
                              <button className="smallbuttons">
                                <i className="mediumI">
                                  <svg className="mediumSvg">
                                    <path d="M7 19h10V8H7v11z"></path>
                                    <path d="M18 5h-3l-1-1h-4L9 5H6v2h12z"></path>
                                  </svg>
                                </i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: '24px',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                  >
                    <div className="buttondiv1">
                      <div className="buttondiv2">
                        <button className="horizontalbuttons">Add Text</button>
                      </div>
                    </div>
                    <div className="buttondiv1">
                      <div className="buttondiv2">
                        <button className="horizontalbuttons">Add Image</button>
                      </div>
                    </div>
                    <div className="buttondiv1">
                      <div className="buttondiv2">
                        <button className="horizontalbuttons">Add Video</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="fixeddiv">
        <div className="fixedinnerdiv">
          <div className="fixedbuttondiv">
            <div>
              <button className="usedbutton" style={{ marginRight: 16 }}>
                Discard
              </button>
              <button className="usedbutton" style={saveButtonStyle}>
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </WholePage>
  );
}
