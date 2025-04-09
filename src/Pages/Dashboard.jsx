import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | Flow Manage</title>
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
