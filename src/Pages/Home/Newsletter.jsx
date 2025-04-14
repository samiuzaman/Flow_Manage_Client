import { Button, Input } from "keep-react";

const Newsletter = () => {
  return (
    <div className="w-11/12 lg:w-5/6 xl:w-4/5 mx-auto bg-[#9cd7f5] py-16 space-y-5 rounded-xl ">
      <h2 className="text-2xl lg:text-4xl font-semibold text-center ">
        {" "}
        Stay Updated with the Latest Insights
      </h2>
      <p className="text-center text-[#515153]">
        Get expert tips, new feature updates, and exclusive offers delivered
        straight to your inbox every month.
      </p>
      <fieldset className="relative max-w-md mx-auto flex flex-col justify-center">
        <Input
          placeholder="Enter Your Email..."
          className="ps-11 border-none relative "
        />
        <Button color="success" className="absolute right-1">
          Subcribe
        </Button>
      </fieldset>
    </div>
  );
};

export default Newsletter;
