const Title = ({ title, subtitle, color }) => {
  return (
    <div className="w-full lg:w-4/12 mx-auto space-y-3 py-6">
      <h2
        className={`text-center text-${
          color ? color : "black"
        } text-2xl lg:text-4xl font-semibold`}
      >
        {title}
      </h2>
      <p className="text-center text-[#888888]">{subtitle}</p>
    </div>
  );
};

export default Title;
