import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  return (
    <div className="flex">
      <Helmet>
        <title>Dashboard | Flow Manage</title>
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <div className="w-60 bg-success-400 min-h-screen">Side bar <br/> Rahat</div>
      <div className="w-full bg-primary-400">Container</div>
    </div>
  );
};

export default Dashboard;
