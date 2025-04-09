import { Helmet } from "react-helmet-async";
import Banner from "../components/HomeLayout/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Flow Manage</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="dark:bg-metal-800">
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
