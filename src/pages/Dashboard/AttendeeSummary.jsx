import { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import { StyledDashboard } from './styles/Dashboard.styled';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';
import { StyledAttendeeSummary } from './styles/Dashboard.styled';
const AttendeeSummary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');
    const [data, setData] = useState([
      {
        orderId: '3',
        orderDate: '5/8/23',
        attendeeStatus: 'Attending',
        name: 'mm',
        eventName: 'Event ',
        ticketQuantity: 2,
        ticketType: 'General Admission',
        ticketPrice: '$20.00',
        buyerName: 'm',
        buyerEmail: 'mo@example.com'
      },
      {
        orderId: '1',
        orderDate: '5/8/23',
        attendeeStatus: 'Attending',
        name: 'hh',
        eventName: 'Event ',
        ticketQuantity: 2,
        ticketType: 'General Admission',
        ticketPrice: '$20.00',
        buyerName: 'hh',
        buyerEmail: 'mo@example.com'
      },
      // Add more entries here if needed
    ]);
  
    const [sortConfig, setSortConfig] = useState({ key: 'orderId', direction: 'ascending' });
  
    const handleSort = (key) => {
      let direction = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };
  
    const sortedData = [...data].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
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
            <button>
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
              Export
            </button>
          </div>
          <div className='table-content'>
          <table>
            <thead >
              <tr className='table-header'>
                <th className='head-data' onClick={() => handleSort('orderId')}>Order ID {sortConfig.key === 'orderId' && (sortConfig.direction === 'ascending' ? '▲' : '▼')}</th>
                <th className='head-data'>Order Date</th>
                <th className='head-data'>Attendee Status</th>
                <th className='head-data'>Name</th>
                <th className='head-data'>Event Name</th>
                <th className='head-data'>Ticket Quantity</th>
                <th className='head-data'>Ticket Type</th>
                <th className='head-data'>Ticket Price</th>
                <th className='head-data'>Buyer Name</th>
                <th className='head-data'>Buyer Email</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item, index) => (
                <tr key={index}>
                  <td>{item.orderId}</td>
                  <td>{item.orderDate}</td>
                  <td>{item.attendeeStatus}</td>
                  <td>{item.name}</td>
                  <td>{item.eventName}</td>
                  <td>{item.ticketQuantity}</td>
                  <td>{item.ticketType}</td>
                  <td>{item.ticketPrice}</td>
                  <td>{item.buyerName}</td>
                  <td>{item.buyerEmail}</td>
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
