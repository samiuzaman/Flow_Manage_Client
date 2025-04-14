import { Button } from "keep-react";
import ServiceCard from "../../components/ServiceCard";
import useServices from "../../Hook/useServices";
import Title from "../../Shared/Title";
import { Link } from "react-router-dom";

const Services = () => {
  const [services] = useServices();
  console.log(services);
  return (
    <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto py-8">
      <Title
        title="Our Services"
        subtitle="Smart Solutions for Modern Businesses"
      ></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
        {services.slice(0, 4)?.map((service) => (
          <ServiceCard key={service?._id} service={service}></ServiceCard>
        ))}
      </div>
      <Link className="flex justify-center items-center mt-8">
        <Button
          variant="outline"
          className="bg-[#0B89CA] text-white hover:text-white border-white"
        >
          Explore More ➡
        </Button>
      </Link>
    </div>
  );
};

export default Services;
