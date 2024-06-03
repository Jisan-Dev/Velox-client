const SectionHeader = ({ heading, subHeading }) => {
  return (
    <header className="text-center my-10 font-sans">
      <h3 className="text-5xl max-sm:text-4xl font-semibold"> {heading} </h3>
      <p className=" text-base mt-2 font-medium text-neutral-600"> {subHeading} </p>
      <div className="h-[2px] bg-orange-500 w-36 mx-auto my-4"></div>
    </header>
  );
};

export default SectionHeader;
