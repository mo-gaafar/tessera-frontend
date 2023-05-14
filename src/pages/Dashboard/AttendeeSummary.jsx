/**
 * @file AttendeSummary.jsx
 * @name AttendeSummary.jsx
 * @author @MoSaeed15
 * @requires react
 * @requires react-router-dom
 * @exports Organize
 * @description This file contains the AttendeSummary component and its logic
 */
import { useState, useEffect } from 'react';
import Sidebar from '../../components/Sidebar';
import { StyledDashboard } from './styles/Dashboard.styled';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';
import { Link, useParams } from 'react-router-dom';

import { StyledAttendeeSummary } from './styles/Dashboard.styled';
const AttendeeSummary = () => {
  /**
   * State to store the search term entered by the user.
   * @type {[string, function]} An array with two elements, the search term and a function to update it.
   */
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Get email from local storage, used for checking if user is logged in.
   * @type {string} The user's email, stored in local storage.
   */
  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');

  /**
   * Get authentication token from local storage.
   * @type {string} The authentication token, stored in local storage.
   */
  const token = localStorage.getItem('token');

  /**
   * Get event ID from URL parameter, or from local storage if not in URL.
   * @type {string} The event ID to fetch data for.
   */
  const eventID = useParams().eventID
    ? useParams().eventID
    : localStorage.getItem('eventID');

  /**
   * State to store the fetched attendee data for the current event.
   * @type {[Array, function]} An array with two elements, the attendee data array and a function to update it.
   */
  const [data, setData] = useState([]);

  /**
   * Fetch attendee data for the current event when the component mounts.
   * @returns {void} Nothing is returned.
   */
  useEffect(() => {
    /**
     * Async function to fetch attendee data for the current event using the API.
     * @returns {Promise} A promise containing the fetched attendee data.
     */
    const getData = async () => {
      const result = await fetch(
        `https://www.tessera.social/api/dashboard/reportJason/attendees-list/${eventID}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await result.json();
      setData(data.attendeeSummary);
    };

    getData();
  }, []);

  /**
   * State to store the current sorting configuration for the table.
   * @type {[Object, function]} An array with two elements, the sorting configuration object and a function to update it.
   */
  const [sortConfig, setSortConfig] = useState({
    key: 'orderId',
    direction: 'ascending',
  });

  /**
   * Event handler for sorting the table by a specified key.
   * @param {string} key The key to sort the table by.
   * @returns {void} Nothing is returned.
   */
  const handleSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  /**
   * Sort the attendee data array by the current sorting configuration.
   * @type {Array} The sorted attendee data array.
   */
  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const exportCSV = async () => {
    const response = await fetch(
      `https://www.tessera.social/api/dashboard/report/attendees-list/${eventID}`
    );
    const data = await response.text();
    const blob = new Blob([data], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'attendees-summary.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    console.log(data);
  };

  return (
    <>
      <StyledNav>
        {email && email !== 'undefined' ? (
          <NavbarLoggedIn creator={true} email={email} />
        ) : (
          <Navbar />
        )}
      </StyledNav>
      <StyledAttendeeSummary>
        <Sidebar hide={true} />
        <div className="attendee">
          <h1>Attendee Summary Report</h1>
          <div className="search">
            <input type="" placeholder="Search for any events with sales" />
            <button onClick={exportCSV}>
              <svg
                id="share-ios-chunky_svg__eds-icon--share-ios-chunky_svg"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                xml:space="preserve"
              >
                <path
                  id="share-ios-chunky_svg__eds-icon--share-ios-chunky_base"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 16v2H6v-2H4v4h16v-4z"
                ></path>
                <path
                  id="share-ios-chunky_svg__eds-icon--share-ios-chunky_arrow"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 4L7 9l1.4 1.4L11 7.8V16h2V7.8l2.6 2.6L17 9l-5-5z"
                ></path>
              </svg>
              <small>Export</small>
            </button>
          </div>
          <div className="table-content">
            <table>
              <thead>
                <tr className="table-header">
                  <th
                    className="head-data"
                    onClick={() => handleSort('orderId')}
                  >
                    Order ID
                    {sortConfig.key === 'orderId' &&
                      (sortConfig.direction === 'ascending' ? '▲' : '▼')}
                  </th>
                  <th className="head-data">Order Date</th>
                  <th className="head-data">Attendee Status</th>
                  <th className="head-data">Name</th>
                  <th className="head-data">Event Name</th>
                  <th className="head-data">Ticket Quantity</th>
                  <th className="head-data">Ticket Type</th>
                  <th className="head-data">Ticket Price</th>
                  <th className="head-data">Buyer Name</th>
                  <th className="head-data">Buyer Email</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.OrderId}</td>
                    <td>{item.OrderDate}</td>
                    <td>{item.Attending}</td>
                    <td>{item['Attendee Name']}</td>
                    <td>{item['Event name']}</td>
                    <td>{item['Ticket Quantity']}</td>
                    <td>{item['Ticket Type']}</td>
                    <td>{item['Ticket Price']}</td>
                    <td>{item['Buyer name']}</td>
                    <td>{item['Buyer email']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </StyledAttendeeSummary>
    </>
  );
};

export default AttendeeSummary;
