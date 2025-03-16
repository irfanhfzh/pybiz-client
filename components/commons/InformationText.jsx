const InformationText = ({ title, description }) => {
  return (
    <div className="mobile-md:flex-row mt-3 flex w-full flex-col items-start gap-4 text-sm">
      <p className="w-fit shrink-0 text-slate-400">{title}</p>
      <p className="mobile-md:text-right flex-1 text-left break-words">
        {description}
      </p>
    </div>
  );
};

export default InformationText;
