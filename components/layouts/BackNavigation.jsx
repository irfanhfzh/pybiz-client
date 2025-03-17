import React from "react";
import { ArrowLeft } from "lucide-react";

const BackNavigation = ({ title, onBack, rightElement, className = "" }) => {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.back();
    }
  };

  return (
    <div className={`flex items-center justify-between gap-2 p-4 ${className}`}>
      <button
        onClick={handleBack}
        className="rounded-full p-1 transition-colors"
        aria-label="Go back"
      >
        <ArrowLeft className="h-6 w-6" />
      </button>

      <h1 className="truncate text-lg font-semibold">{title}</h1>

      {rightElement ? rightElement : <div className="h-8 w-8"></div>}
    </div>
  );
};

export default BackNavigation;
