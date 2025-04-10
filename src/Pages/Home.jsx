import { Helmet } from "react-helmet-async";
import Banner from "../components/HomeLayout/Banner";
import useServices from "../Hook/useServices";
import useReviews from "../Hook/useReviews";

const Home = () => {
  const [services] = useServices();
  const [reviews] = useReviews();
  console.log("All Services: ", services);
  console.log("All Reviews: ", reviews);
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
