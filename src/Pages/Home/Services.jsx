import ServiceCard from "../../components/ServiceCard";
import useServices from "../../Hook/useServices";
import Title from "../../Shared/Title";

const Services = () => {
  const [services,] = useServices();
  console.log(services);
  return (
    <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto py-8">
      <Title
        title="Our Services"
        subtitle="Smart Solutions for Modern Businesses"
      ></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6">
        {services.slice(0,4)?.map((service) => (
          <ServiceCard key={service?._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
