const InformationText = ({ title, description }) => {
  return (
    <div className="flex flex-col mobile-md:flex-row items-start text-sm mt-3 w-full gap-4">
      <p className="text-gray-400 w-fit shrink-0">{title}</p>
      <p className="text-left mobile-md:text-right flex-1 break-words">
        {description}
      </p>
    </div>
  );
};

export default InformationText;
