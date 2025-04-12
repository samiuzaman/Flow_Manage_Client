import { Button, CardContent } from "keep-react";
import {Link} from "react-router-dom"

const ServiceCard = ({ service }) => {
  const {
    _id,
    image,
    title,
    category,
    min_price,
    total_clients,
    rating,
    technologies,
    features,
    team,
  } = service || {};
  return (
    <div>
      <div className="h-full w-full border-2 rounded-lg shadow-xl border-white">
        <div>
          <img
            src={image}
            className="h-48 rounded-t-xl"
            alt="image"
            width={600}
            height={300}
          />
        </div>
        <CardContent className="space-y-2">
          <h3 className="text-xl font-medium min-h-14 mb-4">{title}</h3>
          <p className="text-metal-700">Category: {category}</p>
          <p className="text-metal-700">Price: {min_price}</p>
          <p className="text-metal-700">Total Clients: {total_clients}</p>
          {/* <p>
            Technology :{" "}
            {technologies?.map((technologie) => (
              <span>{technologie}, </span>
            ))}{" "}
          </p> */}
          <Link to={`/details/${_id}`}>
            <Button
              variant="outline"
              className="w-full mt-2 hover:bg-[#0B89CA] hover:text-white"
            >
              Details
            </Button>
          </Link>
        </CardContent>
      </div>
    </div>
  );
};

export default ServiceCard;
