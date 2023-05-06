import Sidebar from '../../components/Sidebar';
import { StyledDashboard } from './styles/Dashboard.styled';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <StyledDashboard></StyledDashboard>
    </div>
  );
};

export default Dashboard;
