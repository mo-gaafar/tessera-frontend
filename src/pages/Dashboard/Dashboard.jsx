import Sidebar from '../../components/Sidebar';
import { StyledDashboard } from './styles/Dashboard.styled';
import { StyledNav } from '../LandingPage/styles/Landing.styled';
import NavbarLoggedIn from '../LandingPage/NavbarLoggedIn';
import Navbar from '../LandingPage/NavBar';

const Dashboard = () => {
  const email = localStorage.getItem('email')
    ? localStorage.getItem('email')
    : localStorage.getItem('authEmail');

  return (
    <>
      <StyledNav>
        {email && email !== 'undefined' ? (
          <NavbarLoggedIn creator={true} email={email} />
        ) : (
          <Navbar />
        )}
      </StyledNav>
      <div style={{ display: 'flex' }}>
        <Sidebar event={true} dashboard={true} />
        <StyledDashboard>
          <h1>Dashboard</h1>
          <div className="cards">
            <div className="card"></div>
            <div className="card"></div>
          </div>
        </StyledDashboard>
      </div>
    </>
  );
};

export default Dashboard;
