import { Helmet } from "react-helmet-async";
import useReviews from "../../Hook/useReviews";
import Banner from "./Banner";
import Services from "./Services";
import Newsletter from "./Newsletter";
import Feedback from "./Feedback";

const Home = () => {
  const [reviews] = useReviews();

  console.log("All Reviews: ", reviews);
  return (
    <div>
      <Helmet>
        <title>Home | Flow Manage</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="bg-[#F4F5FA] dark:bg-metal-800">
        <Banner></Banner>
        <Services></Services>
        <Feedback></Feedback>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;
